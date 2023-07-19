import mongoose from "mongoose";
//console.log(provess.env.MONGO);

const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO)
      .then(() => console.log("mongo db connected"));
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
