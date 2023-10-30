'use client'
import { useState , useEffect  } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";




const BPackaging = () => {
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
             p_date:"",
         
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
             contract.packaging( parseInt(sku), ethers.encodeBytes32String(bdet.p_date)).then(async(data)=> {
               const res= await fetch('http://localhost:3000/api/package', {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({sku : sku , packaging : data.hash   }),
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
            <div class='text-xl font-bold m-6 p-2 text-purple-700'>Packaging</div>
            <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Packaging Details</div>
            <form className="formren" class='mt-8 p-6 text-lg '>
                <div class='flex justify-center '>
                <label class='text-lg font-medium ' for="upc">SKU (Index) : </label>
                <input disabled={true} class='ml-6 border-2 border-purple-700 rounded-lg' value={sku} type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div class='mt-8 flex justify-center '>
                <label class='text-lg font-medium ' for="p_date">Packaging Date
                </label>
                <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="p_date" id="p_date" onChange={handleChange} >
                </input>
                </div>
                

                
                <div class='flex justify-center '>
                <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Packaging </button>
                </div>
            </form>
            </div>
        
     );
}
 
export default BPackaging;