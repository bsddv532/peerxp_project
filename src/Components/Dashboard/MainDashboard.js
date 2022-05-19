import React from 'react'
import Chart from './Chart'
import Styles from './Dashboard.module.css'
import TotalAuthors from './TotalAuthors'
import TotalPages from './TotalPages'
import TotalPost from './Totalpost'
import TotalTags from './TotalTags'

const MainDashboard = () => {
  return (
    <div>
      <div className={Styles.TotalDataContainer}>
        <TotalPost />
        <TotalPages />
        <TotalAuthors />
        <TotalTags />
      </div>
      <Chart/>
      
    </div>
  )
}

export default MainDashboard