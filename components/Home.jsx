'use client'
import axios from "axios";
import { useEffect, useState } from "react";
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
           await axios.get("http://localhost:3000/api/add").then((res)=>{
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
        <div>
        <div class='text-4xl font-bold text-yellow-800 m-6 '>Home - Database</div>

        {/* <div><button class='m-4 p-6 flex justify-center bg-purple-300' onClick={(e)=> dashcall()} > DashBoard</button></div> */}
        <div>
        <div className="flex flex-row items-center">
        <a href="/add" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Add Batch</a>
        <a href="/block/home" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Blockchain Portal</a>
        <a href="/logout" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Logout</a>

        </div>
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
    <a href={`/process?id=${b._id}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Processing</a>
              }

{ b.itemState == "Processing" && 
    <a href={`/hulling?id=${b._id}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hulling</a>
              }

  { b.itemState == "Hulling" && 
    <a href={`/roasting?id=${b._id}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roasting</a>
              }
   { b.itemState == "Roasting" && 
    <a href={`/packaging?id=${b._id}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Packaging</a>
              }   
    { b.itemState == "Packaging" && 
    <a href={`/review?id=${b._id}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Review</a>
              } 
</div>


           ))
           } </div>
         } 
        </div>

    </div>
     );
}
 
export default Home;

