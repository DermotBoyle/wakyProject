const express = require("express");
const server = express();
const Veterinary = require("./model/Veterinary");
const User = require("./model/User");
const Rate = require("./model/Rate");
const path = require("path");
const bodyParser = require("body-parser");
const sha1 = require("sha1");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;

const port = process.env.PORT || 3001;
const salt =
  "=DPr4D2gHVP^39s#vkU="; /*posibilidad de pasarlo a la conf de heroku y al .env */
const secret = "As#zB+U=22&FIaIm";
const CIRCUNFERENCE_EARTH = 40075 ; // km
const DEGREES_IN_CIRCUFERENCE = 360;
const KM_IN_DEGREE = CIRCUNFERENCE_EARTH/DEGREES_IN_CIRCUFERENCE;
const DEGREES_IN_KM = 1/KM_IN_DEGREE;

//---------------------------------------- SETTINGS -----------------------------------------

server.set("port", port);

// Re-dirigir a React Router
server.use("/", express.static(path.join(__dirname, "../build")));
server.use("/veterinaria", express.static(path.join(__dirname, "../build")));
server.use("/details", express.static(path.join(__dirname, "../build")));

// Middleware
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(passport.initialize());
server.use(bodyParser.json());
server.use(cookieParser(secret));

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: req => req.cookies && req.cookies.jwt,
      secretOrKey: secret
    },
    (payload, done) => {
      console.log("received cookie info", payload);
      return done(null, payload.user);
    }
  )
);

passport.use(
  new LocalStrategy({ usernameField: "email" }, function(
    username,
    password,
    done
  ) {
    console.log("Logging in...", { username, password });

    const userHash = sha1(password + salt);
    console.log("Preguntando a mongodb");

    User.find(
      {
        username,
        userHash
      },
      (err, result) => {
        console.log("Terminado con mongodb", { result });
        if (err) console.log(err);
        const user = result[0];
        done(err, user && user.objectId);
      }
    );
  })
);

// -----------------------------------------  API  ---------------------------------------------------


// ROUTE 00: /api                          returns "API list"

server.get("/api", (req, res) => {
  res.write("/api/veterinary                List of veterinaries\n");
  res.write("/api/veterinary/:objectId      Detail for veterinary\n");
  res.write("/api/user/me                   The information from user\n");
  res.write(
    "/api/registration              Introduce info for first time from user\n"
  );
  res.write("/api/login                     User sign in\n");
  res.write("api/logout                     User sign out\n");
  res.write("");
  res.end();
});


// ROUTE 01: /api/veterinary               return "Vet array (JSON)"

server.get("/api/veterinary", (req, res) => {
  const limit = Number(req.limit) || 200; // default max 200 results
  if(req.query.lat && req.query.long){
    const lat = Number(req.query.lat); 
    const long = Number(req.query.long);
    const dist = req.query.dist || 2;  // dist in km
    const degrees = dist*DEGREES_IN_KM;
    console.log({lat, long, dist, degrees});

    Veterinary.find({
      'geolocation.latitude': {$gte:lat-degrees, $lte:lat+degrees},
      'geolocation.longitude': {$gte: long-degrees, $lte: long+degrees} 
    }, (err, results)=> {
      if (err) console.log(err);
      res.json(results);
    }).limit(limit);

  } else {
    Veterinary.find(req.query, (err, result) => {
      if (err) console.log(err);
      res.json(result);
    }).limit(limit);
  }
});


// ROUTE 02: /api/veterinary/:internalId           return "1 vet object"

server.get("/api/veterinary/:objectId", (req, res) => {
  Veterinary.find({ objectId: req.params.objectId }, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});


// ROUTE 03:  /api/veterinary/:internalId/comment

server.get('/api/veterinary/comment/:objectId', (req, res) => {

  Rate.find({"veterinary.objectId":  req.params.objectId}, (err, result) => {
    console.log(req.params.objectId, result)
    if (err) console.log(err);
    else result.forEach(r=>res.json(r.comment));
  });
});


//  ROUTE 03: /api/registration                    SIGN UP

server.post("/api/registration", (req, res) => {
  console.log("POST /api/registration", req.body);
  const data = req.body;

  User.findOne({ username: data.email }, (err, result) => {
    if (result) {
      res.status(409).send("Your email is already created");
    } else if (err) {
      res.sendStatus(500);
    } else {
      data.username = data.email;
      data.userHash = sha1(data.password + salt);
      data.objectId = Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(32);

      const user = new User(data);

      user.save((err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("An error occured in the registration");
        } else {
          console.log("User created", {
            user,
            results
          });
          res.status(201);
          res.json(results);
        }
      });
    }
  });
});


// ROUTE 04: /api/user/me                           return our user

server.get("/api/user/me",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("jwt extracted", req.user);

    User.find({ objectId: req.user }, (err, result) => {
      if (err) console.log(err);
      res.json(result[0]);
    });
  }
);


// ROUTE 05:  /api/login                          SIGN IN

server.post("/api/login", (req, res, next) => {
  console.log("login starting", req.body);

  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("Finish authentication, generating jwt", { user, err });
    if (err || !user) return res.sendStatus(401);

    jwt.sign({ user }, secret, (err, token) => {
      console.log("jwt generated", err, token);

      if (err) return res.status(500).json(err);
      res
        .cookie("jwt", token, {
          httpOnly: true
        })
        .send();
      res.json({ jwt: token });
    });
  })(req, res, next);
});


// ROUTE 06: /api/logout                         SIGN OUT

server.post("/api/logout", (req, res, next) => {
  res.clearCookie("jwt").send();
});


// ROUTE 07: /api/user/me

server.post("/api/user/me/comment", (req, res) => {
  const rate = new Rate(req.body);

  rate.save((err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occured with your comment");
    } else {
      console.log("Comment done", {
        rate,
        results
      });
      res.status(201);
      res.json(results);
    }
  });
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});
