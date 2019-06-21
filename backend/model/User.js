const mongoose = require("../config");
const schema = new mongoose.Schema({
    objectId: String,
    username: String,
    createdAt: String,
    updatedAt: String,
    client: Object,
    userHash: String,
    shop: Boolean,
    userType: Number,
    favouriteVets: Object,
    favouriteServices: Object,
    favouriteCampaigns: Object,
    ACL: Object

}, {
    collection: "users"
});

module.exports = mongoose.model("Users", schema);