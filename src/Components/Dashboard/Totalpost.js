import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styles from './Dashboard.module.css'

const TotalPost = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d")
            .then((res) => setData(res.data.posts))
    }, [data])

    // console.log(data)
    let totalpost = data.length;

    return (
        <div className={Styles.dataContainer}>
            <p className={Styles.p1}>Total Post</p>
            <p className={Styles.p2}>{totalpost}</p>
        </div>
    )
}

export default TotalPost