const express = require('express');
const server = express();
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const Veterinary = require('./model/Veterinary');
const User = require('./model/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const salt = '=DPr4D2gHVP^39s#vkU=';
const sha1 = require('sha1');
const cookieParser = require('cookie-parser');


server.set("port", port);

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
server.use(cookieParser('secret'));

passport.use(new JwtStrategy({
  jwtFromRequest: (req) => req.cookies && req.cookies.jwt, 
  secretOrKey: 'secret'
  }, 
  (payload, done)=> {
  console.log('received cookie info', payload)
  return done(null, payload.user)
}))

passport.use(new LocalStrategy({usernameField: 'email'},
  function (username, password, done) {
    console.log('LOGGING IN...', {username, password
    })

    const userHash = sha1(password + salt);
    console.log("Preguntando a mongodb");

    User.find({
      username,
      userHash
    }, (err, result) => {
      console.log("Terminado con mongodb");
      if (err) console.log(err);
      const user = result[0];
      done(err, user && user.objectId);
    });
  }
));


/// ROUTE 0: /       "Hola"

server.use("/", express.static(path.join(__dirname, "../build")));
server.use("/veterinaria", express.static(path.join(__dirname, "../build")));
//server.use("/", express.static(path.join(__dirname, "/build")));
//server.use("/", express.static(path.join(__dirname, "/build")));


/// ROUTE 1: /api                devuelve "Lista de APIs"

server.get("/api", (req, res) => {
  res.write("/api/veterinary                List of veterinaries\n");
  res.write("/api/veterinary/:objectId      Detail for veterinary\n");
  res.write('/api/user                      List of users\n');
  res.write('/api/user/:objectId            Detail for one user\n');
  res.write('/api/signup                    Sign up of a user\n')
  res.write('')
  res.end();
});


/// ROUTE 2: /api/veterinary     devuelve "Array de 100 veterinarias (JSON)"

server.get("/api/veterinary", (req, res) => {
  Veterinary.find(req.query, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

/// ROUTE 3: /api/veterinary/:objectId return "1 vet object"

server.get("/api/veterinary/:objectId", (req, res) => { 
  Veterinary.find({ objectId: req.params.objectId }, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});

/// ROUTE : /api/user
server.get("/api/user/me", passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log('jwt extracted', req.user)  
  User.find({objectId: req.user}, (err, result) => {
      if (err) console.log(err);
      res.json(result[0]);
    });
});

//  ROUTE 4: /api/signup

server.post('/api/signup', (req, res) => {
  // User.insertOne(req.body);
  res.send('User created' + JSON.stringify(req.body))
})


// SIGN IN 
server.post('/api/login', (req, res, next)=> {
  console.log("login starting", req.body);

  passport.authenticate('local', {session:false}, (err, user, info) => {
    console.log('Finish authentication, generating jwt');
    if (!user) return res.sendStatus(401);
    jwt.sign({user}, 'secret', (err, token) => {
      console.log('jwt generated', err, token)
      
      if (err) return res.json(err);
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
      })
      res.json({jwt:token})
    })

    // res.send('ok!')
  })(req,res,next);
})

 
// SIGN OUT

server.post('/api/logout', (req, res, next)=> {
  res.clearCookie('jwt').send();
})


server.listen(port, function() {
  console.log("Listening on port " + port);
});
