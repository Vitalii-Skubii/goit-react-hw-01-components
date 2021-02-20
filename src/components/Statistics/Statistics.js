import React from 'react'

import StatisticsList from './StatisticsList'
import style from './Statistics.module.css'

const Statistics = ({items}) => {
    return (
       <section className={style.statistics}>
            <h2 className={style.title}>Upload data</h2>

            <StatisticsList items={items}/>
  </section>
   ) 
}

export default Statistics