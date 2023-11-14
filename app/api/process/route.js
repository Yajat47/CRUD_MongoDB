import connectMongoDB from "libs/mongodb.js";
import Batch from "models/batch";
import block from "models/block";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const {  sku,  bdet , upimgs2 } = await  request.json();
  
  await connectMongoDB();
  await Batch.findByIdAndUpdate(sku, 
    { 
        itemState : "Processing",
        p_ptype: bdet.p_ptype,
  p_params: bdet.p_params,
  p_pulpdate: bdet.p_pulpdate,
  p_dtabledate: bdet.p_dtabledate,
  p_dcompdate: bdet.p_dcompdate,
  p_dparams: bdet.p_dparams,
  p_bdate: bdet.p_bdate,
  p_spackdate: bdet.p_spackdate,
  p_imgs : upimgs2

     });
  return NextResponse.json({ message: "Process Added"  }, { status: 200 });
}

export async function POST(request) {
  const {sku , processing } = await request.json();
  await connectMongoDB();
  await block.findOneAndUpdate({
        sku : parseInt(sku),} ,{
        processing : processing
  });
  return NextResponse.json({ message: "Updated Info " }, { status: 202 });
}