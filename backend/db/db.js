import  express  from "express";
import mongoose from "mongoose";

const connectDb = async(DATABASE_URL)=>{
try{
    const options={
        dbName:"ItDep"
    }
    await mongoose.connect(DATABASE_URL, options);
    console.log("Connection established successfully ⚡⚡")
}catch(error){
    console.log(error);
}
}

export default connectDb;