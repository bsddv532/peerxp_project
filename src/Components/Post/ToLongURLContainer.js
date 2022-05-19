import React, { useState } from 'react'
import Styles from './PostPage.module.css'

const ToLongURLContainer = ({post}) => {

    const[DATA, setDATA] = useState();
    return (
        <div className={Styles.MetaContainer}>
            <h3>TOO LONG URL, MORE THAN 100 CHARS</h3>

            <div className={Styles.subContainer}>
                {
                    post.filter(
                        (data) => data.url.length >= 100
                    ).map((data, index) =>
                        setDATA(data)
                    )
                }

                { DATA ? DATA : `AWESOME !! NO POSTS FOUND`}
            </div>
        </div>
    )
}

export default ToLongURLContainer