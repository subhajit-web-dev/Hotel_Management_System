const mongoose = require('mongoose')
//const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb+srv://subhajit:jENEP1234@cluster0.q0qcvmz.mongodb.net/Hotel_Management_System?retryWrites=true&w=majority'
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const locations = await mongoose.connection.db.collection("Locations");
            foodCollection.find({}).toArray(async function (err, data) {
                const hotels = await mongoose.connection.db.collection("Hotels");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            }); 
        }
    })
};
