import React from 'react'
import styles from './BodyHeading.module.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function BodyHeading() {
    return (
        <div className={styles.container}>
            <div className={styles.containerPages}>
                <p className={styles.text}>Pages</p>
                <ErrorOutlineIcon />
            </div>
            <div className={styles.containerDesign}>
                <p className={styles.text}>Design</p>
                <ErrorOutlineIcon />
            </div>
            <div className={styles.containerInteraction}>
                <p className={styles.interactionText}>Interactions & Animations</p>
                <ErrorOutlineIcon />
            </div>
            <div className={styles.containerIntegration}>
                <p className={styles.text}>Integration</p>
                <ErrorOutlineIcon />
            </div>
            <div className={styles.containerCost}>
                <p className={styles.text}>Cost</p>
                <ErrorOutlineIcon />
            </div>
        </div>
    )
}

export default BodyHeading