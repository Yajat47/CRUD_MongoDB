'use client'

import { useState , useEffect  } from "react";
import abi from "contracts/Coffee2.json";
import { ethers   } from "ethers";
import Upload from "components/Upload.jsx";
import Navbar from "components/Navbar.jsx";




const Processing = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    const [sku , setsku] = useState(0);
    const contractAddress = "0xa697b155951e42401D3277f5b59540bF2104AEB0";
    const contractAbi = abi.abi;
    
    const [upimgs2 , setupimgs2] =useState([]);
    const [isl , setl] = useState(false);
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
      setl(true);
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
            const res=  await fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'/api/process', {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({sku : sku , processing : data.hash   }),
                });
                setl(false);
            window.alert("SuccessFull");
            window.location.replace("/block/home");
          });
            
          
         
            



            
              

           




          }
          else {
          //  window.alert("MetaMask Login Failed");
            console.log("Metamask FAil");
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
    }


    useEffect(()=>{
        const params = new URLSearchParams(window.location.search); 
        setsku(parseInt(params.get('id')));
    },[]);

    return ( 
        <div>
          <Navbar/>
            <div class='flex  mb-2 mt-24 text-2xl font-bold text-yellow-900'><svg onClick={()=> window.location.replace("/block/home")} class="mr-6 w-6 h-8 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 5H1m0 0 4 4M1 5l4-4"></path>
</svg> Processing</div>
            <form className="formren" class='mt-8 p-6 text-lg '>
            <div class="grid gap-6 mb-6 grid-cols-1">
                <div >
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="upc">SKU (Index) : </label>
                <input disabled={true} class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' value={sku} type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_ptype">Process Type
                </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="text" name="p_ptype" id="p_ptype" onChange={handleChange} placeholder=" Process Type">
                </input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_params">Process Parameters </label>
                <input onChange={handleChange} id="p_params" name="p_params" type="text" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Processing Parameters....."></input>

                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_pulpdate">Pulping Date </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="p_pulpdate" id="p_pulpdate" onChange={handleChange} placeholder=" Pulping Date"></input>
                </div>
    
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_dtabledate">Drying Table Start Date  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="p_dtabledate" id="p_dtabledate" onChange={handleChange} placeholder=" Date"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_dcompdate">Drying Table Complete Date </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="p_dcompdate" id="p_dcompdate" onChange={handleChange} placeholder=" Drying Complete Date"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_dparams">Drying Table Parameters  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="text" name="p_dparams" id="p_dparams" onChange={handleChange} placeholder=" Drying Table Parmameters Info"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_bdate">Bagging Date  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="p_bdate" id="p_bdate" onChange={handleChange} placeholder=" Bagging Date"></input>
                </div>
                <div className="mt-8">
                <label class='block mb-2 text-sm font-medium text-gray-900 ' for="p_spackdate">Sample Packing Date  </label>
                <input class='block w-full p-4 text-gray-900 border text-sm border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500' type="date" name="p_spackdate" id="p_spackdate" onChange={handleChange} placeholder=" Sample Packaging Date"></input>
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
                <button className='text-white bg-yellow-900 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Process </button>
              }                </div></div>
            </form>
            </div>
        
     );
}
 
export default Processing;