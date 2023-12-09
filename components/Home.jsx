'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
// const getdata = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/add", {
//         cache: "no-store",
//       });
  
//       if (!res.ok) {
//         throw new Error("Failed to fetch Data");
//       }
  
//       return res.json();
//     } catch (error) {
//       console.log("Error loading topics: ", error);
//     }
//   };



const Home = () => {
    const [batches , setbatch] = useState([]);
    const [load , setload] = useState(false);

    const getdata = async () => {
        try {
           await axios.get(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+"/api/add").then((res)=>{
           // console.log(res.data);
            setbatch(res.data["info"]);
            setload(true);
            // console.log(res.data["info"]);
           })
      
       
          // console.log(res);
        } catch (error) {
          console.log("Error loading topics: ", error);
        }
      };

        useEffect(()=>{
            getdata();
            },[]);
  //  const da = await getdata();
 //   console.log(da);
    return ( 
        <div className="ml-24">
          <Navbar/>
        <div class='text-4xl font-bold text-yellow-800 m-6 mt-24  '>Home - Database <span> <a href="/add" class="ml-24  text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Add Batch
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a></span></div>

        {/* <div><button class='m-4 p-6 flex justify-center bg-purple-300' onClick={(e)=> dashcall()} > DashBoard</button></div> */}
        <div>
        {/* <div className="flex flex-row items-center">
        <a href="/add" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Add Batch</a>
        <a href="/block/home" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Blockchain Portal</a>
        <a href="/logout" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Logout</a>

        </div> */}
          {load == true && 
          <div>
            
            {
            
          batches.map((b , index) => (

<div class="max-w-sm   p-6 bg-white border border-gray-200 rounded-lg shadow m-6 p-2 shadow-xl border-2 border-yellow-900 " key={index}>
<a href="#">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Batch  <span class='text-2xl font-light text-yellow-900'>{index}</span></h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">State : <span class='italic font-semibold'>{b.itemState}</span></p>

{ b.itemState == "Harvested" && 
    <a href={`/process?id=${b._id}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Processing
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }

{ b.itemState == "Processing" && 
    <a href={`/hulling?id=${b._id}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Hulling
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }

  { b.itemState == "Hulling" && 
    <a href={`/roasting?id=${b._id}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Roasting
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }
   { b.itemState == "Roasting" && 
    <a href={`/packaging?id=${b._id}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Packaging
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }   
    { b.itemState == "Packaging" && 
    <a href={`/review?id=${b._id}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Review
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              } 

<a href={`/review?id=${b._id}`} class="ml-6 text-gray-900 bg-white hover:bg-orange-300 focus:ring-4 focus:outline-none border-2 border-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center rounded-xl ">QR 
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a> 
</div>




           ))
           } </div>
         }
         {
          load == false &&
          <div role="status" className="flex justify-center mt-48">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
         } 
        </div>

    </div>
     );
}
 
export default Home;

