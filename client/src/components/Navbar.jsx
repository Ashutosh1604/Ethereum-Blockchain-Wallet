import { useState ,React} from 'react'
import {HiMenuAlt4} from 'react-icons/hi';          
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../images/logo.jpg';


//for creating list by accepting title is prop and classProps are some styles for small screen
const NavbarItem=({title, classProps})=>{
return (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
 {title}
  </li>
);
}

const Navbar=()=> {

  const[toggleMenu,setToggleMenu]=useState(false);      //a state to tell if it is small screen or not


  return (
 <nav className="w-full flex md:justify-center justify-between items-center p-4 ">

{/*logo */}
{/*logo */}
 <div className=" flex md:flex-[0.5] flex-initial  items-center">
  <img src={logo} alt="logo" className="w-32 rounded-full cursor-pointer " />
  <h1 className="text-[27px] text-white ">ETHRO</h1>
  
 </div>
 
 
 {/*list */}
 <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
  {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>{
        return  <NavbarItem  key={item+index} title={item}/>
  })}

  <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
 Login
  </li>
 </ul>


 <div className="flex relative">
{/*if small screen show menu icon else show close */}
{toggleMenu ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=> setToggleMenu(false)}/> : 
 <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=> setToggleMenu(true)}/>}

{/*if menu icon is clicked */}
 { toggleMenu && (
    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen  shadow-2xl md:hidden list-none
     flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in ">
      <li className="text-xl w-full my-2 text-red-500  ">
      <AiOutlineClose onClick={()=> setToggleMenu(false)} />
      </li>
      {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>{
        return  <NavbarItem  key={item+index} title={item} classProps="my-2 text-lg"/>
      })}
    </ul>
  )}
 </div>

 </nav>
  )
}

export default Navbar
