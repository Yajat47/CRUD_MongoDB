import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const {  sku,  bdet , upimgs2 } = await  request.json();
  
  await connectMongoDB();
  await Batch.findByIdAndUpdate(sku, 
    { 
        itemState : "Roasting",
        r_date:bdet.r_date,
        r_degasstime:bdet.r_degasstime,
        r_flavourp:bdet.r_flavourp,
        r_imgs : upimgs2

     });
  return NextResponse.json({ message: "Roating Added"  }, { status: 200 });
}