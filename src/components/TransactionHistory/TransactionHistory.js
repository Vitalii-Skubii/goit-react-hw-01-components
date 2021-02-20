import React from 'react';

import TransactionTable from './TransactionData'
import style from './TransactionHistory.module.css'
const TransactionHistory = ({transaction}) => {
    return (
      <table className={style.transactionHistory}>
  <thead>
    <tr>
      <th className={style.transactionHeadName}>Type</th>
      <th className={style.transactionHeadName}>Amount</th>
      <th className={style.transactionHeadName}>Currency</th>
    </tr>
  </thead>

            <TransactionTable transaction={transaction}/>
</table>
   ) 
}
export default TransactionHistory