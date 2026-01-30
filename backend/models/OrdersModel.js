import mongoose, { model } from "mongoose";

const OrderSchema = new mongoose.Schema({
      name:String,
      qty:Number,
      price:Number,
      mode:String
})

const Order = mongoose.model("Order",OrderSchema);
export default Order;