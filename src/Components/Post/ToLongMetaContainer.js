import React from 'react'
import Styles from './PostPage.module.css'


const ToLongMetaContainer = ({ post }) => {
    return (
        <div className={Styles.MetaContainer}>
            <h3>Without Meta Description</h3>

            <div className={Styles.subContainer}>
                {
                    post.filter(
                        (data) => data.meta_description != null && data.meta_description.length >= 150
                    ).map((data, index) =>
                        <p key={index}>{data.title}</p>
                    )
                }
            </div>
        </div>
    )
}

export default ToLongMetaContainer