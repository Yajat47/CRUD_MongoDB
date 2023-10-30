'use client'

import { useState , useEffect } from "react";
import {  ethers } from "ethers";
import abi from "contracts/Coffee2.json";




const Home = () => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [customerAddress, setCustomerAddress] = useState();
    const contractAddress = "0x23F0F7F35d7cdC702E153cbd9cB9C2B1e6AC2068";
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
            let result = Object.keys(sts).map((key) => [key, sts[key]]);
            setbatch(result.reverse());
            setload(true);
            //console.log(result);
            
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
        <div>
            <div class='text-4xl font-bold text-yellow-800 m-6 '>Home Blockchain </div>

            {/* <div><button class='m-4 p-6 flex justify-center bg-purple-300' onClick={(e)=> dashcall()} > DashBoard</button></div> */}
            <div>
            <div className="flex flex-row items-center">
        <a href="/block/add" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Add Batch</a>
        <a href="/" class="ml-8  rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 ">Database Portal</a>
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
    <a href={`/block/process?id=${(parseInt(b[0])+1).toString()}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Processing</a>
              }

{ b[1] == "Processing" && 
    <a href={`/block/hulling?id=${(parseInt(b[0])+1).toString()}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hulling</a>
              }

  { b[1] == "Hulling" && 
    <a href={`/block/roasting?id=${(parseInt(b[0])+1).toString()}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roasting</a>
              }
   { b[1] == "Roasting" && 
    <a href={`/block/packaging?id=${(parseInt(b[0])+1).toString()}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Packaging</a>
              }   
    { b[1] == "Packaging" && 
    <a href={`/block/review?id=${(parseInt(b[0])+1).toString()}`} class=" rounded-xl bg-orange-300 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Review</a>
              }                    




{/* <button id="dropdownDefaultButton" onClick={ navigate(`/process/${(parseInt(b[0])+1).toString()}`)} data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Options <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button> */}

{/* <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href={`/process/${(parseInt(b[0])+1).toString()}`} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Processing</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hulling</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Roasting</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Packaging</a>
      </li>
    </ul>
</div> */}

</div>


              ))
               } </div>
                }
            </div>

        </div>
     );
}
 
export default Home;