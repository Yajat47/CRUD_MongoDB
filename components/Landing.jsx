import Image from 'next/image'
import tesicon from '../assets/bxs_coffee-bean.svg';
import bicon from '../assets/Brown-bxs_coffee-bean.svg';
import arricn from '../assets/heroicons_arrow-top-right-on-square-20-solid.svg'
import oicon from '../assets/WHITEbxs_coffee-bean (1).svg'
import skia from '../assets/image 35.svg';
import vect from '../assets/arrow.svg'
import Link from 'next/link';

const Landing = ({bdet , setstage}) => {

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

   <Link href="/arabica/harvest"> <div onClick={()=> setstage(1)} className="w-[361px] h-20 left-[16px] top-[442px] absolute bg-white rounded-[20px] shadow" /> </Link>
   <Link href="/arabica/process">     <div onClick={()=> setstage(2)} className="w-[361px] h-20 left-[16px] top-[530px] absolute bg-white rounded-[20px] shadow" /> </Link>
   <Link href="/arabica/hulling">     <div className="w-[361px] h-20 left-[16px] top-[618px] absolute bg-white rounded-[20px] shadow" /></Link>
   <Link href="/arabica/roasting">    <div className="w-[361px] h-20 left-[16px] top-[706px] absolute bg-white rounded-[20px] shadow" /></Link>
   <Link href="/arabica/packaging">    <div className="w-[361px] h-20 left-[16px] top-[794px] absolute bg-white rounded-[20px] shadow" /></Link>
     <div onClick={()=> setstage(1)} className="left-[95px] top-[458px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Harvesting</div>
   <Link href="/arabica/process">     <div className="left-[95px] top-[546px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Processing</div></Link>
   <Link href="/arabica/hulling">   <div className="left-[95px] top-[634px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Hulling</div></Link>
   <Link href="/arabica/roasting">   <div className="left-[94px] top-[722px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Roasting</div></Link>
   <Link href="/arabica/packaging">   <div className="left-[93px] top-[810px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">Packaging</div></Link>
   <div className="left-[14px] top-[404px] absolute text-center text-yellow-950 text-2xl font-bold  leading-snug">Tracking</div>
   <Link href="/arabica/harvest">   <div className="w-[5px] h-[5px] left-[252px] top-[483px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image className="w-13 h-6 left-[355px] top-[468px] absolute" src={vect} alt="Icon"/>    
   </Link>
   <Link href="/arabica/process">   <div className="w-[5px] h-[5px] left-[252px] top-[571px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image className="w-13 h-6 left-[355px] top-[556px] absolute" src={vect} alt="Icon"/> </Link>
   <Link href="/arabica/hulling">   <div className="w-[5px] h-[5px] left-[252px] top-[659px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image className="w-13 h-6 left-[355px] top-[644px] absolute" src={vect} alt="Icon"/> </Link>
   <Link href="/arabica/roasting">   <div className="w-[5px] h-[5px] left-[252px] top-[747px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image className="w-13 h-6 left-[355px] top-[732px] absolute" src={vect} alt="Icon"/> </Link>
   <Link href="/arabica/packaging">   <div className="w-[5px] h-[5px] left-[252px] top-[835px] absolute origin-top-left rotate-180 bg-green-400 rounded-full" />
   <Image className="w-13 h-6 left-[355px] top-[820px] absolute" src={vect} alt="Icon"/> </Link>
   <Link href="/arabica/harvest">   <div className="left-[256px] top-[471px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/arabica/process">   <div className="left-[256px] top-[559px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/arabica/hulling">   <div className="left-[256px] top-[647px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/arabica/roasting">   <div className="left-[256px] top-[735px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/arabica/packaging">   <div className="left-[256px] top-[823px] absolute text-center text-green-400 text-sm font-bold  leading-snug">Completed</div></Link>
   <Link href="/arabica/harvest">   <div className="left-[95px] top-[484px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug"> { convertToDateString(bdet["s_date"]) }</div></Link>
   <Link href="/arabica/process">   <div className="left-[95px] top-[572px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(bdet["p_bdate"]) }</div></Link>
   <Link href="/arabica/hulling">   <div className="left-[95px] top-[660px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(bdet["h_startdate"]) }</div></Link>
   <Link href="/arabica/roasting">   <div className="left-[95px] top-[748px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(bdet["r_date"]) }</div></Link>
   <Link href="/arabica/packaging">   <div className="left-[95px] top-[836px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(bdet["m_date"]) }</div></Link>
   <Link href="/arabica/harvest"> <div className="w-12 h-12 left-[32px] top-[458px] absolute bg-green-50 rounded-[15px]" /></Link>
 <Image className="w-22 h-22 left-[45px] top-[471px] absolute" src={tesicon} alt="Icon"/>    
 <Link href="/arabica/process">   <div className="w-12 h-12 left-[32px] top-[546px] absolute bg-green-50 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[559px] absolute" src={tesicon} alt="Icon"/> 
       <Link href="/arabica/hulling">    <div className="w-12 h-12 left-[32px] top-[634px] absolute bg-green-50 rounded-[15px]" /></Link>
      <Image className="w-22 h-22 left-[45px] top-[647px] absolute" src={tesicon} alt="Icon"/> 
      <Link href="/arabica/roasting">    <div className="w-12 h-12 left-[32px] top-[722px] absolute bg-green-50 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[735px] absolute" src={tesicon} alt="Icon"/> 
       <Link href="/arabica/packaging">  <div className="w-12 h-12 left-[32px] top-[810px] absolute bg-green-100 rounded-[15px]" /></Link>
       <Image className="w-22 h-22 left-[45px] top-[823px] absolute" src={tesicon} alt="Icon"/> 
    <div className="w-[22px] h-[22px] left-[45px] top-[471px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[559px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[647px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[735px] absolute" />
    <div className="w-[22px] h-[22px] left-[45px] top-[823px] absolute" />
    <div className="w-[361px] h-[140px] left-[16px] top-[232px] absolute ">
        <div className="w-[361px] h-[140px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
        <Image className="w-8 h-8 left-[16px] top-[16px] absolute" src={bicon} alt="Icon"/>
        <div className="left-[53px] top-[19px] absolute text-center text-yellow-950 text-lg font-bold  leading-snug">{bdet["upc"]}</div>
        <div className="w-7 h-7 left-[16px] top-[16px] absolute" />
        <a href='https://mumbai.polygonscan.com/tx/0x833f14b2f74d1b44bd15c35c7fe9365b8da99ff37103bff361f58eda144e9cdc' target="_blank">
        <div className="left-[52px] top-[49px] absolute text-center text-neutral-400 text-sm font-semibold  leading-snug">Blockchain verified</div>
        <Image className="w-15 h-15 left-[190px] top-[50px] absolute" src={arricn} alt="Icon"/></a>
        <div className="w-[15px] h-[15px] left-[180px] top-[52px] absolute">
            <div className="w-3 h-[11.25px] left-[1.50px] top-[1.50px] absolute">
            </div>
        </div>
        <div className="w-[5px] h-[5px] left-[240px] top-[33px] absolute origin-top-left rotate-180 bg-orange-400 rounded-full" />
        <div className="left-[247px] top-[19px] absolute text-center text-orange-400 text-lg font-bold  leading-snug">{bdet["itemState"]}</div>
        <div className="left-[235px] top-[49px] absolute text-center text-neutral-400 text-sm font-medium  leading-snug">{ convertToDateString(bdet["m_date"]) }</div>
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
        {/* <div className="w-[31px] h-[31px] left-[333px] top-[102px] absolute bg-orange-400 rounded-full" />
        <div className="w-[31px] h-[31px] left-[240px] top-[93px] absolute bg-orange-400 rounded-full" />
        <div className="w-[15px] h-[15px] left-[248px] top-[101px] absolute" /> */}
    </div>

    <div className="w-full h-[195px] left-0 top-0 absolute">
        <div className="w-full h-[195px] left-0 top-0 absolute bg-yellow-950" />
        <div className="w-[361px] left-[16px] top-[135px] absolute text-white text-base font-normal  leading-[17px] ">Trace the taste :Track Your Beans Blockchain <br/> Path!</div>
        <div className="left-[16px] top-[86px] absolute text-center text-stone-50 text-[32px] font-bold  leading-snug">Skiá Bean Trackr</div>
        {/* <div className="text-center text-white text-[32px] font-bold  leading-snug">Skiá Bean Trackr</div> */}
    </div>
    <div className="w-full h-[50px] absolute bg-white shadow">
    <Image className="w-12 h-8 left-[172px] top-[10px] absolute" src={skia} alt='Op' />
</div>
</div>

</div>
     );
}
 
export default Landing;