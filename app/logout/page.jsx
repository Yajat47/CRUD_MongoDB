'use client'
import { redirect } from "next/dist/server/api-utils";
import { useEffect } from "react";

const Logout = () => {
    useEffect(()=>{
        if(sessionStorage.getItem("user")){
            sessionStorage.removeItem("user");
            window.location.replace("/");
        }
        else{
            window.location.replace("/");
        }
    },[]);
    return ( 
        <div>Logging Out</div>
     );
}
 
export default Logout;