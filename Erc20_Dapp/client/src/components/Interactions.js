import { React, useState } from "react";
import styles from "../components/Wallet.module.css";
import TransactionHistory from '../components/TransactionHistory';

const Interactions = (props) => {
  const [transferHash, setTransferHash] = useState();
  const [recieverAddress, setRecieverAddress] = useState();
  const [amount, setAmount] = useState();

  const transferHandler = async (e) => {
    e.preventDefault();
    let transferAmount = e.target.sendAmount.value;
    let recieverAddress = e.target.recieverAddress.value;

    let txt = await props.contract.transfer(recieverAddress, transferAmount);

    console.log(txt);
    setTransferHash("Transfer confirmation hash: " + txt.hash);
    setRecieverAddress(recieverAddress);
	setAmount(transferAmount)
  };

  return (
	<div>
    <div className={styles.interactionsCard}>
      <form onSubmit={transferHandler}>
        <h3> Transfer Coins </h3>
        <p> Reciever Address </p>
        <input
          type="text"
          id="recieverAddress"
          className={styles.addressInput}
        />

        <p> Send Amount </p>
        <input type="number" id="sendAmount" min="0" step="1" />

        <button type="submit" className={styles.button6}>
          Send
        </button>
      </form> 
	  </div>
	  	<TransactionHistory hash={transferHash} to={recieverAddress} amount={amount}/>
    
	</div>
  );
};

export default Interactions;
