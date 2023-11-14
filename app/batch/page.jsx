'use client'

import { useState , useEffect } from "react";
import Landing from "components/Landing.jsx"
import Harvest from "components/Harvest.jsx";


const Batch = () => {
    const [load , setload] = useState(false);
    const [sku , setsku] = useState(0);
    const [stage , setstage] = useState(0);
    const [au , setau] = useState(false);
    // useEffect(() => {
    //   const isAuth = sessionStorage.getItem("user");
    //   if(!isAuth){
    //     window.location.replace("/");
    //   }
    //   else {
    //     setau(true);
    //   }
    // }, []);

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
            stage == 1 && <Harvest bdet= {bdet} setstage = {setstage} />
          }
        
          </div>
          

          }


        </div>
     );
}
 
export default Batch;