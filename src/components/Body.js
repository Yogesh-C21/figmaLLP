import React from 'react'
import BodyTuple from './BodyTuple'
import BodyHeading from './BodyHeading'
import styles from './Body.module.css'

function Body() {
    return (
        <div className={styles.mainBody}>
            <BodyHeading />
            <BodyTuple />
        </div>
    )
}

export default Body