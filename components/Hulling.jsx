'use client';


import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'next/link';
import 'react-alice-carousel/lib/alice-carousel.css';
import arricn from '../assets/whitehero.svg'
const Hulling = ({bdet , setstage , step , burls , isb}) => {
    const handleDragStart = (e ) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items = [
        
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'  width={390} height={353} alt='' key={5}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575930/vwpkfhkbhxhujpusr81z.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={6}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694576077/ogdmacxnihslhwwyippd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]'  width={390} height={353} alt='' key={7}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870833/vjush4ljkxsuaylrwv5t.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={8} />,
    ];

    const items2 =  bdet["p_imgs"].map((e,index)=>   
    //   let s = "https://res.cloudinary.com/dxbzcfalw/image/upload/"+e.toString();
       // console.log(s);
      <img src={"https://res.cloudinary.com/dxbzcfalw/image/upload/"+e.toString()} onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={index}  />
    ) 

    function convertToDateString(dateString) {
        const date = new Date(dateString );
        // if (isNaN(date)) {
        //   return "Invalid date";
        // }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options );
      }

    return ( 
        <div className="w-[393px] h-[900px] relative bg-neutral-100 font-heading">
        <div className="w-[393px] h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
        <div className="w-[393px] h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
        <div className='flex flex-col justify-center h-[353px]'>
        <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items2} autoWidth={true} disableDotsControls={true}  /> 
        </div>
        { isb && 
        <a href={'https://polygonscan.com/tx/'+burls["hulling"]} target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a> }
        <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold font-['Poppins']">Hulling</div>
        <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold font-['Poppins']">Product Code:</div>
        <div className="left-[16px] top-[514px] absolute text-black text-base font-semibold font-['Poppins']">Resting Period:</div>
        <div className="left-[17px] top-[546px] absolute text-black text-base font-semibold font-['Poppins']">Grade Size:</div>
        <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold font-['Poppins']">:</div>
        <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold font-['Poppins']">Bagging Details:</div>
        <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Specifications :</div>
        <div className="left-[168px] top-[483px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">{bdet["upc"]}</div>
        <div className="left-[167px] top-[517px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">{bdet["h_resttime"]}</div>
        <div className="left-[166px] top-[549px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">{bdet["h_gradesize"]}</div>
        <div className="left-[164px] top-[583px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">{bdet["h_baggingdetails"]}</div>
        <div className="left-[235px] top-[376px] absolute text-zinc-200 text-base font-medium font-['Poppins']">{convertToDateString(bdet["h_startdate"])}</div>
       
    <div onClick={()=> setstage(2)} className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
    

     
    <div onClick={()=> step>=4 ? setstage(4) : setstage(0)} className="w-15 h-fit p-[8px] left-[340px] top-[600px] fixed bg-yellow-950 rounded-full ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div>
   
    </div>
     );
}
 
export default Hulling;