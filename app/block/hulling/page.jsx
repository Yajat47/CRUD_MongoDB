'use client'
import { useState , useEffect } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";




const BHulling = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    const [sku , setsku] = useState(0);
    const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068";
    const contractAbi = abi.abi;
    
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
             h_resttime:"",
            h_startdate:"",
            h_gradesize:"",
            h_baggingdetails:"",
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
            console.log(bdet);

            

            const provider = new ethers.BrowserProvider(window.ethereum);
            const coffee = new ethers.Contract(contractAddress, contractAbi, provider);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
            contract.hulling( parseInt(sku), ethers.encodeBytes32String(bdet.h_resttime) ,  ethers.encodeBytes32String(bdet.h_startdate) ,
            ethers.encodeBytes32String(bdet.h_gradesize) , ethers.encodeBytes32String(bdet.h_baggingdetails)).then(async(data)=> {
              const res=  await fetch('http://localhost:3000/api/hulling', {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({sku : sku , hulling : data.hash   }),
                  });
                  console.log("Sucessfull!!");
                  window.alert("Batch Added Sucessfully !");
            })
         

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
            <div class='text-xl font-bold m-6 p-2 text-purple-700'>Hulling</div>
            <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Hulling Details</div>
            <form className="formren" class='mt-8 p-6 text-lg '>
                <div class='flex justify-center '>
                <label class='text-lg font-medium ' for="upc">SKU (Index) : </label>
                <input disabled={true} class='ml-6 border-2 border-purple-700 rounded-lg' value={sku} type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="h_resttime">Hulling Rest Time
                </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="h_resttime" id="h_resttime" onChange={handleChange} placeholder=" Rest Time (in Days)">
                </input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="h_startdate">Hulling Start Date </label>
                <input onChange={handleChange} id="h_startdate" name="h_startdate" type="date" class="block p-4 m-6 w-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" ></input>

                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="h_gradesize">Grade Size </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="h_gradesize" id="h_gradesize" onChange={handleChange} placeholder="Hulling Grade Size"></input>
                </div>
    
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="h_baggingdetails">Bagging Details  </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="h_baggingdetails" id="h_baggingdetails" onChange={handleChange} placeholder="Baggiing Details (60 Characters Limit)"></input>
                </div>
            

                <br />
                <div class='flex justify-center '>
                <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Hulling </button>
                </div>
            </form>
            </div>
        
     );
}
 
export default BHulling;