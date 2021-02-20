import React from 'react';
import style from './StatisticsList.module.css'
import PropTypes from 'prop-types'
const StatisticsListItem = ({ id, label, percentage }) => {
     return (<li key={id} className={style.item}>
         <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>)
}
const StatisticsList = ({items}) => {
    
        if(items.length===0) return null
  return (<ul className={style.statList}>{items.map(StatisticsListItem)}
    
  </ul>)
}

StatisticsListItem.propTypes = {
  id:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired,
  percentage:PropTypes.number.isRequired
}

export default StatisticsList;

