import React from 'react'
import Styles from './PostPage.module.css'


const WithoutMetaContainer = ({ post }) => {
    return (

        <div className={Styles.MetaContainer}>
        <h3>Without Meta Description</h3>

        <div className={Styles.subContainer}>
            {
                post.filter(
                    (data) => data.meta_description == null
                ).map((data, index) =>

                    <p key={index}>{data.title}</p>

                )
            }
            </div>
        </div>
    )
}

export default WithoutMetaContainer