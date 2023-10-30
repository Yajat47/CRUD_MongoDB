import mongoose, { Schema } from "mongoose";

const BlockSchema = new Schema(
  {
    upc : String ,
    sku : Number,
    harvesting: String , 
    processing: String ,
    hulling : String ,
    roasting : String ,
    packaging : String    
  },
  {
    timestamps: true,
  }
);

const Block = mongoose.models.Block || mongoose.model("Block", BlockSchema);

export default Block;
