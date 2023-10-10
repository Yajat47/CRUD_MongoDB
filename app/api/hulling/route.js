import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const {  sku,  bdet  } = await  request.json();
  
  await connectMongoDB();
  await Batch.findByIdAndUpdate(sku, 
    { 
        itemState : "Hulling",
        h_resttime:bdet.h_resttime,
        h_startdate:bdet.h_startdate,
        h_gradesize:bdet.h_gradesize,
        h_baggingdetails:bdet.h_baggingdetails,

     });
  return NextResponse.json({ message: "Hulling Added"  }, { status: 200 });
}