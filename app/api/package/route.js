import connectMongoDB from "libs/mongodb";
import Batch from "models/batch";
import Block from "models/block";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const {  sku,  bdet  } = await  request.json();
  
  await connectMongoDB();
  await Batch.findByIdAndUpdate(sku, 
    { 
        itemState : "Packaging",
        m_date:bdet.p_date,
        brewing:bdet.brewing

     });
  return NextResponse.json({ message: "Packaging Added"  }, { status: 200 });
}

export async function POST(request) {
  const {sku , packaging } = await request.json();
  await connectMongoDB();
  await Block.findOneAndUpdate({
        sku : parseInt(sku),} ,{
        packaging : packaging
  });
  return NextResponse.json({ message: "Updated Info " }, { status: 202 });
}