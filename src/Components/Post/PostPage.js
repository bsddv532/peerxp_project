import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './PostPage.module.css'

const PostPage = () => {
  
  const [post, setPost] = useState([])

  useEffect(()=>{
    axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d")
    .then((res)=> setPost(res.data.posts))
  },[])


  return (
    <div className={Styles.postPageContainer}>
      huiyhui
      
    </div>
  )
}

export default PostPage