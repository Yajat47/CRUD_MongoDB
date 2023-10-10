'use client'

import { useEffect , useState } from "react";
import Upload from "@/components/Upload";
const Roasting = () => {

 
    const [sku , setsku] = useState(0);
   
    
    const [upimgs2 , setupimgs2] =useState([]);



    const [bdet, setdet] = useState(
        {
             r_date:"",
            r_degasstime:"",
            r_flavourp:"",
           
        }
            );

    const checkIfWalletIsConnected = async (e)=> {
      e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/roast', {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({sku , bdet , upimgs2    }),
              });
        
              if (!res.ok) {
                throw new Error("Failed to Add a batch");
              }
        
            //   router.refresh();
            //   router.push("/");
            window.alert("SuccessFull");
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
        setsku((params.get('id')));
    },[]);

    return ( 
        <div>
        <div class='text-xl font-bold m-6 p-2 text-purple-700'>Roasting</div>
        <div class='flex justify-center text-2xl font-semibold text-purple-700 m-4 p-2'>Roasting Batch Details</div>
        <form className="formren" class='mt-8 p-6 text-lg '>
            <div class='flex justify-center '>
            <label class='text-lg font-medium ' for="upc">SKU (Index) : </label>
            <input disabled={true} class='ml-6 border-2 border-purple-700 rounded-lg' value={sku} type="text" name="upc" id="upc" onChange={handleChange}  placeholder="UPC"></input>
            </div>
            <div class='mt-8 flex justify-center '>
            <label class='text-lg font-medium ' for="r_date">Roasting Date
            </label>
            <input class='ml-6 border-2 border-purple-700 rounded-lg' type="date" name="r_date" id="r_date" onChange={handleChange} placeholder="">
            </input>
            </div>
            <div class='mt-8 flex justify-center '>
            <label class='text-lg font-medium ' for="r_degasstime">Degassing Time </label>
            <input onChange={handleChange} id="r_degasstime" name="r_degasstime" type="text" class="block p-4 m-6 w-fit text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" ></input>

            </div>
            <div class='mt-8 flex justify-center '>
            <label class='text-lg font-medium ' for="r_flavourp">Flavour Profile </label>
            <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="r_flavourp" id="r_flavourp" onChange={handleChange} placeholder="Roasting Flavour Profile Details"></input>
            </div>

            <div class='mt-12 flex justify-center '>
            <Upload upimgs2={upimgs2} setupimgs2={setupimgs2}/>
            </div>
            <br />

            <br />
            <div class='flex justify-center '>
            <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Roasting </button>
            </div>
        </form>
        </div>
     );
}
 
export default Roasting;