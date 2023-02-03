import React from 'react'
import styles from './BodyTuple.module.css'
import Design from './Design';
import Interaction from './Interaction';
import Integration from './Integration';
import { tupleData } from './tupleData'

function BodyTuple() {
    return (
        <div className={styles.bodyTuple}>
            <div className={styles.pages}>
                <div className={styles.verticalColumnTitle}><p className={styles.pagesTitlesNo}>01.</p>
                    <p className={styles.pagesTitle}>Home</p></div>
                <div className={styles.verticalColumnTitle}><p className={styles.pagesTitlesNo}>02.</p>
                    <p className={styles.pagesTitle}>Service</p></div>
                <div className={styles.verticalColumnTitle}><p className={styles.pagesTitlesNo}>03.</p>
                    <p className={styles.pagesTitle}>About Us</p></div>
                <div className={styles.verticalColumnTitle}><p className={styles.pagesTitlesNo}>04.</p>
                    <p className={styles.pagesTitle}>Partners</p></div>
                <div className={styles.verticalColumnTitle}><p className={styles.pagesTitlesNo}>05.</p>
                    <p className={styles.pagesTitle}>Contact Us</p></div>
            </div>
            <Design data={tupleData[0]}/>
            <Interaction data={tupleData[1]}/>
            <Integration data={tupleData[2]}/>
            <div className={styles.cost}>
                <div className={styles.verticalColumnCost}>$200</div>
                <div className={styles.verticalColumnCost}>$200</div>
                <div className={styles.verticalColumnCost}>$200</div>
                <div className={styles.verticalColumnCost}>$200</div>
                <div className={styles.verticalColumnCost}>$200</div>
            </div>

        </div>
    )
}

export default BodyTuple