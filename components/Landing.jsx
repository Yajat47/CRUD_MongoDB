import Image from 'next/image'
import tesicon from '../assets/bxs_coffee-bean.svg';
import bicon from '../assets/Brown-bxs_coffee-bean.svg';
import arricn from '../assets/heroicons_arrow-top-right-on-square-20-solid.svg'
import oicon from '../assets/WHITEbxs_coffee-bean (1).svg'
import skia from '../assets/image 35.svg';
import vect from '../assets/arrow.svg'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Landing = ({bdet , setstage , burls , isb}) => {

  const [disdate , setdate]= useState("");
  const [step , setstep] = useState(0);
  const [ur , setur] = useState("");

      useEffect(()=>{
        switch (bdet["itemState"]) {
          case "Harvested":
              setdate(bdet["s_date"]);
             if(isb){
              setur(burls["harvesting"]); }
              setstep(1);
            break;
          case "Processing":
              setdate(bdet["p_pulpdate"]);
              if(isb){
              setur(burls["processing"]);}
              setstep(2);
            break;
          case "Hulling":
              setdate(bdet["h_startdate"]);
              if(isb){
              setur(burls["hulling"]);}
             setstep(3);
            break;
          case "Roasting":
              setdate(bdet["r_date"]);
              if(isb){
              setur(burls["roasting"]);}
              setstep(4);
            break;
          case "Packaging":
              setdate(bdet["m_date"]);
              if(isb){
              setur(burls["packaging"]);}
              setstep(5);
            break;              
        
          default:
            break;
        }
      },[]);

    const formdate = (str)=> {
        console.log(str);
      let darr = str.split("-");
      console.log(darr);
      var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
      return dobj.toISOString().split('T')[0];
    }

    function convertToDateString(dateString) {
        const date = new Date(dateString);
        if (isNaN(date)) {
          return "Invalid date";
        }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      }


    return ( 
        <div className="w-full h-[983px] relative bg-neutral-100 font-heading">
  <div className="w-full h-[983px] relative bg-neutral-100">

    <div onClick={()=> setstage(1)} className="w-[350px] h-20 left-[5px] top-[442px] absolute bg-white rounded-[20px] shadow" /> 
       <div onClick={()=> setstage(2)} className="w-[350px] h-20 left-[5px] top-[530px] absolute bg-white rounded-[20px] shadow" /> 
      <div onClick={()=> setstage(3)} className="w-[350px] h-20 left-[5px] top-[618px] absolute bg-white rounded-[20px] shadow" />
     <div  onClick={()=> setstage(4)} className="w-[350px] h-20 left-[5px] top-[706px] absolute bg-white rounded-[20px] shadow" />
      <div onClick={()=> setstage(5)} className="w-[350px] h-20 left-[5px] top-[794px] absolute bg-white rounded-[20px] shadow" />
     <div onClick={()=> setstage(1)} className="left-[80px] top-[458px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Harvesting</div>
        <div onClick={()=> setstage(2)} className="left-[80px] top-[546px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Processing</div>
     <div onClick={()=> setstage(3)} className="left-[80px] top-[634px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Hulling</div>
      <div onClick={()=> setstage(4)} className="left-[79px] top-[722px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Roasting</div>
     <div onClick={()=> setstage(5)} className="left-[78px] top-[810px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Packaging</div>
   <div className="left-[14px] top-[404px] absolute text-center text-yellow-950 text-2xl font-bold  leading-snug">Tracking</div>

      <div onClick={()=> setstage(1)} className="w-[5px] h-[5px] left-[220px] top-[483px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image onClick={()=> setstage(1)} className="w-13 h-6 left-[330px] top-[468px] absolute" src={vect} alt="Icon"/>    
   
     <div onClick={()=> setstage(2)} className={`w-[5px] h-[5px] left-[220px] top-[571px] absolute origin-top-left rotate-180  rounded-full ${step >=2 ? "bg-green-400" : "bg-neutral-400"} `} />
   <Image onClick={()=> setstage(2)} className="w-13 h-6 left-[330px] top-[556px] absolute" src={vect} alt="Icon"/> 
    <div onClick={()=> setstage(3)} className={`w-[5px] h-[5px] left-[220px] top-[659px] absolute origin-top-left rotate-180  rounded-full ${step >=3 ? "bg-green-400" : "bg-neutral-400"} `}  />
   <Image onClick={()=> setstage(3)} className="w-13 h-6 left-[330px] top-[644px] absolute" src={vect} alt="Icon"/> 
    <div onClick={()=> setstage(4)} className={`w-[5px] h-[5px] left-[220px] top-[747px] absolute origin-top-left rotate-180  rounded-full  ${step >=4 ? "bg-green-400" : "bg-neutral-400"} `} />
   <Image onClick={()=> setstage(4)} className="w-13 h-6 left-[330px] top-[732px] absolute" src={vect} alt="Icon"/> 
  <div onClick={()=> setstage(5)} className={`w-[5px] h-[5px] left-[220px] top-[835px] absolute origin-top-left rotate-180  rounded-full  ${step ==5 ? "bg-green-400" : "bg-neutral-400"} `} />
   <Image onClick={()=> setstage(5)} className="w-13 h-6 left-[330px] top-[820px] absolute" src={vect} alt="Icon"/> 
   
      <div onClick={()=> setstage(1)} className="left-[226px] top-[471px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div>
      <div onClick={()=> setstage(2)} className={ step >=2 ? "left-[226px] top-[559px] absolute text-center text-green-400 text-sm font-bold  leading-snug" :"left-[226px] top-[559px] absolute text-center text-neutral-400 text-sm font-bold  leading-snug" }>{step >= 2 ? "Completed" : "Yet to Start" }</div>
  <div onClick={()=> setstage(3)}  className={ step >=3 ? "left-[226px] top-[647px] absolute text-center text-green-400 text-sm font-bold  leading-snug" : "left-[226px] top-[647px] absolute text-center text-neutral-400 text-sm font-bold  leading-snug" } >{step >= 3 ? "Completed" : "Yet to Start" }</div>
    <div onClick={()=> setstage(4)} className={ step >=4 ? "left-[226px] top-[735px] absolute text-center text-green-400 text-sm font-bold  leading-snug" : "left-[226px] top-[735px] absolute text-center text-neutral-400 text-sm font-bold  leading-snug"} >{step >= 4 ? "Completed" : "Yet to Start" }</div>
     <div onClick={()=> setstage(5)} className={ step ==5 ? "left-[226px] top-[823px] absolute text-center text-green-400 text-sm font-bold  leading-snug" : "left-[226px] top-[823px] absolute text-center text-neutral-400 text-sm font-bold  leading-snug" }>{step == 5 ? "Completed" : "Yet to Start" }</div>

     <div onClick={()=> setstage(1)} className="left-[80px] top-[484px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug"> { convertToDateString(bdet["s_date"]) }</div>
   <div onClick={()=> setstage(2)} className="left-[80px] top-[572px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ step >= 2 ? convertToDateString(bdet["p_bdate"]) : "NA" }</div>
     <div onClick={()=> setstage(3)} className="left-[80px] top-[660px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ step >= 3 ? convertToDateString(bdet["h_startdate"]) : "NA" }</div>
     <div onClick={()=> setstage(4)} className="left-[80px] top-[748px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ step>=4 ? convertToDateString(bdet["r_date"]) : "NA" }</div>
     <div onClick={()=> setstage(5)} className="left-[80px] top-[836px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ step ==5 ? convertToDateString(bdet["m_date"]) : "NA" }</div>
  
   <div onClick={()=> setstage(1)} className="w-12 h-12 left-[18px] top-[458px] absolute bg-green-50 rounded-[15px]" />
 <Image className="w-22 h-22 left-[31px] top-[471px] absolute" src={tesicon} alt="Icon"/>    
    <div onClick={()=> setstage(2)} className="w-12 h-12 left-[18px] top-[546px] absolute bg-green-50 rounded-[15px]" />
       <Image className="w-22 h-22 left-[31px] top-[559px] absolute" src={tesicon} alt="Icon"/> 
          <div onClick={()=> setstage(3)} className="w-12 h-12 left-[18px] top-[634px] absolute bg-green-50 rounded-[15px]" />
      <Image className="w-22 h-22 left-[31px] top-[647px] absolute" src={tesicon} alt="Icon"/> 
         <div onClick={()=> setstage(4)} className="w-12 h-12 left-[18px] top-[722px] absolute bg-green-50 rounded-[15px]" />
       <Image className="w-22 h-22 left-[31px] top-[735px] absolute" src={tesicon} alt="Icon"/> 
         <div onClick={()=> setstage(5)} className="w-12 h-12 left-[18px] top-[810px] absolute bg-green-100 rounded-[15px]" />
       <Image className="w-22 h-22 left-[31px] top-[823px] absolute" src={tesicon} alt="Icon"/> 

    <div className="w-[22px] h-[22px] left-[31px] top-[471px] absolute" />
    <div className="w-[22px] h-[22px] left-[31px] top-[559px] absolute" />
    <div className="w-[22px] h-[22px] left-[31px] top-[647px] absolute" />
    <div className="w-[22px] h-[22px] left-[31px] top-[735px] absolute" />
    <div className="w-[22px] h-[22px] left-[31px] top-[823px] absolute" />
    <div className="w-[350px] h-[140px] mx-1  top-[232px] absolute  ">
        <div className="w-[350px] h-[140px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
        <Image className="w-8 h-8 left-[16px] top-[16px] absolute" src={bicon} alt="Icon"/>
        <div className="left-[52px] top-[19px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">{bdet["upc"]}</div>
        <div className="w-7 h-7 left-[16px] top-[16px] absolute" />
        
       {isb && <a href={'https://polygonscan.com/tx/'+ur} target="_blank">

        <div className="left-[25px] top-[52px] absolute text-center text-neutral-400 text-sm font-semibold  leading-snug">Blockchain verified</div>
        <Image className="w-15 h-15 left-[162px] top-[52px] absolute" src={arricn} alt="Icon"/></a> }
        <div className="w-[15px] h-[15px] left-[160px] top-[52px] absolute">
            <div className="w-3 h-[11.25px] left-[1.50px] top-[1.50px] absolute">
            </div>
        </div>
        <div className="w-[5px] h-[5px] left-[220px] top-[33px] absolute origin-top-left rotate-180 bg-orange-400 rounded-full" />
        <div className="left-[225px] top-[19px] absolute text-center text-orange-400 text-lg font-bold  leading-snug">{bdet["itemState"]}</div>
        <div className="left-[200px] top-[49px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(disdate) }</div>


        { bdet["itemState"] == "Harvested" && 
        <div>
            
            <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/>  
           
        <div className="w-[31px] h-[31px] left-[16px] top-[93px] absolute bg-orange-400 rounded-full" /> 
        <Image className="w-15 h-15 left-[23px] top-[101px] absolute " src={oicon} alt="Icon"/>
        

        <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-neutral-400     "/> 
        <div className="w-[13px] h-[13px] left-[90px] top-[102px] absolute bg-neutral-400 rounded-full" /> 
         
          <div className="w-[13px] h-[13px] left-[165px] top-[102px] absolute bg-neutral-400 rounded-full" />
           <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-neutral-400     "/>
            <div className="w-[13px] h-[13px] left-[240px] top-[102px] absolute bg-neutral-400 rounded-full" />

            <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-neutral-400     "/>
         <div className="w-[13px] h-[13px] left-[315px] top-[102px] absolute bg-neutral-400 rounded-full" />
         

       
        </div>
        }

{ bdet["itemState"] == "Packaging" && 
        <div>
        <div className="w-[13px] h-[13px] left-[16px] top-[102px] absolute bg-orange-400 rounded-full" /> 
        <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/> 
        <div className="w-[13px] h-[13px] left-[90px] top-[102px] absolute bg-orange-400 rounded-full" /> 
          <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-orange-400     "/>  
          <div className="w-[13px] h-[13px] left-[165px] top-[102px] absolute bg-orange-400 rounded-full" />
           <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-orange-400     "/>
            <div className="w-[13px] h-[13px] left-[240px] top-[102px] absolute bg-orange-400 rounded-full" />
            <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-orange-400     "/>
       
       <div className="w-[31px] h-[31px] left-[315px] top-[93px] absolute bg-orange-400 rounded-full" />
       <Image className="w-15 h-15 left-[323px] top-[101px] absolute" src={oicon} alt="Icon"/>
         
        </div>
        
        }
        { bdet["itemState"] == "Processing" && 
        <div>
        <div className="w-[13px] h-[13px] left-[16px] top-[102px] absolute bg-orange-400 rounded-full" /> 
        <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/> 

        <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-neutral-400     "/> 
        <div className="w-[31px] h-[31px] left-[90px] top-[93px] absolute bg-orange-400 rounded-full" /> 
           
          <Image className="w-15 h-15 left-[97px] top-[101px] absolute" src={oicon} alt="Icon"/>
          <div className="w-[13px] h-[13px] left-[165px] top-[102px] absolute bg-neutral-400 rounded-full" />
           <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-neutral-400     "/>
            <div className="w-[13px] h-[13px] left-[240px] top-[102px] absolute bg-neutral-400 rounded-full" />

            <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-neutral-400     "/>
         <div className="w-[13px] h-[13px] left-[315px] top-[102px] absolute bg-neutral-400 rounded-full" />
         

       
        </div>
        
        }
         { bdet["itemState"] == "Hulling" && 
        <div>
        <div className="w-[13px] h-[13px] left-[16px] top-[103px] absolute bg-orange-400 rounded-full" /> 
        <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/> 

        <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-orange-400     "/> 
        <div className="w-[13px] h-[13px] left-[90px] top-[103px] absolute bg-orange-400 rounded-full" /> 
           
         
           <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-neutral-400     "/>
           <div className="w-[31px] h-[31px] left-[165px] top-[93px] absolute bg-orange-400 rounded-full" />
           <Image className="w-15 h-15 left-[172px] top-[101px] absolute" src={oicon} alt="Icon"/>

            <div className="w-[13px] h-[13px] left-[240px] top-[103px] absolute bg-neutral-400 rounded-full" />

            <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-neutral-400     "/>
         <div className="w-[13px] h-[13px] left-[315px] top-[102px] absolute bg-neutral-400 rounded-full" />

       
        </div>
        
        }
        { bdet["itemState"] == "Roasting" && 
        <div>
        <div className="w-[13px] h-[13px] left-[16px] top-[103px] absolute bg-orange-400 rounded-full" /> 
        <div className="w-[57px] h-[1px] left-[31px] top-[109px] absolute bg-orange-400     "/> 

        <div className="w-[58px] h-[1px] left-[105px] top-[109px] absolute bg-orange-400     "/> 
        <div className="w-[13px] h-[13px] left-[90px] top-[103px] absolute bg-orange-400 rounded-full" /> 
           
         
           <div className="w-[58px] h-[1px] left-[180px] top-[109px] absolute bg-orange-400     "/>
           <div className="w-[13px] h-[13px] left-[165px] top-[103px] absolute bg-orange-400 rounded-full" />       
            
            <div className="w-[58px] h-[1px] left-[255px] top-[109px] absolute bg-neutral-400     "/>
            <div className="w-[31px] h-[31px] left-[240px] top-[93px] absolute bg-orange-400 rounded-full" />
            <Image className="w-15 h-15 left-[247px] top-[101px] absolute" src={oicon} alt="Icon"/>

         <div className="w-[13px] h-[13px] left-[315px] top-[102px] absolute bg-neutral-400 rounded-full" />

       
        </div>
        
        }
        
    </div>

    <div className="w-full h-[195px] left-0 top-0 absolute">
        <div className="w-full h-[195px] left-0 top-0 absolute bg-yellow-950" />
        <div className="w-[361px] left-[16px] top-[135px] absolute text-white text-base font-normal  leading-[17px] ">Trace the taste <br/>Track Your Beans Blockchain Path!</div>
        <div className="left-[16px] top-[86px] absolute text-center text-stone-50 text-[32px] font-semibold  leading-snug">Skiá Bean Trackr</div>
        {/* <div className="text-center text-white text-[32px] font-bold  leading-snug">Skiá Bean Trackr</div> */}
    </div>
    <div className="w-full h-[50px] absolute bg-white shadow flex justify-center items-center">
    <Image className="w-12 h-8 " src={skia} alt='Op' />
</div>
</div>

</div>
     );
}
 
export default Landing;