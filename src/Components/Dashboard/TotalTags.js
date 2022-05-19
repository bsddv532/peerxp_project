import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './Dashboard.module.css'


const TotalTags = () => {

    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d").then(response => {
            setTags(response.data.tags)
        })
    }, [tags])

    let totaltag = tags.length

    return (
        <div className={Styles.dataContainer}>
            <p className={Styles.p1}>Total Tag</p>
            <p className={Styles.p2}>{totaltag}</p>
        </div>
    )
}

export default TotalTags