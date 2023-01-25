//to deploy our Transactions smart contract


const main=async ()=>{
const Transactions= await hre.ethers.getContractFactory("Transactions");   //it will generate instances of that contract
const transactions=await Transactions.deploy();   //one instance of our contract

await transactions.deployed();

console.log("Transactions deployed to: ",transactions.address);  //we will get address of the smart contract deployed on blockchain  
}



const runMain=async ()=>{
  try{
   await main();
   process.exit(0);  //process success
  }catch(error)
  {
    console.error(error);
    process.exit(1);   //error
  }
}


runMain();


/*
after completing the files Transactions,deploy and hardhat.config.js
go to terminal and type:- npx hardhat  run scripts/deploy.js --network goerli 
we will get the address where transactions is deployed and take it to the clients create utils folder and paste it in constants
as we deploy abi file is also created in artifacts folder copy it and take it to utils and paste in json file
*/