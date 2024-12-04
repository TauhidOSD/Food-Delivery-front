import mongoose from "mongoose";

export const connectDB =async () => {
  
    await mongoose.connect('mongodb+srv://greatstack:sOFGVsj2EuvABOVp@cluster0.e88hc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}