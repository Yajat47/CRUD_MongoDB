'use client'

import { useState , useEffect } from "react";
import Landing from "components/Landing.jsx"
import Harvest from "components/Harvest.jsx";
import Process from "components/Process.jsx";
import Hulling from "components/Hulling.jsx";
import Roasting from "components/Roasting.jsx";
import Packaging from "components/Packaging.jsx";





const Batch = () => {
    const [load , setload] = useState(false);
    const [sku , setsku] = useState(0);
    const [stage , setstage] = useState(0);
   const [step , setstep] = useState(0);
   const [isb , setb] = useState(false);

    // useEffect(() => {
    //   const isAuth = sessionStorage.getItem("user");
    //   if(!isAuth){
    //     window.location.replace("/");
    //   }
    //   else {
    //     setau(true);
    //   }
    // }, []);

    useEffect(()=>{
      switch (bdet["itemState"]) {
        case "Harvested":
          
            setstep(1);
          break;
        case "Processing":
           
            setstep(2);
          break;
        case "Hulling":
           
           setstep(3);
          break;
        case "Roasting":
           
            setstep(4);
          break;
        case "Packaging":
           
            setstep(5);
          break;              
      
        default:
          break;
      }
    },[load]);

    const [bdet, setdet] = useState(
        {
    //   sku:0,                    // Stock Keeping Unit (SKU)
    //   upc:"",                  
    //    itemState:"", 
    //  s_variety :"",
    //  s_temp :"",
    //  s_region :"",
    //  s_elevation:"",
    //  s_flowering:"",
    //  s_soiltype :"",
    //  s_imgs :[],
    //  s_date:"",

    //  p_ptype:"",
    //  p_params:[],
    //  p_pulpdate:"",
    //  p_dtabledate:"",
    //  p_dcompdate:"",
    //  p_dparams:"",
    //  p_bdate:"",
    //  p_spackdate:"",
    //  p_imgs:[],

    //  h_resttime:"",
    //  h_startdate:"",
    //  h_gradesize:"",
    //  h_baggingdetails:"",

    //  r_date:"",
    //  r_degasstime:"",
    //  r_flavourp:"",
    //  r_imgs:[],
    //  m_date:"",
    //  brewing:""       
        }
            );

    const checkIfWalletIsConnected = async ()=> {
     
        try {

            const params = new URLSearchParams(window.location.search); 
            setsku((params.get('id')));
            let p = params.get('id');
          
        fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/review', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ p   }),
      }).then(res => res.json()).then((data)=> setdet(data)).then(()=> setload(true))


         //   setload(true)
           
      //    const items2 =  bdet["s_imgs"].map((e,index)=> {  
      //     let s = "https://res.cloudinary.com/dxbzcfalw/image/upload/"+e.toString();
      //     console.log(s);
      //   <img src={s} onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={index}  />
      // });

   //   setitems(items2);
           




          
          
        } 
        catch (err) {
          console.log(err);
        }
      }

    useEffect(()=>{
      console.log(bdet);
    },[bdet]);  
    useEffect(()=>{

        checkIfWalletIsConnected();
    },[]);
    return ( 
        <div>
          { load && 
          <div>
            {
              stage == 0 && <Landing bdet= {bdet} setstage = {setstage} />
            }

          {
            stage == 1 &&  <Harvest bdet= {bdet} setstage = {setstage} step={step}  />
          }
          {
            stage ==2 && step >= 2 && <Process bdet = {bdet} setstage = {setstage} step={step} />
          }
          {
            stage == 3 && step >=3 && <Hulling bdet = {bdet} setstage = {setstage} step={step} />
          }
          {
            stage == 4 && step >=4 && <Roasting bdet = {bdet} setstage = {setstage} step={step} />
          }
          {
            stage == 5 && step ==5 && <Packaging bdet = {bdet} setstage = {setstage} step={step} />
          }
        
          </div>
          

          }
            {
          load == false &&
          <div aria-label="Loading..." role="status" class="top-[400px] absolute flex items-center ">
    <svg class="h-20 w-20 animate-spin stroke-yellow-900 ml-8" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
        </line>
    </svg>
    <div class=" text-xl font-medium text-yellow-900">Tracing your beans...</div>
</div>
        }


        </div>
     );
}
 
export default Batch;