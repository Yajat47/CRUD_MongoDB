import { NextResponse } from "next/server";

export async function POST(req) {
    req.session.destroy((err)=>{
        if(err) {
            console.log(err);
            return NextResponse.json({message:"Internal Server Error"},{status:400});
        }

        NextResponse.json({message:"Logged out successfully"},{status:200});
    })
 
}
