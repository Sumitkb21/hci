import mongoose from "mongoose";

export const connectDB = () => mongoose.connect(process.env.MONGO_URI, {
    dbName: "HCL_TECH",
})
.then(()=> console.log("database connected "))
.catch((e)=> console.log(e));
