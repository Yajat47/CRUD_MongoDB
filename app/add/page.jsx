"use client";


import { useEffect , useState } from "react";
import Add from "components/Add";

const Info = () => {
  
  return ( 
   
      
    <Add/> 
   );
}
 
export default Info;



// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Upload from "@/components/Upload";
// const Add = () => {
    

//   const [upimgs2 , setupimgs2] =useState([]);



//   const [bdet, setdet] = useState(
//       {
//           upc: "",
//           s_variety:"",
//           temp:"",
//           region:"" ,
//           elevation : "",
//           date : "",
//           flowering:"" ,
    
//       }
//           );

//   const checkIfWalletIsConnected = async (e)=> {
//     e.preventDefault();
//       try {
//           const res = await fetch('http://localhost:3000/api/add', {
//               method: "POST",
//               headers: {
//                 "Content-type": "application/json",
//               },
//               body: JSON.stringify({ bdet , upimgs2   }),
//             });
      
//             if (!res.ok) {
//               throw new Error("Failed to Add a batch");
//             }
      
//           //   router.refresh();
//           //   router.push("/");
//           window.alert("SuccessFull");

//       } 
//       catch (err) {
//         console.log(err);
//       }
//     }
//     const handleChange = (e) => {
//       setdet(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   }

//   return ( 
//     <section>
//     <form class="formren" className='mt-8 p-6 text-lg '>
//       <div>
//           <div className='text-xl font-bold m-6 p-2 text-purple-700'> Add a new Batch</div>
//           <div className='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Batch Details</div>
//               <div className='flex justify-center '>
//               <label className='text-lg font-medium ' for="upc">Unique Product Code (UPC) :</label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
//               </div>
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="s_variety">Fertilizers and Soil Info :
//               </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="s_variety" id="s_variety" onChange={handleChange} placeholder=" Variety"></input>
//               </div>
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="temp">Temperature </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="temp" id="temp" onChange={handleChange} placeholder=" Temperature"></input>
//               </div>
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="region">Region / Location </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="region" id="region" onChange={handleChange} placeholder=" Locaction"></input>
//               </div>
              
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="planter">Elevation  </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="elevation" id="elevation" onChange={handleChange} placeholder=" Region"></input>
//               </div>
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="planter">Harvesting Date  </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="date" id="date" onChange={handleChange} placeholder=" Harvesting Date"></input>
//               </div>
//               <div className='mt-8 flex justify-center '>
//               <label className='text-lg font-medium ' for="planter">Flowering Date  </label>
//               <input className='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="flowering" id="flowering" onChange={handleChange} placeholder=" Flowering Date"></input>
//               </div>

              
//               <div className='mt-12 flex justify-center '>
//               <Upload upimgs2={upimgs2} setupimgs2={setupimgs2}/>
//               </div>
//               <br />

//               <br />
//               <div className='flex justify-center '>
//               <button className='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Batch </button>
//               </div>
//           </div>
//           </form>
//           </section>

      
//    );
// }

// export default Add;
