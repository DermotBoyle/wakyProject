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
    countryCode: String,
    provinceCode: String,
    cp: String,
    address: String,
    city: String,
    countryString: String,
    name: String,
    createdAt: String,
    updatedAt: String,
    state: Number,
    vetServices: Object,
    rates: Object,
    campaigns: Object,
    vetServiceCategories: Object,
    employees: Object

  },
  { collection: "veterinary" }
);

module.exports = mongoose.model("Veterinary", schema);
