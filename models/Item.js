import mongoose from "mongoose";

const itemModel = new mongoose.Schema({
  name:String,
  price:Number,
  picture:String,
  type:String
})

export default mongoose.model("items" , itemModel);