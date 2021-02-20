import React from 'react';
import style from "./TransactionData.module.css"
import PropTypes from "prop-types"
const TransactionData = ({id,type,amount,currency}) => {
    return(
    <tr key={id} className={style.tableRow}>
      <td className={style.tableData}>{type}</td>
      <td className={style.tableData}>{amount}</td>
      <td className={style.tableData}>{currency}</td>
    </tr>
    
    )
    
}

const TransactionTable = ({ transaction }) => {
    return (<tbody>
        {
            transaction.map(TransactionData)
}
    </tbody>)
}


    
TransactionTable.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired
        }).isRequired
           
       ).isRequired
    }
export default TransactionTable;