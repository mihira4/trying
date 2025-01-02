import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    contactInformation: {
      type: String,
      required: true,
    },
  },

  { timestamps: true } 
  //to add createdAt and updatedAt fields

);

const ItemModel = mongoose.model("items", itemSchema); 
//it will be stored in the 'items' collection of the database
export default ItemModel;
