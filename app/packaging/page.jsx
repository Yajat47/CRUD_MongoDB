'use client'

import { useState , useEffect } from "react";

const Packaging = () => {
    
    const [sku , setsku] = useState(0);
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
             brewing:""
         
        }
            );

    const checkIfWalletIsConnected = async (e)=> {
      e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/package', {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({sku , bdet     }),
              });
        
              if (!res.ok) {
                throw new Error("Failed ");
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
            <div class='mt-8 flex justify-center '>
            <label class='text-lg font-medium ' for="brewing">Brewing Techniques
            </label>
            <input class='ml-6 border-2 border-purple-700 rounded-lg' type="text" name="brewing" id="brewing" onChange={handleChange} >
            </input>
            </div>
            

            
            <div class='flex justify-center '>
            <button class='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Packaging </button>
            </div>
        </form>
        </div>
    );
}
 
export default Packaging;