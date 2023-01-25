//using react context api to connect to blockchain
import React,{useState,useEffect} from 'react';
import {ethers} from "ethers";

import  {contractAbi,contractAddress} from  '../utils/constants';


export const TransactionContext=React.createContext();   //creating react context

const {ethereum} =window;  //as we are using metamask we can access the ethereum object . we destructure ethereum object from window.ethereum

//function to fetch ethereum contract
const getEthereumContract= ()=>{
    const provider= new ethers.providers.Web3Provider(ethereum); //creating provider
    const signer=provider.getSigner();  //creating signer
    const transactionContract= new ethers.Contract(contractAddress,contractAbi,signer); //fetching contract

    return transactionContract;
}


export const TransactionProvider=({children})=>{

   const [currentAccount,setCurrentAccount] = useState("");
   const [formData,setFormData]=useState({addressTo:"",amount:"",keyword:"",message:""});
   const [isLoading,setIsLoading]=useState(false);
   const [transactionCount,setTransactionCount]=useState(localStorage.getItem("transactionCount"));
    const [transactions,setTransactions]= useState([]);


   const handleChange=(e,name)=>{
          setFormData((prevState)=>({...prevState,[name]:e.target.value}));    //changing data dynamically
    
        }



   const getAllTransactions= async()=>{
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
   }

  const checkIfWalletIsConnected=async()=>{

    try{
        if(!ethereum)
        {
            return alert("Please install metamask!");
        }
    
        const accounts= await ethereum.request({method:"eth_accounts"});   //checking connected account
    
        if(accounts.length)
        {
            setCurrentAccount(accounts[0]);
    
            getAllTransactions();
        }
        else
        {
            console.log("No accounts found!!");
        }
      
    }
    catch(error){
        console.log(error);

           throw new Error("No ethereum object!");
    }
  
  };


  const checkIfTransactionsExist = async ()=>{
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount = await transactionsContract.getAllTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


  const connectWallet = async()=>{
    try{
        if(!ethereum)
        {
            return alert("Please install metamask!");
        }
        const accounts= await ethereum.request({method:"eth_requestAccounts"});  //we will get accounts and user can connect to one

        setCurrentAccount(accounts[0]);
    }
    catch(error){
           console.log(error);

           throw new Error("No ethereum object!");
    }
  };




  const sendTransaction = async()=>{
 try{

    if(!ethereum)
    {
        return alert("Please install metamask!");
    }
    
    const {addressTo,amount,keyword,message}=formData;   //destructuring formData
    const transactionContract=getEthereumContract();   //we can use to call all our contract related functions

    const parsedAmount=ethers.utils.parseEther(amount); //converting decimal amount to wie

    //ethereum transaction
    await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208",  //21000 wei
          value: parsedAmount._hex,
        }],
      });

    //store transaction to blockchain
   const transactionHash= await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);  //it will return a hash
   
   setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();  //to wait for transaction to finish
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);

        const transactionCount = await transactionContract.getAllTransactionCount();

        setTransactionCount(transactionCount.toNumber());

 }
 catch(error)
 {
    console.log(error);

     throw new Error("No ethereum object!");

 }
}



  //run as the app starts
  useEffect(()=>{
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  },[]);

//import it into index.js and wrap whole code inside transactionProvider 
//everything inside the context provider can have the access to value object
return(
    <TransactionContext.Provider value={{ connectWallet , currentAccount,formData,setFormData,handleChange,sendTransaction,isLoading,transactions}} >
        {children}   
    </TransactionContext.Provider>
)
}