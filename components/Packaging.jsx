'use client';

import weat from '../assets/weat-raw.png'
import Image from 'next/image'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Link from 'next/link';
import arricn from '../assets/whitehero.svg'

const Packaging = ({bdet , setstage ,burls , isb}) => {
    const handleDragStart = (e ) => e.preventDefault();
    // https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg

    const items = [
        
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575941/ijjqmgc2ilddf4xltzmy.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={12}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575408/qppp4ndl0iszfwad7lvu.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={13}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694328800/ustb2pysvytb0ttrxjck.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={14} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693105356/glougaevonpwk43l79d5.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={15}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1693283352/bf97qcpci2ja3nepwhxe.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={16}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694329401/eqq5tlvuoztdrexwt7ru.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={17} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575393/sclh5pxon4ouxzaatsvm.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={18} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575437/sfykyxhsxuhepr1capaf.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={19} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={20} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575912/h5i1axfkvertqf31mifi.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={21}  />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694575930/vwpkfhkbhxhujpusr81z.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={22}/>,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694576077/ogdmacxnihslhwwyippd.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={23} />,
        <Image src="https://res.cloudinary.com/dypp5dcp7/image/upload/v1694870833/vjush4ljkxsuaylrwv5t.jpg" onDragStart={handleDragStart} role="presentation" className='h-[353px]' width={390} height={353} alt='' key={24} />,
    ];
    const items2 =  bdet["r_imgs"].map((e,index)=>   
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
        <a href={'https://polygonscan.com/tx/'+burls["packaging"]} target="_blank">
        <div className="left-[16px] top-[393px] absolute text-white text-sm font-light  leading-snug">Block Explorer</div>
        <Image className="w-4 h-4 left-[114px] top-[394px] absolute" src={arricn} alt="Icon"/></a> }
                <div className="left-[16px] top-[360px] absolute text-white text-2xl font-bold font-['Poppins']">Packaging</div>
        <div className="left-[16px] top-[482px] absolute text-black text-base font-semibold font-['Poppins']">Product Code:</div>
        <div className="left-[16px] top-[444px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Specifications :</div>
        <div className="left-[168px] top-[483px] absolute text-neutral-600 text-sm font-normal font-['Poppins']">{bdet["upc"]}</div>
        <div className="left-[200px] top-[376px] absolute text-zinc-200 text-base font-medium font-['Poppins']">{convertToDateString(bdet["m_date"])}</div>
        
        <div className="left-[16px] top-[528px] absolute text-yellow-950 text-xl font-bold font-['Poppins']">Brewing:</div>
        <div className="w-[360px] left-[16px] top-[573px] absolute text-neutral-600 text-sm font-light font-['Poppins']">{bdet["brewing"]}</div>
      
    <div onClick={()=>setstage(4)} className="w-15 h-fit p-[8px] left-[16px] top-[32px] absolute bg-yellow-950 rounded-full">
    <span className='text-white '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
</span>
    </div>
 

   
    <div onClick={()=>setstage(0)} className="w-15 h-fit p-[8px] left-[310px] top-[600px] fixed bg-yellow-950 rounded-full ">
        <span className='text-white '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</span>
    </div>
    
    </div>
     );
}
 
export default Packaging;