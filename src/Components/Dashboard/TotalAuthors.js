import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './Dashboard.module.css'

const TotalAuthors = () => {

    const[authors,setAuthors]=useState([])

    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d")
        .then((res)=> setAuthors(res.data.authors))
    },[authors])
  
    let totalauthor = authors.length

    return (
        <div className={Styles.dataContainer}>
            <p className={Styles.p1}>Total Author</p>
            <p className={Styles.p2}>{totalauthor}</p>
        </div>
    )
}

export default TotalAuthors