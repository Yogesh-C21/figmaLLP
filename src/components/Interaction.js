import React from 'react'
import Bar from './Bar'
import styles from './BodyTuple.module.css'

function Interaction({ data }) {
    return (
        <div className={styles.interaction}>
            {data.map((obj, index) => (
                <div className={styles.verticalColumn}><Bar key={index} text={obj.text} color={obj.color} width={obj.width} /></div>
            ))}
        </div>
    )
}

export default Interaction