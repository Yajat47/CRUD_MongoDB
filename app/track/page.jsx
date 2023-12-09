'use client'
import { useState , useEffect } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";
import Landing from "components/Landing.jsx"
import Harvest from "components/Harvest.jsx";
import Process from "components/Process.jsx";
import Hulling from "components/Hulling.jsx";
import Roasting from "components/Roasting.jsx";
import Packaging from "components/Packaging.jsx";



const Track = () => {
    const contractAddress = "0xa697b155951e42401D3277f5b59540bF2104AEB0";
    const contractAbi = abi.abi;
    const [load , setload] = useState(false);
    const [stage , setstage] = useState(0);
    const [step , setstep] = useState(0);
    const [burls , setburls] = useState({});
    const [burls2 , setburls2] = useState("");
    const [burls3 , setburls3] = useState("");
    const [burls4 , setburls4] = useState("");
    const [burls5 , setburls5] = useState("");
    const [isb , setb] = useState(true);

    const [bdet, setdet] = useState(
        {
      sku:0,                    // Stock Keeping Unit (SKU)
      upc:"",                  
     pAdd:"", 
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
        }
            );

            useEffect(()=>{
                switch (bdet["itemState"]) {
                  case "Harvested":
                  //  setburls()                   
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

    useEffect(()=>{
        checkIfWalletIsConnected();
    },[]);

    useEffect(()=>{
        console.log(burls);
       
    },[bdet]);

    const checkIfWalletIsConnected = async ()=> {
     
        try {
          
           
            const params = new URLSearchParams(window.location.search); 
           // setsku(parseInt(params.get('id')));
           
           //const provider = new ethers.BrowserProvider(window.ethereum);
           const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com");
            const coffee = new ethers.Contract(contractAddress, contractAbi , provider);

            const sts = await coffee.getinfo2(parseInt(params.get('id')));
          
         //  console.log(sts.toString());
           let result = Object.keys(sts).map((key) => [sts[key].toString()]);
          //console.log(result);
           let state='';

           switch (result[3][0]) {
            case '0':
                state='Harvested';
                setdet(
                    {
                        sku:result[0][0],                    // Stock Keeping Unit (SKU)
                        upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
                       pAdd:result[2][0], 
                         itemState:state, 
                        s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
                       s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
                        s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
                       s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
                       s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
                       s_soiltype :result[9][0],
                       s_imgs :result[10].toString().split(","),
                       s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
                          }
                );
                break;
            case '1':
                    state='Processing';
                    setdet(
                        {
                            sku:result[0][0],                    // Stock Keeping Unit (SKU)
                            upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
                           pAdd:result[2][0], 
                             itemState:state, 
                            s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
                           s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
                            s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
                           s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
                           s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
                           s_soiltype :result[9][0],
                           s_imgs :result[10].toString().split(","),
                           s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
                           p_ptype:ethers.decodeBytes32String(result[12][0]).toString() ,
                           p_params:result[13].toString().split(","),
                           p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString() ,
                           p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString() ,
                           p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString() ,
                           p_dparams:ethers.decodeBytes32String(result[17][0]).toString() ,
                           p_bdate:ethers.decodeBytes32String(result[18][0]).toString() ,
                           p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
                           p_imgs:result[20].toString().split(","),
                              }
                    );
                    break;    
            case '2':
                        state='Hulling';
                        setdet(
                            {
                                sku:result[0][0],                    // Stock Keeping Unit (SKU)
                                upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
                               pAdd:result[2][0], 
                                 itemState:state, 
                                s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
                               s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
                                s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
                               s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
                               s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
                               s_soiltype :result[9][0],
                               s_imgs :result[10].toString().split(","),
                               s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
                               p_ptype:ethers.decodeBytes32String(result[12][0]).toString() ,
                               p_params:result[13].toString().split(","),
                               p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString() ,
                               p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString() ,
                               p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString() ,
                               p_dparams:ethers.decodeBytes32String(result[17][0]).toString() ,
                               p_bdate:ethers.decodeBytes32String(result[18][0]).toString() ,
                               p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
                               p_imgs:result[20].toString().split(","),
                               h_resttime:ethers.decodeBytes32String(result[21][0]).toString() ,
                              h_startdate:ethers.decodeBytes32String(result[22][0]).toString(),
                               h_gradesize:ethers.decodeBytes32String(result[23][0]).toString() ,
                               h_baggingdetails:ethers.decodeBytes32String(result[24][0]).toString() ,
                              
                                  }
                        );
                        break;
            case '3':
                            state='Roasting';
                            setdet(
                                {
                                    sku:result[0][0],                    // Stock Keeping Unit (SKU)
                                    upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
                                   pAdd:result[2][0], 
                                     itemState:state, 
                                    s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
                                   s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
                                    s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
                                   s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
                                   s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
                                   s_soiltype :result[9][0],
                                   s_imgs :result[10].toString().split(","),
                                   s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
                                   p_ptype:ethers.decodeBytes32String(result[12][0]).toString() ,
                                   p_params:result[13].toString().split(","),
                                   p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString() ,
                                   p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString() ,
                                   p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString() ,
                                   p_dparams:ethers.decodeBytes32String(result[17][0]).toString() ,
                                   p_bdate:ethers.decodeBytes32String(result[18][0]).toString() ,
                                   p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
                                   p_imgs:result[20].toString().split(","),
                                   h_resttime:ethers.decodeBytes32String(result[21][0]).toString() ,
                                   h_startdate:ethers.decodeBytes32String(result[22][0]).toString(),
                                   h_gradesize:ethers.decodeBytes32String(result[23][0]).toString() ,
                                   h_baggingdetails:ethers.decodeBytes32String(result[24][0]).toString() ,
                                   r_date:ethers.decodeBytes32String(result[25][0]) ,
                                   r_degasstime:ethers.decodeBytes32String(result[26][0]) ,
                                   r_flavourp:ethers.decodeBytes32String(result[27][0]) ,
                                   r_imgs:result[28].toString().split(",") ,
                                      }
                            );
                            break;
            case '4':
                        state='Packaging';
                        setdet(
                            {
                                sku:result[0][0],                    // Stock Keeping Unit (SKU)
                                upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
                               pAdd:result[2][0], 
                                 itemState:state, 
                                s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
                               s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
                                s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
                               s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
                               s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
                               s_soiltype :result[9][0],
                               s_imgs :result[10].toString().split(","),
                               s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
                               p_ptype:ethers.decodeBytes32String(result[12][0]).toString() ,
                               p_params:result[13].toString().split(","),
                               p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString() ,
                               p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString() ,
                               p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString() ,
                               p_dparams:ethers.decodeBytes32String(result[17][0]).toString() ,
                               p_bdate:ethers.decodeBytes32String(result[18][0]).toString() ,
                               p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
                               p_imgs:result[20].toString().split(","),
                               h_resttime:ethers.decodeBytes32String(result[21][0]).toString() ,
                              h_startdate:ethers.decodeBytes32String(result[22][0]).toString(),
                               h_gradesize:ethers.decodeBytes32String(result[23][0]).toString() ,
                               h_baggingdetails:ethers.decodeBytes32String(result[24][0]).toString() ,
                               r_date:ethers.decodeBytes32String(result[25][0]) ,
                               r_degasstime:ethers.decodeBytes32String(result[26][0]) ,
                               r_flavourp:ethers.decodeBytes32String(result[27][0]) ,
                               r_imgs:result[28].toString().split(",") ,
                               m_date:ethers.decodeBytes32String(result[29][0]),
                                  }
                        );
                        break;
            default:
                break;
           }


           fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/block', {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ sku : params.get('id')   }),
          }).then(res => res.json()).then((data)=> setburls(data.res)).then(()=>setload(true))
            
        //     setdet(
        //         {
        //             sku:result[0][0],                    // Stock Keeping Unit (SKU)
        //             upc:ethers.decodeBytes32String(result[1][0]).toString(),                  
        //            pAdd:result[2][0], 
        //              itemState:state, 
        //             s_variety :ethers.decodeBytes32String(result[4][0]).toString() ,
        //            s_temp :ethers.decodeBytes32String(result[5][0]).toString() ,
        //             s_region :ethers.decodeBytes32String(result[6][0]).toString() ,
        //            s_elevation:ethers.decodeBytes32String(result[7][0]).toString() ,
        //            s_flowering:ethers.decodeBytes32String(result[8][0]).toString() ,
        //            s_soiltype :result[9][0],
        //            s_imgs :result[10].toString().split(","),
        //            s_date:ethers.decodeBytes32String(result[11][0]).toString() ,
        //            p_ptype:ethers.decodeBytes32String(result[12][0]).toString() ,
        //            p_params:result[13].toString().split(","),
        //            p_pulpdate:ethers.decodeBytes32String(result[14][0]).toString() ,
        //            p_dtabledate:ethers.decodeBytes32String(result[15][0]).toString() ,
        //            p_dcompdate:ethers.decodeBytes32String(result[16][0]).toString() ,
        //            p_dparams:ethers.decodeBytes32String(result[17][0]).toString() ,
        //            p_bdate:ethers.decodeBytes32String(result[18][0]).toString() ,
        //            p_spackdate:ethers.decodeBytes32String(result[19][0]).toString(),
        //            p_imgs:result[20].toString().split(","),
        //            h_resttime:ethers.decodeBytes32String(result[21][0]).toString() ,
        //    // :TODO        h_startdate:ethers.decodeBytes32String(result[22][0]).toString(),
        //            h_gradesize:ethers.decodeBytes32String(result[23][0]).toString() ,
        //            h_baggingdetails:ethers.decodeBytes32String(result[24][0]).toString() ,
        //            r_date:ethers.decodeBytes32String(result[25][0]) ,
        //            r_degasstime:ethers.decodeBytes32String(result[26][0]) ,
        //            r_flavourp:ethers.decodeBytes32String(result[27][0]) ,
        //            r_imgs:result[28].toString().split(",") ,
        //            m_date:ethers.decodeBytes32String(result[29][0]),
        //               }
        //     );

          // setbatch(sts);
            
            console.log(bdet);

           




          
          
        } 
        catch (err) {
          console.log(err);
        }
      }
    return ( 
        <div>
        { load && 
        <div>
          {
            stage == 0 && <Landing bdet= {bdet} setstage = {setstage} burls={burls} isb={isb}  />
          }

        {
          stage == 1 &&  <Harvest bdet= {bdet} setstage = {setstage} step={step} burls={burls} isb={isb}    />
        }
        {
          stage ==2 && step >= 2 && <Process bdet = {bdet} setstage = {setstage} step={step} burls={burls}  isb={isb}  />
        }
        {
          stage == 3 && step >=3 && <Hulling bdet = {bdet} setstage = {setstage} step={step} burls={burls} isb={isb}   />
        }
        {
          stage == 4 && step >=4 && <Roasting bdet = {bdet} setstage = {setstage} step={step} burls={burls} isb={isb}   />
        }
        {
          stage == 5 && step ==5 && <Packaging bdet = {bdet} setstage = {setstage} step={step} burls={burls} isb={isb}   />
        }
      
        </div>
        

        }


      </div>
     );
}
 
export default Track;