'use client';

import weat from '../assets/weat-raw.png'
import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import arricn from '../assets/whitehero.svg'


const Harvest = ({bdet , setstage ,step , burls , isb }) => {

    const handleDragStart = (e ) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    function convertToDateString(dateString) {
      const date = new Date(dateString );
      // if (isNaN(date)) {
      //   return "Invalid date";
      // }
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options );
    }
  //  https://res.cloudinary.com/dxbzcfalw/image/upload/v1696746574/q3nx8uzqfnvc4koh1ly2.jpg
  
    const items2 =  bdet["s_imgs"].map((e,index)=>   
  //   let s = "https://res.cloudinary.com/dxbzcfalw/image/upload/"+e.toString();
     // console.log(s);
    <img src={"https://res.cloudinary.com/dxbzcfalw/image/upload/"+e.toString()} onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={index}  />
  ) 

    
   const items3 = [

      // bdet["s_imgs"].map((e)=>         
      // <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/"+e  onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={1}  />,
      // )
        
        // <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1693105346/texbbldaeglzmzul771k.jpg"  onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={1}  />,
        <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1699935849/mt1glfo6ciz9i0xlhjlh.jpg" width={390} height={353} onDragStart={handleDragStart} role="presentation" className='h-[353px]'alt='' key={2}/>,
        // <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1694328758/ycgd8zijrmmlkukisu6s.jpg" width={390} height={353} onDragStart={handleDragStart} role="presentation" className='h-[353px]' alt='' key={3}/>,
     ];

    return ( 
        <div className="w-full h-[1163px] relative bg-neutral-100 font-heading">
    <div className="w-full h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
    <div className="w-full h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
    
    
   <div className='flex flex-col justify-center h-[353px]'>
        <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items2} autoWidth={true} disableDotsControls={true}  /> 
        </div>
       
        { isb && 
        <a href={'https://polygonscan.com/tx/'+burls["harvesting"]} target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a> }
    <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold ">Harvesting</div>

    <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold ">Region: </div>
    <div className="left-[16px] top-[514px] absolute text-black text-base font-semibold ">Temperature:</div>
    <div className="left-[17px] top-[546px] absolute text-black text-base font-semibold ">Elevation:</div>
    <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold ">Flowering:</div>
    {/* <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold ">Flowering:</div> */}
    <div className="left-[16px] top-[610px] absolute text-black text-base font-semibold ">Product Code:</div>
    <div className="left-[16px] top-[649px] absolute text-yellow-950 text-xl font-bold ">Fertilizers Info:</div>
    <div className="left-[16px] top-[802px] absolute text-yellow-950 text-xl font-bold ">Weather Info:</div>
    <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold ">Specifications :</div>
    <div className="left-[160px] top-[483px] absolute text-neutral-600 text-sm font-normal ">{bdet["s_region"]}</div>
    <div className="left-[160px] top-[515px] absolute text-neutral-600 text-sm font-normal ">{bdet["s_temp"]}</div>
    <div className="left-[160px] top-[549px] absolute text-neutral-600 text-sm font-normal ">{bdet["s_elevation"]}</div>
    <div className="left-[160px] top-[581px] absolute text-neutral-600 text-sm font-normal ">{convertToDateString(bdet["s_flowering"])}</div>
    <div className="left-[160px] top-[613px] absolute text-neutral-600 text-sm font-normal ">{bdet["upc"]}</div>
    <div className="w-[360px] left-[16px] top-[685px] absolute text-neutral-600 text-sm font-light ">{bdet["s_variety"]}</div>
    <div className="left-[200px] top-[376px] absolute text-zinc-200 text-base font-medium ">{ convertToDateString(bdet["s_date"]) }</div>


  
    {/* <img className="w-[353px] h-[225px] left-[16px] top-[854px] absolute" src="https://via.placeholder.com/353x225" /> */}
    <Image className="w-360 h-270 left-[16px] top-[852px] absolute" src={weat} alt="Icon" width={360} height={250}/>
   
    <div onClick={()=> setstage(0)} className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
      
      

    
    <div onClick={()=> step>=2 ? setstage(2) : setstage(0) } className="w-15 h-fit p-[8px] left-[310px] top-[600px] fixed bg-yellow-950 rounded-full ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div>
    
    
</div>
     );
}
 
export default Harvest;