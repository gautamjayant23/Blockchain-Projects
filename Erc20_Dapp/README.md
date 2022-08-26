# ERC20 Token DAPP

This Project provides below functionalities:

1. Connect to the Metamask Wallet.
2. Displays balanceof ERC20 Token.
3. Send Ethers to another address.
4. Display transaction Detail after transaction is successful.

# Backend Technology

1. Smart Contracts are created using Solidity to view balance and perform trasactions.
2. used Remix IDE for creating smart contracts.

# Frontend

1. Front end is created using React Js.
2. React Js interacts with our smart contract using web3.js.

# Smart Contract Deployment

1. Smart Contract is deployed on Rinkeby Test Network

# Pre Requisites to run project

1. Node JS and npm
2. Metamask
3. Truffle
4. Ganache for local blockchain

# Compile and Migrate Smart Contract

1. Navigate to Erc20_Dapp/Smart_contracts
2. Execute below commands:
   npm install -g truffle
   npm install @truffle/hdwallet-provider
   truffle migrate --network rinkeby

# Compile and Run Frontend

1. Navigate to Erc20_Dapp/client
2. Execute below commands:
   npm install --save
   npm install react-app --save
   npm start
3. This wil open App page on http://localhost:3000/
