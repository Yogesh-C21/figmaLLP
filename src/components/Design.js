import React from 'react'
import Bar from './Bar'
import styles from './BodyTuple.module.css'

function Design({ data }) {
    return (
        <div className={styles.design}>
            {data.map((obj, index) => (
                <div className={styles.verticalColumn}><Bar
                    key={index}
                    text={obj.text}
                    color={obj.color}
                    width={obj.width}
                /></div>
            ))}
        </div>
    )
}

export default Design