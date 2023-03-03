import React from "react"
import { Link } from "react-router-dom"

import styles from './First.module.scss'
import Button from "../../../components/Button"

const First = () => {

    return (
        <div className={styles.div}>
            <div className="h5 mt_200"></div>
            <div className="h2 h2_sm mt_15">NFT University Press NFTBook Minter</div>
            <a href="#wallet">
                <Button value="Create your NFT"
                    style={{ width: 228, height: 56, marginTop: 50, marginLeft: 'auto', marginRight: 'auto' }}
                    white />
            </a>
            <img className={styles.pageDao} src='/assets/page_dao.png' alt="page_dao" />
            <div className="h4">Create your NFT </div>
            <div className={styles.text}>
                <div className="body_1">
                    The NFTBook Minter is designed to create NFT Books
                </div>
            </div>
            <Link to="#" className="mt_20 body_1">Get started now.</Link>
        </div>
    )
}

export default First
