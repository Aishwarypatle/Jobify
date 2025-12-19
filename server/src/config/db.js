import mongoose from "mongoose";

export const connectDB = async () => {
  // console.log("hello");
  
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error({err});
    process.exit(1);
  }
};
