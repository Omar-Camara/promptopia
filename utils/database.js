import mongoose from "mongoose";

let isConnected = false; // tract the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Using existing connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (e) {
    console.log(e);
  }
};
