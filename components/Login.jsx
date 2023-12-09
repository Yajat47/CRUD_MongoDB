'use client'
import { useState } from "react";
import { isAuthenticated } from "./Auth";
import { document } from "postcss";
import Image from "next/image";
import skia from '../assets/image 35.svg';

const Login = ({setauth}) => {
    const [det , setdet] = useState({});
    const [lod ,setlod] =useState(false);

    const handleChange = (e) => {
        e.preventDefault();
      
        setdet(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handlesub = async(e)=>{
        e.preventDefault();
        e.currentTarget.disabled = true;
        setlod(true);
        try {

       // let url = window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/login';
      //  console.log(url);
        fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username : det.email , password : det.password   }),
      }).then(
        res => {if (res.status == 200) {
           
           sessionStorage.setItem("user",det.email); 
          setauth(true);
         setlod(false);
        }
        else{
            window.alert("Invalid Credentials Please try again..");
            setlod(false);
        }}
        
      
      )
      setlod(false)
      e.currentTarget.disabled = false;
    }
      catch(error){
        window.alert("Invalid Credentials Please try again..");
        e.currentTarget.disabled = false;
        setlod(false);
        console.log(error);
      }
    }
    return ( 
        <div class="">
  <div class="flex flex-col items-center justify-center px-6 py-8 ">
  <div>
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <Image className="w-12 h-8" src={skia} alt='Op' />
      <span className="self-center text-3xl text-yellow-950 font-bold whitespace-nowrap ">Skiá Admin</span>
  </a>
  </div>
      <div class="w-full  bg-white rounded-lg shadow dark:border  max-w-md mt-24  ">
       
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-yellow-950 md:text-2xl ">
                  Sign In
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input onChange={(e)=> handleChange(e)} type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e)=> handleChange(e)}  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                 { lod == false &&
                  <button onClick={(e)=> handlesub(e)} class="w-full text-white bg-yellow-950 hover:bg-yellow-850 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  }
                  { lod  &&
                    <button class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Signing in...</button>
                  }
              </form>
          </div> 
         
      </div>
  </div>
</div>
     );
}
 
export default Login;
