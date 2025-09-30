const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://tazeemrahman88_db_user:Musabhai007@cluster0.1vyfmy8.mongodb.net/mernfood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB Successfully");

        const db = mongoose.connection.db;
        const collection = db.collection("food_items");

        const data = await collection.find({}).toArray();
    const categoryCollection = db.collection("foodCategory");
    const catData = await categoryCollection.find({}).toArray();
    global.food_items = data;
    global.foodCategory = catData;

    } catch (err) {
        console.error("--- MongoDB Connection Error:", err);
    }
};

module.exports = mongoDB;
