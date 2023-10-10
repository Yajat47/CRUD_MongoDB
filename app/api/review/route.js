import connectMongoDB from "@/libs/mongodb";
import Batch from "@/models/batch";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { p } = await request.json();
    await connectMongoDB();
    const info = await Batch.findOne( { _id : p   });
    //console.log(info);
  
    //const topics = await Batch.find();
    return NextResponse.json( {info} , {status:200} );
  }