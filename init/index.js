// if (process.env.NODE_ENV != "production") {
//     require('dotenv').config();
// }

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";
// console.log("DB URL:", process.env.MONGO_URL);


main()
    .then(() => {
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "694f90e1d21f64da6d7bdd67",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();