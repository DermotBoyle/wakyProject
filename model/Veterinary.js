const mongoose = require("../config");
const schema = new mongoose.Schema(
  {
    objectId: String,
    name: String,
    city: String
  },
  { collection: "veterinary" }
);

module.exports = mongoose.model("Veterinary", schema);
