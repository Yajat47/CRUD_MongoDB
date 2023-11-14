'use client';

import weat from '../assets/weat-raw.png'
import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import arricn from '../assets/whitehero.svg'


const Harvest = ({bdet , setstage}) => {

    const handleDragStart = (e ) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items2 = bdet["s_imgs"].map((e)=> "https://res.cloudinary.com/dxbzcfalw/image/upload/"+e  );
    const items = [

        
        
        <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1693105346/texbbldaeglzmzul771k.jpg"  onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={1}  />,
        <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1694328788/r1zja499c1oatpyoccco.jpg" width={390} height={353} onDragStart={handleDragStart} role="presentation" className='h-[353px]'alt='' key={2}/>,
        <Image src="https://res.cloudinary.com/dxbzcfalw/image/upload/v1694328758/ycgd8zijrmmlkukisu6s.jpg" width={390} height={353} onDragStart={handleDragStart} role="presentation" className='h-[353px]' alt='' key={3}/>,
      ];

    return ( 
        <div className="w-[393px] h-[1163px] relative bg-neutral-100 font-heading">
    <div className="w-[393px] h-[349px] left-0 top-0 absolute bg-black bg-opacity-70" />
    <div className="w-[393px] h-[73px] left-0 top-[349px] absolute bg-yellow-950" />
    
   <div className='flex flex-col justify-center h-[353px]'>
        {/* <AliceCarousel autoPlay={true} disableButtonsControls={true} infinite={true}  autoPlayInterval={3000} mouseTracking items={items} autoWidth={true} disableDotsControls={true}  />  */}
        </div>
       
        <a href='https://mumbai.polygonscan.com/tx/0x833f14b2f74d1b44bd15c35c7fe9365b8da99ff37103bff361f58eda144e9cdc' target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a>
    <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold ">Harvesting</div>

    <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold ">Region: </div>
    <div className="left-[16px] top-[514px] absolute text-black text-base font-semibold ">Species:</div>
    <div className="left-[17px] top-[546px] absolute text-black text-base font-semibold ">Elevation:</div>
    <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold ">Flowering:</div>
    <div className="left-[16px] top-[578px] absolute text-black text-base font-semibold ">Flowering:</div>
    <div className="left-[16px] top-[610px] absolute text-black text-base font-semibold ">Product Code:</div>
    <div className="left-[16px] top-[649px] absolute text-yellow-950 text-xl font-bold ">Fertilizers Info:</div>
    <div className="left-[16px] top-[802px] absolute text-yellow-950 text-xl font-bold ">Weather Info:</div>
    <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold ">Specifications :</div>
    <div className="left-[160px] top-[483px] absolute text-neutral-600 text-sm font-normal ">Highlands Temple Estate, Coorg</div>
    <div className="left-[160px] top-[515px] absolute text-neutral-600 text-sm font-normal ">Chandragiri (Arabica Washed)</div>
    <div className="left-[160px] top-[549px] absolute text-neutral-600 text-sm font-normal ">3360 Feet</div>
    <div className="left-[160px] top-[581px] absolute text-neutral-600 text-sm font-normal ">21st Nov 2021</div>
    <div className="left-[160px] top-[581px] absolute text-neutral-600 text-sm font-normal ">21st Nov 2021</div>
    <div className="left-[160px] top-[613px] absolute text-neutral-600 text-sm font-normal ">Arabica Washed 2023</div>
    <div className="w-[360px] left-[16px] top-[685px] absolute text-neutral-600 text-sm font-light ">Premonsoon-19 all, <br/>Cow manure,<br/>Postmonsoon-urea<br/>Potash Rock phosphate</div>
    <div className="left-[253px] top-[376px] absolute text-zinc-200 text-base font-medium ">13th Nov 2022</div>


  
    {/* <img className="w-[353px] h-[225px] left-[16px] top-[854px] absolute" src="https://via.placeholder.com/353x225" /> */}
    <Image className="w-360 h-270 left-[16px] top-[852px] absolute" src={weat} alt="Icon" width={360} height={250}/>
    <Link href="/arabica">
    <div className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
    </Link>

    <Link href="/arabica/process">
    <div className="w-15 h-fit p-[8px] left-[340px] top-[600px] fixed bg-yellow-950 rounded-full ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div>
    </Link>
    
</div>
     );
}
 
export default Harvest;