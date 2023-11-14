'use client'
import { useState , useEffect } from "react";


const Hulling = () => {

   
    const [sku , setsku] = useState(0);
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
             h_resttime:"",
            h_startdate:"",
            h_gradesize:"",
            h_baggingdetails:"",
        }
            );

    const checkIfWalletIsConnected = async (e)=> {
      e.preventDefault();
      setl(true);
        try {
            const res = await fetch(window.location.protocol + '//' + window.location.hostname +":"  + window.location.port+'api/hulling', {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({sku , bdet     }),
              });
        
              if (!res.ok) {
                throw new Error("Failed to Add a batch");
              }
        
            //   router.refresh();
            //   router.push("/");
            setl(false);
            window.alert("SuccessFull");
            window.location.replace("/");
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
        setsku((params.get('id')));
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
            { isl &&
            <div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div> }
                { !isl &&
                <button className='bg-purple-700 m-6 p-2  w-36 text-lg font-semibold text-white rounded-lg' onClick={(e)=>checkIfWalletIsConnected(e)} >Submit Hulling </button>
              }            </div>
        </form>
        </div>
     );
}
 
export default Hulling;
