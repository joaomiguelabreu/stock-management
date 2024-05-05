const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoDBURL, {
      dbName: "stock_management",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit();
  }
};

module.exports = connectDB;
