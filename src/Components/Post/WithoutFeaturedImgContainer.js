import React, { useState } from 'react'
import Styles from './PostPage.module.css'

const WithoutFeaturedImgContainer = ({ post }) => {

    const [DATA, setDATA] = useState();

    return (
        <div className={Styles.MetaContainer}>
            <h3>Without Featured Description</h3>

            <div className={Styles.subContainer}>
                {
                    post.filter(
                        (data) => data.feature_image == null
                    ).map((data, index) =>
                        setDATA(data)
                    )
                }

                {DATA ? DATA : `AWESOME !! NO POSTS FOUND`}
            </div>
        </div>
    )
}

export default WithoutFeaturedImgContainer