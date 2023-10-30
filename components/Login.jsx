'use client'
import { useState } from "react";
import { isAuthenticated } from "./Auth";
import { document } from "postcss";

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
        try {

          
        fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username : det.email , password : det.password   }),
      }).then(
        res => {if (res.status == 200) {
           
           sessionStorage.setItem("user",det.email); 
          setauth(true);
         
        }
        else{
            window.alert("Invalid Credentials Please try again..");
        }}
        
      
      )
      setlod(false)
      e.currentTarget.disabled = false;
    }
      catch(error){
        window.alert("Invalid Credentials Please try again..");
        e.currentTarget.disabled = false;
        console.log(error);
      }
    }
    return ( 
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  Skia Admin 
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
       
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input onChange={(e)=> handleChange(e)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={(e)=> handleChange(e)}  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button onClick={(e)=> handlesub(e)} class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 
              </form>
          </div> 
         
      </div>
  </div>
</section>
     );
}
 
export default Login;
