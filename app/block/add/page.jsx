'use client'

import { useEffect, useState  } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";
import Upload from "components/Upload.jsx"
import Navbar from "components/Navbar";


const BAdd = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    // const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068"; TESTNET
    const contractAddress = "0xa697b155951e42401D3277f5b59540bF2104AEB0"; 
    const contractAbi = abi.abi;

    const [upimgs2 , setupimgs2] =useState([]);
    const [upc2 , setupc] = useState();
    const [isl , setl] = useState(false);

    const [count, setCount] = useState({});

    const [au , setau] = useState(false);
    useEffect(() => {
      const isAuth = sessionStorage.getItem("user");
      if(!isAuth){
        window.location.replace("/");
      }
      else {
        setau(true);
      }
    }, []);

    

    const [bdet, setdet] = useState(
        {
            upc: "",
            address: "",
            s_variety:"",
            temp:"",
            region:"" ,
            elevation : "",
            soil:0,
            date : "",
            flowering:""
        }
            );


            

    const checkIfWalletIsConnected = async (e)=> {
      e.preventDefault();
      setl(true);
        try {
          if(window.ethereum) {
            const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            const account = accounts[0];
            setIsWalletConnected(true);
            setCustomerAddress(account);

            

            console.log("Account Connected "+account);
            console.log(bdet , upimgs2);

            const provider = new ethers.BrowserProvider(window.ethereum);
            const coffee = new ethers.Contract(contractAddress, contractAbi, provider);
          
          //  coffee.addbatch.estimateGas(ethers.encodeBytes32String(bdet.upc) , account ,  ethers.encodeBytes32String(bdet.s_variety) ,  ethers.encodeBytes32String(bdet.temp) ,
          //  ethers.encodeBytes32String(bdet.region) , ethers.encodeBytes32String(bdet.elevation) ,  bdet.soil , upimgs2 ,
          //  ethers.encodeBytes32String(bdet.date) , ethers.encodeBytes32String(bdet.flowering)).then((data) => console.log(data));
          



          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        contract.addbatch(ethers.encodeBytes32String(bdet.upc) , account ,  ethers.encodeBytes32String(bdet.s_variety) ,  ethers.encodeBytes32String(bdet.temp) ,
          ethers.encodeBytes32String(bdet.region) , ethers.encodeBytes32String(bdet.elevation) ,  bdet.soil , upimgs2 ,
          ethers.encodeBytes32String(bdet.date) , ethers.encodeBytes32String(bdet.flowering)).then( async (data)=> {
           const res=  await fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/block', {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({sku : upc2+1 , upc : bdet.upc , harvesting : data.hash   }),
              });
              setl(false);
              window.alert("SuccessFull");
              window.location.replace("/block/home"); 
        });
        

       
       // const event = rc.events.find(event => event.event === "Planted");
       

           




          }
          else {
          //  window.alert("MetaMask Login Failed");
          setl(false);
          window.alert("Error , Retry");
        //  console.log(err);
          }
        } 
        catch (err) {
          setl(false);
          window.alert("Error , Retry");
          console.log(err);
        }
      }
      const handleChange = (e) => {
        setdet(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setCount(prev => ({...prev , [e.target.name] : e.target.value.length}));
    }

    const dashcall = async ()=>{
        // e.preventDefault();
         try {
           if (window.ethereum) {
             const provider = new ethers.BrowserProvider(window.ethereum);
           //  const signer = provider.getSigner();
             const coffee = new ethers.Contract(contractAddress, contractAbi, provider);
             const sts = await coffee.getItems();
            // console.log(ethers.toNumber(sts));
             setupc(ethers.toNumber(sts));
             //console.log(result);
             
           }
         } 
         catch(e) {
           console.log("Error in DashCall"+e.toString());
         }
 
       }


    useEffect(()=>{
        dashcall();
    });

    return ( 
        <div>
          <Navbar/>
          
            <form className="formren" class='mt-8 p-6 text-lg '>
            <div class="grid gap-6 mb-6 grid-cols-1">
               
               <div className='flex  mb-2 mt-24 text-2xl font-bold text-yellow-900'> 
               <svg onClick={()=> window.location.replace("/block/home")} class="mr-6 w-6 h-8 text-gray-500 hover:text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
   </svg> 
               Add a new Batch</div>
                <div >
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="upc">Unique Product Code (UPC) :</label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="s_variety">Fertilizers and Soil Info :
                </label>
                {/* <input class='' type="text" name="s_variety" id="s_variety" onChange={handleChange} placeholder=" Variety"></input> */}
                <div>
               

      <textarea
        type="text"
        rows={5}
        name="s_variety" id="s_variety"
        className="block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        onChange={handleChange} 
      />
       <span className="h-fit pt-4 text-sm font-medium text-gray-500 "> Character count : {count["s_variety"]}</span>
    </div>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="temp">Temperature </label>
                <div>
                

      <textarea
        type="text"
        rows={5}
        name="temp" id="temp"
        className="block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        onChange={handleChange} 
      />
             <span className="h-fit pt-4 text-sm font-medium text-gray-500 "> Character count : {count["temp"]}</span>

    </div>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="region">Region / Location </label>
                <div>
               

      <textarea
        type="text"
        rows={5}
        name="region" id="region"
        className="block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        onChange={handleChange} 
      />
             <span className="h-fit pt-4 text-sm font-medium text-gray-500 "> Character count : {count["region"]}</span>
    </div>                </div>
                
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="planter">Elevation  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="text" name="elevation" id="elevation" onChange={handleChange} placeholder="Elevation"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="planter">Harvesting Date  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="date" id="date" onChange={handleChange} placeholder=" Harvesting Date"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="planter">Flowering Date  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="flowering" id="flowering" onChange={handleChange} placeholder=" Flowering Date"></input>
                </div>

                
                <div class='mt-12 flex justify-center '>
                <Upload upimgs2={upimgs2} setupimgs2={setupimgs2}/>
                </div>
                <br />

                <br />
                <div class='flex justify-center '>
                { isl &&
            <div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div> }
                { !isl &&
                <button className='text-white bg-yellow-900 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Batch </button>
              }                </div>
              </div>
            </form>
            </div>
        
     );
}
 
export default BAdd;