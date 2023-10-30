'use client'

import { useState , useEffect  } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";
import Upload from "components/Upload.jsx";



const Processing = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    const [sku , setsku] = useState(0);
    const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068";
    const contractAbi = abi.abi;
    
    const [upimgs2 , setupimgs2] =useState([]);

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
             p_ptype:"",
            p_params:"",
            p_pulpdate:"",
            p_dtabledate:"",
            p_dcompdate:"",
            p_dparams:"",
            p_bdate:"",
            p_spackdate:"",
            //p_imgs:""
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

            let par = bdet.p_params.split(",");
            console.log( par);

            const provider = new ethers.BrowserProvider(window.ethereum);
           // const coffee = new ethers.Contract(contractAddress, contractAbi, provider);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
            contract.processing( parseInt(sku), ethers.encodeBytes32String(bdet.p_ptype) ,  par ,  ethers.encodeBytes32String(bdet.p_pulpdate) ,
            ethers.encodeBytes32String(bdet.p_dtabledate) , ethers.encodeBytes32String(bdet.p_dcompdate) ,ethers.encodeBytes32String(bdet.p_dparams) , ethers.encodeBytes32String(bdet.p_bdate) ,
            ethers.encodeBytes32String(bdet.p_spackdate) , upimgs2).then(async(data)=> {
            const res=  await fetch('http://localhost:3000/api/process', {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({sku : sku , processing : data.hash   }),
                });
                console.log("Sucessfull!!");
                window.alert("Batch Added Sucessfully !");  
          });
            
          
         
            



            
              

           




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
    }


    useEffect(()=>{
        const params = new URLSearchParams(window.location.search); 
        setsku(parseInt(params.get('id')));
    },[]);

    return ( 
        <div>
            <div class='text-xl font-bold m-6 p-2 text-purple-700'>Processing</div>
            <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Batch Details</div>
            <form className="formren" class='mt-8 p-6 text-lg '>
                <div class='flex justify-center '>
                <label class='text-lg font-medium ' for="upc">SKU (Index) : </label>
                <input disabled={true} class='ml-6 border-2 border-purple-700 rounded-lg' value={sku} type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_ptype">Process Type
                </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="p_ptype" id="p_ptype" onChange={handleChange} placeholder=" Process Type">
                </input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_params">Process Parameters </label>
                <input onChange={handleChange} id="p_params" name="p_params" type="text" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Processing Parameters....."></input>

                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_pulpdate">Pulping Date </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_pulpdate" id="p_pulpdate" onChange={handleChange} placeholder=" Pulping Date"></input>
                </div>
    
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_dtabledate">Drying Table Start Date  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_dtabledate" id="p_dtabledate" onChange={handleChange} placeholder=" Date"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_dcompdate">Drying Table Complete Date </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_dcompdate" id="p_dcompdate" onChange={handleChange} placeholder=" Drying Complete Date"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_dparams">Drying Table Parameters  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="p_dparams" id="p_dparams" onChange={handleChange} placeholder=" Drying Table Parmameters Info"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_bdate">Bagging Date  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_bdate" id="p_bdate" onChange={handleChange} placeholder=" Bagging Date"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_spackdate">Sample Packing Date  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_spackdate" id="p_spackdate" onChange={handleChange} placeholder=" Sample Packaging Date"></input>
                </div>

                
                <div class='mt-12 flex justify-center '>
                <Upload upimgs2={upimgs2} setupimgs2={setupimgs2}/>
                </div>
                <br />

                <br />
                <div class='flex justify-center '>
                <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Process </button>
                </div>
            </form>
            </div>
        
     );
}
 
export default Processing;