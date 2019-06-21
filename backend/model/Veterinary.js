const mongoose = require("../config");
const schema = new mongoose.Schema(
  {
    objectId: String,
    name: String,
    city: String,
    provinceString: String,
    phone: String,
    internalId: String,
    geolocation: Object,
    lowercaseName: String,

  },
  { collection: "veterinary" }
);

module.exports = mongoose.model("Veterinary", schema);
