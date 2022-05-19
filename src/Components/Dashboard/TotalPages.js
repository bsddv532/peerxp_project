import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './Dashboard.module.css'

const TotalPages = () => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d")
            .then((res) => setPages(res.data.pages))
    }, [pages])

    let totalpage = pages.length

    return (
        <div className={Styles.dataContainer}>
            <p className={Styles.p1}>Total Page</p>
            <p className={Styles.p2}>{totalpage}</p>
        </div>
    )
}

export default TotalPages