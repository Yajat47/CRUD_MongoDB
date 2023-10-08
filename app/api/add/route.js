import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { bdet , upimgs2 } = await request.json();


  let det = {
    upc: bdet.upc,
    itemState : "Harvested",
    s_variety:bdet.s_variety,
    s_temp:bdet.temp,
    s_region:bdet.region ,
    s_elevation : bdet.elevation,
    s_date : bdet.date,
    s_flowering:bdet.flowering ,
    s_imgs : upimgs2,
  };
  

  await connectMongoDB();
  await Batch.create({ 
    upc: bdet.upc,
    itemState : "Harvested",
    s_variety:bdet.s_variety,
    s_temp:bdet.temp,
    s_region:bdet.region ,
    s_elevation : bdet.elevation,
    s_date : bdet.date,
    s_flowering:bdet.flowering ,
    s_imgs : upimgs2,
    // p_ptype : "",
    // p_params : [""],
    //  p_pulpdate : "" ,
    //  p_dtabledate : "" ,
    //  p_dcompdate : "" ,
    //  p_dparams: "" , 
    //  p_bdate: "" ,
    //  p_spackdate: "" ,
    //  p_imgs: [""] ,

    //  h_resttime : "",
    //  h_startdate : "",
    //  h_gradesize : "",
    //  h_baggingdetails : "",
    

    //  r_date: "",
    //  r_degasstime: "",
    //  r_flavourp: "",
    //  r_imgs : [""],

    //  m_date : "" ,
    //  brewing : "" ,
   });
  return NextResponse.json({ message: "Batch Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const info = await Batch.find( {  }, { _id: 1, itemState: 1 });
  //console.log(info);

  //const topics = await Batch.find();
  return NextResponse.json( {info} , {status:200} );
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
