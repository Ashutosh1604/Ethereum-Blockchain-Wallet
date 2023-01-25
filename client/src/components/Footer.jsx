import React from 'react'
import logo from '../images/logo.png'

const Footer=()=> {
  return (
   <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">


<div className="flex justify-center items-center flex-col mt-5">
<p className="text-white text-sm text-center ">Come join us</p>
<p className="text-white text-sm md:text-center">info@kryptomastery.com</p>
</div>





  
<div className=" sm:w-[90%] h-[0.25px] w-full bg-gray-400 my-2"/>
<div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
<p className="text-white text-sm text-center ">@kryptomastery 2022</p>
<p className="text-white text-sm text-center ">All rights reserverd</p>
</div>

</div>

  )
}

export default Footer