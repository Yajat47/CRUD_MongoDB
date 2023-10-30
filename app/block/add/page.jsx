'use client'

import { useEffect, useState  } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";
import Upload from "components/Upload.jsx"

const BAdd = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068";
    const contractAbi = abi.abi;

    const [upimgs2 , setupimgs2] =useState([]);
    const [upc2 , setupc] = useState();


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
           const res=  await fetch('http://localhost:3000/api/block', {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({sku : upc2+1 , upc : bdet.upc , harvesting : data.hash   }),
              });
              console.log("Sucessfull!!");
              window.alert("Batch Added Sucessfully !");  
        });
        

       
       // const event = rc.events.find(event => event.event === "Planted");
       

           




          }
          else {
          //  window.alert("MetaMask Login Failed");
            console.log("Metamask FAil");
          }
        } 
        catch (err) {
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
            <div class='text-xl font-bold m-6 p-2 text-purple-700'> Add a new Batch</div>
            <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Batch Details</div>
            <form className="formren" class='mt-8 p-6 text-lg '>
                <div class='flex justify-center '>
                <label class='text-lg font-medium ' for="upc">Unique Product Code (UPC) :</label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="s_variety">Fertilizers and Soil Info :
                </label>
                {/* <input class='' type="text" name="s_variety" id="s_variety" onChange={handleChange} placeholder=" Variety"></input> */}
                <div>
                <span className="h-fit">{count["s_variety"]}</span>

      <textarea
        type="text"
        rows={5}
        name="s_variety" id="s_variety"
        className="ml-6 border-2 border-purple-700 rounded-lg"
        onChange={handleChange} 
      />
    </div>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="temp">Temperature </label>
                <div>
                <span className="h-fit">{count["temp"]}</span>

      <textarea
        type="text"
        rows={5}
        name="temp" id="temp"
        className="ml-6 border-2 border-purple-700 rounded-lg"
        onChange={handleChange} 
      />
    </div>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="region">Region / Location </label>
                <div>
                <span className="h-fit">{count["region"]}</span>

      <textarea
        type="text"
        rows={5}
        name="region" id="region"
        className="ml-6 border-2 border-purple-700 rounded-lg"
        onChange={handleChange} 
      />
    </div>                </div>
                
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="planter">Elevation  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="elevation" id="elevation" onChange={handleChange} placeholder=" Region"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="planter">Harvesting Date  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="date" id="date" onChange={handleChange} placeholder=" Harvesting Date"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="planter">Flowering Date  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="flowering" id="flowering" onChange={handleChange} placeholder=" Flowering Date"></input>
                </div>

                
                <div class='mt-12 flex justify-center '>
                <Upload upimgs2={upimgs2} setupimgs2={setupimgs2}/>
                </div>
                <br />

                <br />
                <div class='flex justify-center '>
                <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Batch </button>
                </div>
            </form>
            </div>
        
     );
}
 
export default BAdd;