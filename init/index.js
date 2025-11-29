const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js")

// database connection
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}


const initDB = async() =>{
   await Listing.deleteMany({})
   initData.data = initData.data.map((obj) => ({...obj, owner:'6919b6d2d0e71fc3d0f971d4'}))
   await Listing.insertMany(initData.data)
   console.log("data was initialized");
};

initDB();