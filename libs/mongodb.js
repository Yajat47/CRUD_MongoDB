import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dev:Abcd1234\$@serverlessinstance0.pmbhjm0.mongodb.net/Tracker?retryWrites=true&w=majority");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
