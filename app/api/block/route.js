import connectMongoDB from "libs/mongodb.js";
import block from "models/block";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {sku , upc , harvesting } = await request.json();
  await connectMongoDB();
  await block.create({
        sku : parseInt(sku),
        upc : upc ,
        harvesting : harvesting
  });
  return NextResponse.json({ message: "Batch Added" }, { status: 200 });
}

