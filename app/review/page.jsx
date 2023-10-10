'use client'

import { useState , useEffect } from "react";




const Review = () => {
   

    const [batches , setbatch] = useState();
    const [load , setload] = useState(false);
    const [sku , setsku] = useState(0);


    const [bdet, setdet] = useState(
        {
      sku:0,                    // Stock Keeping Unit (SKU)
      upc:"",                  
       itemState:"", 
     s_variety :"",
     s_temp :"",
     s_region :"",
     s_elevation:"",
     s_flowering:"",
     s_soiltype :"",
     s_imgs :[],
     s_date:"",

     p_ptype:"",
     p_params:[],
     p_pulpdate:"",
     p_dtabledate:"",
     p_dcompdate:"",
     p_dparams:"",
     p_bdate:"",
     p_spackdate:"",
     p_imgs:[],

     h_resttime:"",
     h_startdate:"",
     h_gradesize:"",
     h_baggingdetails:"",

     r_date:"",
     r_degasstime:"",
     r_flavourp:"",
     r_imgs:"",
     m_date:"",
     brewing:""       
        }
            );

    const checkIfWalletIsConnected = async ()=> {
     
        try {

            const params = new URLSearchParams(window.location.search); 
            setsku((params.get('id')));
            let p = params.get('id');
          
        const res = await fetch('http://localhost:3000/api/review', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ p   }),
      });

      if (!res.ok) {
        throw new Error("Failed ");
      }  
        //     setdet(
        //         {
        //             sku:result[0][0],                    // Stock Keeping Unit (SKU)
        //             upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
        //            pAdd:result[2][0], 
        //              itemState:state, 
        //             s_variety :ethers.decodeBytes32String(result[4][0]).toString(),
        //            s_temp :ethers.decodeBytes32String(result[5][0]).toString(),
        //             s_region :ethers.decodeBytes32String(result[6][0]).toString(),
        //            s_elevation:ethers.decodeBytes32String(result[7][0]).toString(),
        //            s_flowering:ethers.decodeBytes32String(result[8][0]).toString(),
        //            s_soiltype :result[9][0],
        //            s_imgs :result[10].toString().split(","),
        //            s_date:ethers.decodeBytes32String(result[11][0]).toString(),
        //            p_ptype:ethers.decodeBytes32String(result[12][0]).toString(),
        //            p_params:result[13].toString().split(","),
        //            p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString(),
        //            p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString(),
        //            p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString(),
        //            p_dparams:ethers.decodeBytes32String(result[17][0]).toString(),
        //            p_bdate:ethers.decodeBytes32String(result[18][0]).toString(),
        //            p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
        //            p_imgs:result[20].toString().split(","),
        //            h_resttime:ethers.decodeBytes32String(result[21][0]).toString(),
        //    // :TODO        h_startdate:ethers.decodeBytes32String(result[22][0]).toString(),
        //            h_gradesize:ethers.decodeBytes32String(result[23][0]).toString(),
        //            h_baggingdetails:ethers.decodeBytes32String(result[24][0]).toString(),
        //            r_date:ethers.decodeBytes32String(result[25][0]),
        //            r_degasstime:ethers.decodeBytes32String(result[26][0]),
        //            r_flavourp:ethers.decodeBytes32String(result[27][0]),
        //            r_imgs:result[28].toString().split(","),
        //            m_date:ethers.decodeBytes32String(result[29][0]),
        //               }
        //     );

           // setbatch(sts);
            setload(true);
          //  console.log(bdet);

           




          
          
        } 
        catch (err) {
          console.log(err);
        }
      }
     

    useEffect(()=>{

        checkIfWalletIsConnected();
    },[]);

    return ( 
        <div class=''>
            <div class='text-3xl font-bold m-6 p-2 text-purple-700'> Batch Review</div>
            {load && 
            <div class='flex flex-col bg-white '>
            <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Batch {bdet.sku} : UPC {bdet.upc} </div> 
            <div class='text-3xl font-bold m-6 p-2 text-yellow-900'> Harvesting</div>   
            <ol class="relative border-l border-gray-200 dark:border-gray-700 shadow-lg border-yellow-900 border-2 p-4 pt-12 pb-12 rounded-xl">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Coffee Species : {bdet.s_variety} <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Initial Stage</span></h3>                   
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Arabica is a higher quality and higher value coffee normally grown in cooler, elevated areas of the tropics and sub-tropics at 1000 m or more above sea level. Arabica is used in the roast and ground coffee market
                     and is added to blends of Robusta to improve the quality of instant coffee. 
                    Brazil and Columbia are the major producing countries.</p>

                </li>
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Harvested On :  <span class='text-xl font-bold ml-4 text-yellow-700'>{bdet.s_date}</span></h3>
                </li>
                <li class="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>


                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Location : {bdet.s_region} <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Elevation {bdet.s_elevation}</span></h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">The coffee belt offers the perfect climate for growing coffee beans, because coffee needs a very warm climate and a very specific environment in order to be able to grow. To produce the best possible beans, coffee trees must be grown at great heights in humid, tropical climates with dry and rainy seasons and on fertile soils.
.</p>
                </li>
                <li class="ml-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Soil Information : {bdet.s_soiltype} (Black Soil)</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">The kind of soil required for Coffee cultivation is well drained loamy soil. Both Arabica and Robusta types of coffee are planted in well-drained soil conditions that favour rich organic matter that is slightly acidic.</p>
                </li>
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowering Date :  <span class='text-xl font-bold ml-4 text-yellow-700'>{bdet.s_flowering}</span></h3>
                </li>
                <li class="ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Temperature : {bdet.s_temp}</h3>
        
                </li>

                <div class='mt-12 p-4 '>
                <div  class="grid grid-cols-3 gap-4">
                    {
                    bdet.s_imgs.map((i) => (
                        <div key={i}> 
                        <img src={`https://res.cloudinary.com/dypp5dcp7/image/upload/${i}`}></img>
                         </div>
                    ))
                    }

                </div>
                </div>

            </ol>



            <div class='text-3xl font-bold m-6 p-2 text-yellow-900'> Processing</div>   
            <ol class="relative border-l border-gray-200 dark:border-gray-700 shadow-lg border-yellow-900 border-2 p-4 pt-12 pb-12 rounded-xl">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Process Type : {bdet.p_ptype} <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Havested on {bdet.s_date}</span></h3>                   
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Arabica is a higher quality and higher value coffee normally grown in cooler, elevated areas of the tropics and sub-tropics at 1000 m or more above sea level. Arabica is used in the roast and ground coffee market
                     and is added to blends of Robusta to improve the quality of instant coffee. 
                    Brazil and Columbia are the major producing countries.</p>

                </li>
                { bdet.p_params.map((p)=> (
                <li class="mb-10 ml-6" key={p}>            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> {p} </h3>
                </li> ))}

                <li class="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Drying started on {bdet.p_dtabledate} <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Completed on {bdet.p_dcompdate}</span></h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400"> Drying Table Details are : {bdet.p_dparams}
.</p>
                </li>
                <li class="ml-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Coffee Pulping Date : {bdet.p_pulpdate} </h3>
                </li>
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Bagging Date :  <span class='text-xl font-bold ml-4 text-yellow-700'>{bdet.p_bdate}</span></h3>
                </li>
                <li class="ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Sample Packaged on : {bdet.p_spackdate}</h3>
        
                </li>

                <div class='mt-12 p-4 '>
                <div  class="grid grid-cols-3 gap-4">
                    {
                    bdet.p_imgs.map((i) => (
                        <div key={i}> 
                        <img src={`https://res.cloudinary.com/dypp5dcp7/image/upload/${i}`}></img>
                         </div>
                    ))
                    }

                </div>
                </div>

            </ol>


            <div class='text-3xl font-bold m-6 p-2 text-yellow-900'> Hulling</div>   
            <ol class="relative border-l border-gray-200 dark:border-gray-700 shadow-lg border-yellow-900 border-2 p-4 pt-12 pb-12 rounded-xl">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Hulling Started on : {bdet.h_startdate} </h3>                   

                </li>
                
                <li class="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Resting Period {bdet.h_resttime} </h3>

                </li>
                <li class="ml-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Hulling Grade Information : {bdet.h_gradesize} </h3>
                </li>
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Bagging Details: {bdet.h_baggingdetails}</h3>
                </li>
                

            </ol>


             <div class='text-3xl font-bold m-6 p-2 text-yellow-900'> Roasting</div>   
            <ol class="relative border-l border-gray-200 dark:border-gray-700 shadow-lg border-yellow-900 border-2 p-4 pt-12 pb-12 rounded-xl">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Roasted on <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"> {bdet.r_date}</span></h3>                   
           

                </li>
    

                <li class="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Roast Profile :  {bdet.r_flavourp} </h3>
           
                </li>
                <li class="ml-6 mb-10">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Roasting Degassing Time : {bdet.r_degasstime} </h3>
                </li>

                <div class='mt-12 p-4 '>
                <div  class="grid grid-cols-3 gap-4">
                    {
                    bdet.r_imgs.map((i) => (
                        <div key={i}> 
                        <img src={`https://res.cloudinary.com/dypp5dcp7/image/upload/${i}`}></img>
                         </div>
                    ))
                    }

                </div>
                </div>

            </ol>    

            <div class='text-3xl font-bold m-6 p-2 text-yellow-900'> Packaging</div>   
            <ol class="relative border-l border-gray-200 dark:border-gray-700 shadow-lg border-yellow-900 border-2 p-4 pt-12 pb-12 rounded-xl">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute  flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-yellow-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Packaged on <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">{bdet.m_date}</span></h3>                   
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Details about packaging , protocols ,Arabica is a higher quality and higher value coffee normally grown in cooler, elevated areas of the tropics and sub-tropics at 1000 m or more above sea level. Arabica is used in the roast and ground coffee market
                     and is added to blends of Robusta to improve the quality of instant coffee. 
                    Brazil and Columbia are the major producing countries.</p>

                </li>
        </ol>       

            </div>
         
            }
            
            </div>
        
     );
}
 
export default Review;