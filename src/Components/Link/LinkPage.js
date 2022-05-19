import React, { useState, useEffect } from 'react'
import Styles from './Link.module.css'
import axios from 'axios'

const LinkPage = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d")
      .then((res) => setPost(res.data.posts))
  }, [])



  return (
    <div className={Styles.LinkContainer}>

      <div className={Styles.InternalLinkContainer}>
        <p className={Styles.p1}>BROKEN INTERNAL LINKS</p>

        {
          post.filter(
            (data) => data.url
          ).map((data, index) =>
            <p key={index} className={Styles.p2}>{data.url}</p>
          )
        }
      </div>

    </div>
  )
}

export default LinkPage