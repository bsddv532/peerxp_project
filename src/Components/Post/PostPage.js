import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Styles from './PostPage.module.css'
import WithoutMetaContainer from './WithoutMetaContainer'
import ToLongMetaContainer from './ToLongMetaContainer'
import ToLongURLContainer from './ToLongURLContainer'
import ToShortPostsContainer from './ToShortPostsContainer'
import WithoutFeaturedImgContainer from './WithoutFeaturedImgContainer'
import TooLongPostContainer from './TooLongPostContainer'

const PostPage = () => {

  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d")
      .then((res) => setPost(res.data.posts))
  }, [])


  return (
    <div className={Styles.postPageContainer}>

      <WithoutMetaContainer post={post} />
      <ToLongMetaContainer post={post} />
      <ToLongURLContainer post={post} />
      <WithoutFeaturedImgContainer post={post} />
      <ToShortPostsContainer post={post} />
      <TooLongPostContainer post={post} />
    </div>
  )
}

export default PostPage