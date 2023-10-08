import mongoose, { Schema } from "mongoose";

const batchSchema = new Schema(
  {
    upc : String ,                  
    itemState : String, 

     s_variety : String,
     s_temp : String,
     s_region : String,
     s_elevation: String,
     s_flowering: String,
     s_imgs: [String], 
    s_date : String,

     p_ptype : String,
    p_params : [String], 
     p_pulpdate : String ,
     p_dtabledate : String ,
     p_dcompdate : String ,
     p_dparams: String , 
     p_bdate: String ,
     p_spackdate: String ,
     p_imgs: [String] ,

     h_resttime : String,
     h_startdate : String,
     h_gradesize : String,
     h_baggingdetails : String,
    

     r_date: String,
     r_degasstime: String,
     r_flavourp: String,
     r_imgs : [String],

     m_date : String ,
     brewing : String , 
    
  },
  {
    timestamps: true,
  }
);

const Batch = mongoose.models.Batches || mongoose.model("Batches", batchSchema);

export default Batch;
