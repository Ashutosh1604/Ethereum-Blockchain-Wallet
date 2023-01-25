
/* we use alchemy created our aap and and view key copy the http key and paste in url and copy the private key of your account from metamask and paste in accounts */
require('@nomiclabs/hardhat-waffle');   //build smartcontract test

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/VPowi0Ao5yuNzZfo9B7pftYPIVvbYZO0' ,  //this is the http key of app that we created in alchemy
      accounts:['3e02871479fe1ac192e427de86afec93c6d0cba528639183f60a21ef4959d457']  //private key of metamask account
    }
  }
}