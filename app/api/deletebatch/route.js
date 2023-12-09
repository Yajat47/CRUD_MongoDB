import connectMongoDB from "libs/mongodb.js";
import Batch from "models/batch.js";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { p } = await request.json();
    await connectMongoDB();
    const info = await Batch.findOneAndDelete( { _id : p   });
    //console.log(info);
  
    //const topics = await Batch.find();
    return NextResponse.json({info , status:200});
  }