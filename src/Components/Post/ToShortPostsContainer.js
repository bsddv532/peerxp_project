import React from 'react'
import Styles from './PostPage.module.css'


function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n !== '' })
      .length;
}

const ToShortPostsContainer = ({post}) => {

  return (
    <div className={Styles.MetaContainer}>
            <h3>TOO SHORT POST LESS THAN 250 WORDS</h3>

            <div className={Styles.subContainer}>
                {
                    post.filter(
                        (data) => getWordCount(data.excerpt) < 250
                    ).map((data, index) =>
                    <p key={index}>{data.title}</p>
                    )
                }
            </div>
        </div>
  )
}

export default ToShortPostsContainer