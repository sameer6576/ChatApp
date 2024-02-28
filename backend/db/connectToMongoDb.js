import { mongoose } from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to mongo db");
  } catch (error) {
    console.log("Error connecting to mongoDb", error.message);
  }
};

export default connectToMongoDb;
