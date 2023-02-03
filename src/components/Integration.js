import React from 'react'
import styles from './BodyTuple.module.css'
import Bar from './Bar'

function Integration({ data }) {
    return (
        <div className={styles.integration}>
            {data.map((obj, index) => (
                <div className={styles.verticalColumn}><Bar key={index} text={obj.text} color={obj.color} width={obj.width} /></div>
            ))}
        </div>
    )
}

export default Integration