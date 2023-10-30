import connectMongoDB from "libs/mongodb.js";
import User from "models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST(request) {
    try {
        const {username , password} = await request.json();
        await connectMongoDB();

        const user = await User.findOne({ username });
        if (!user) {
          return NextResponse.json({ error: 'Invalid username or password' } , {status : 401});
        }

        // const salt = await bcrypt.genSalt(10);
        // let password2 = await bcrypt.hash(password, salt);
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return NextResponse.json({ error: 'Invalid username or password' }, {status : 401});
        }
    
        // request.session.username = user.username;
    
       return NextResponse.json({ message: 'Login successful' } , {status:200});



       
      } catch (error) {
        console.log(error);
       return NextResponse.json({ error: 'An error occurred' } , {status:401});
      }
 
}


export async function PUT(request ) {
  try {
      const {username , password} = await request.json();

      
      //console.log(username);
      await connectMongoDB();    
  
   
    const user = new User({ username, password });
    await user.save();
    
    return NextResponse.json({ message: 'User registered successfully' },{status:201});
  
     
    } catch (error) {
      console.log(error);
     return NextResponse.json({ error: 'An error occurred' }, {status:400});
    }

}




