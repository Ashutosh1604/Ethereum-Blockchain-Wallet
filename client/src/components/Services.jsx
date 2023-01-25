import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';


const ServiceCard=({color,title,icon,subtitle})=>{
  
  return (
  
  <div className="flex flex-row justify-start items-center white-glassmorphism p-6 m-3 cursor-pointer hover:shadow-2xl">
    <div className={`flex justify-center items-center  w-10 h-10 rounded-full  ${color}`}>
    {icon}
    
    </div>
    <div className="ml-5 flex flex-col flex-1">
       <h2 className="mt-2 text-white text-lg">{title}</h2>
       <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>

  )
  
};


const Services=()=> {
  return (
 <div className="flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services">
<div className="flex mf:flex-row  flex-col items-center justify-between md:p-20 py-12 px-4">

<div className=" flex-col justify-start items-start">
<h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
  Services that we 
  <br />
  continue to improve
</h1>
</div>
</div>

{/*service cards */}
<div className="flex  flex-1  flex-col justify-start items-start ">

<ServiceCard 
color="bg-[#2952E3]"
 title="Security Gaurantee" 
 icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
subtitle="Security is gauranteed. We always maintainprivacy and maintain the quality of our product"
/>

<ServiceCard 
color="bg-[#8945F8]"
 title="Best exchange rates" 
 icon={<BiSearchAlt fontSize={21} className="text-white" />}
subtitle="Security is gauranteed. We always maintainprivacy and maintain the quality of our product"
/>

<ServiceCard 
color="bg-[#F84550]"
 title="Fastest Transactions" 
 icon={<RiHeart2Fill fontSize={21} className="text-white" />}
subtitle="Security is gauranteed. We always maintainprivacy and maintain the quality of our product"
/>



</div>

 </div>
  )
}

export default Services