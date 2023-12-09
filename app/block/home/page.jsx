'use client'

import { useState , useEffect } from "react";
import {  ethers } from "ethers";
import abi from "contracts/Coffee2.json";
import Navbar from "components/Navbar";




const Home = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
   // const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068";
  // const contractAddress = "0x2F9D8c62D2f010db89E2514EA094dfC327dac85E"; 
  const contractAddress = "0xa697b155951e42401D3277f5b59540bF2104AEB0"; 
   const contractAbi = abi.abi;
    const [batches , setbatch] = useState([]);
    const [load , setload] = useState(false);
    //let navigate = useNavigate();

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

    const checkIfWalletIsConnected = async ()=> {
        try {
          if(window.ethereum) {
            const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            const account = accounts[0];
            setIsWalletConnected(true);
            setCustomerAddress(account);
            console.log("Account Connected ");
            dashcall();
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

      const dashcall = async ()=>{
       // e.preventDefault();
        try {
          if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
          //  const signer = provider.getSigner();
            const coffee = new ethers.Contract(contractAddress, contractAbi, provider);
            const sts = await coffee.getstates();
          //  console.log(sts);
            let result = Object.keys(sts).map((key) => [key, sts[key]]);
            setbatch(result.reverse());
            setload(true);
           // console.log(result);
            
          }
        } 
        catch(e) {
          console.log("Error in DashCall"+e.toString());
        }

      }

      useEffect(()=>{
        checkIfWalletIsConnected();
      },[]);
    
    return ( 
        <div className="ml-24">
          <Navbar/>
            <div class='text-4xl font-bold text-yellow-800 m-6 mt-24   '>Home Blockchain
            <span><a href="/block/add" class="ml-24  text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Add Batch
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a></span>
             </div>

            {/* <div><button class='m-4 p-6 flex justify-center bg-purple-300' onClick={(e)=> dashcall()} > DashBoard</button></div> */}
            <div>
            <div className="flex flex-row items-center">
        {/* <a href="/block/add" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Add Batch</a>
        <a href="/" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Database Portal</a>
        <a href="/logout" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Logout</a> */}

        </div>

              {load == true && 
              <div>
                {
                
              batches.map((b) => (

<div class="max-w-sm   p-6 bg-white border border-gray-200 rounded-lg shadow m-6 p-2 shadow-xl border-2 border-yellow-900 " key={b[0]}>

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Batch  <span class='text-2xl font-light text-yellow-900'>{ parseInt(b[0])+1}</span></h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">State : <span class='italic font-semibold'>{b[1]}</span></p>



    { b[1] == "Harvested" && 
    <a href={`/block/process?id=${(parseInt(b[0])+1).toString()}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Processing
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }

{ b[1] == "Processing" && 
    <a href={`/block/hulling?id=${(parseInt(b[0])+1).toString()}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Hulling
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }

  { b[1] == "Hulling" && 
    <a href={`/block/roasting?id=${(parseInt(b[0])+1).toString()}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Roasting
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }
   { b[1] == "Roasting" && 
    <a href={`/block/packaging?id=${(parseInt(b[0])+1).toString()}`} class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Packaging
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }   
    { b[1] == "Packaging" && 
    <a href={`/block/review?id=${(parseInt(b[0])+1).toString()}`}class=" text-black bg-orange-300 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">Review
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>
              }   


      <a href={`/block/review?id=${(parseInt(b[0])+1).toString()}`}class="ml-6 text-gray-900 bg-white hover:bg-orange-300 focus:ring-4 focus:outline-none border-2 border-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center rounded-xl ">QR 
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg></a>                          



</div>


              ))
               } </div>
                }
            </div>

        </div>
     );
}
 
export default Home;