import React from "react";
import styles from "../components/Wallet.module.css";

const TransactionHistory = (props) => {
  return (
    <div  className={styles.walletCard}>        
        <h4>Transactions Details</h4>
        <div>
        <strong>Hash: </strong> {props.hash}<br/>
        <strong>To Address: </strong> {props.to}<br/>
        <strong>Amount: </strong> {props.amount} ETH<br/>
        </div>
    </div>
  );
};

export default TransactionHistory;
