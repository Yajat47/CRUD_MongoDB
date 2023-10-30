'use client'
import Home from "components/Home";
import Login from "components/Login";
import { useState , useEffect } from "react";



export default function Landing() {
  const [auth , setauth] = useState(false);
  useEffect(() => {
    const isAuth = sessionStorage.getItem("user");
    if(isAuth){
      setauth(true);
     // redirect("/")
    }
    else{
      setauth(false);
    }
  }, []);

  return (
    auth ? <Home/> : <Login setauth={setauth}/>
  )
}
