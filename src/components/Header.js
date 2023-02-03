import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerPageNumber}>
                <p className={styles.headerPageNumberNumber}>5</p>
                <p className={styles.headerPageNumberText}>Pages</p>
            </div>
            <div className={styles.headerCost}>
                <div className={styles.headerCostOne}>
                    <p className={styles.headerCostLineOne}>$300</p>
                    <p className={styles.headerCostLineTwo}>Page Design</p>
                </div>
                <div className={styles.headerCostTwo}>
                    <p className={styles.headerCostLineOne}>$200</p>
                    <p className={styles.headerCostLineTwo}>Interactions & Animations</p>
                </div>
                <div className={styles.headerCostThree}>
                    <p className={styles.headerCostLineOne}>$100</p>
                    <p className={styles.headerCostLineTwo}>CMS / Dynamic Data / Integrations</p>
                </div>
            </div>
            <div className={styles.headerSubTotalContainer}>
                <p className={styles.subTotal}>Sub Total</p>
                <p className={styles.subTotalAmount}>$800</p>
            </div>
        </div>
    )
}

export default Header