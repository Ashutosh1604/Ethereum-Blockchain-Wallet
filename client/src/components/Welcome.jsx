import React ,{useContext} from 'react'
import { AiFillPlayCircle}  from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import { shortenAddress } from '../utils/shortenAddress';

import {Loader} from './';
import { TransactionContext } from '../context/TransactionContext';


//to create inputs for form
const Input=({placeholder,name,type,handleChange})=>{
  return <input placeholder={placeholder} type={type} step="0.0001"  onChange={(e)=>handleChange(e,name)} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "/>
}





const Welcome=()=> {
  //some common style for grid column
const commonStyles = "min-h-[70px] sm:px-0 px-5 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const {connectWallet,currentAccount,formData,handleChange,sendTransaction,isLoading} =useContext(TransactionContext);

  

  const handleSubmit=(e)=>{
const {addressTo,amount,keyword,message}=formData;   //destructuring formData

e.preventDefault();

if(!addressTo || !amount || !keyword || !message)
{
  alert("empty field!!");  //return nothing
  return;
}

sendTransaction();


  }


  return (
    <div className="flex w-full justify-center items-center">
     <div className="flex mf:flex-row flex-col justify-between items-start md:p-20 py-12 px-4">
      {/*left part */}
      <div className="flex flex-1 flex-col justify-start mf:mr-20">
        <h1 className="text-white text-3xl md:text-5xl text-gradient py-1">
          Send Crypto <br/> across the world
        </h1>
        <p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Krypt.
        </p>

           {/*Connect wallet button render only if account is not connected */}
           
        {!currentAccount &&  <button type="button" onClick={connectWallet} className="flex flex-row justify-center 
        items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
    <p className="font-semibold text-white text-base">      Connect Wallet     </p>

        </button>
       }

           {/*Grid*/}
        <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 w-full ">
          <div className={`rounded-tl-2xl ${commonStyles}`}>
             Relaibility
          </div>
          <div className={commonStyles}>
             Security
          </div>
          <div className={`md:rounded-tr-2xl ${commonStyles}`}>
             Ethereum
          </div>
          <div className={`md:rounded-bl-2xl ${commonStyles}`}>
             Web 3.0
          </div>
          <div className={commonStyles}>
             Low fees
          </div>
          <div className={`rounded-br-2xl ${commonStyles}`}>
             Blockchain
          </div>

        </div>

      </div>
      {/*right part */}
      <div className="flex flex-1 flex-col justify-start items-center w-full mf:mt-0 mt-10">
        <div className="  justify-end items-start flex-col rounded-xl p-3 h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
        <div className="flex flex-col justify-between  w-full h-full">
          {/*icons */}
          <div className="flex justify-between items-start">
            {/*ethereum icon*/}
            <div className="w-10 h-10 border-2 border-white rounded-full   flex justify-center items-center">

             <SiEthereum fontSize={21} color="#fff"/>
            </div>
            {/*info icon */}
            <BsInfoCircle fontSize={17} color="#fff"/>

          </div>

        {/*address connected */}
          <div>
            <p className="font-light text-white text-sm">
              {shortenAddress(currentAccount)}
            </p>
            <p className="font-semibold text-white mt-1 text-lg ">
              Ethereum
            </p>
          </div>

        </div>
        </div>

        {/*form*/}
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center  blue-glassmorphism ">
         <Input placeholder="Address To"  name="addressTo" type="text" handleChange={handleChange}/>
         <Input placeholder="Amount (ETH)"  name="amount" type="number" handleChange={handleChange}/>
         <Input placeholder="Keyword (Gif)"  name="keyword" type="text" handleChange={handleChange}/>
         <Input placeholder="Enter Message"  name="message" type="text" handleChange={handleChange}/>
           
         <div className="h-[1px] w-full bg-gray-400 my-2"/>
  
         {
          isLoading ?( <Loader/>): (<button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer active:bg-[#2546bd] " onClick={handleSubmit}> Send Now</button>)

  
         }

         
        </div>


      </div>

     </div>
    </div>
  )
}

export default Welcome