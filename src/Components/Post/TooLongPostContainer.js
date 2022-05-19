import React, {useState} from 'react'
import Styles from './PostPage.module.css'


function getWordCount(str) {
  return str.split(' ')
    .filter(function (n) { return n !== '' })
    .length;
}


const TooLongPostContainer = ({ post }) => {

  const[DATA, setDATA] = useState();

  return (
    <div className={Styles.MetaContainer}>
      <h3>TOO LONG POST MORE THAN 1500 WORDS</h3>

      <div className={Styles.subContainer}>
        {
          post.filter(
            (data) => getWordCount(data.excerpt) > 1500
          ).map((data, index) =>
            setDATA(data)
          )
        }

        {DATA ? DATA : `AWESOME !! NO POSTS FOUND`}

      </div>
    </div>
  )
}

export default TooLongPostContainer