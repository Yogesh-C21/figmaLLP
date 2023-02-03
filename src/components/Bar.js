import React from 'react'
import styles from './Bar.module.css'

function Bar({ text, color, width }) {
    const position = "relative";
    let right;
    if (width === '100px') {
        right = "52px";
    } else if (width === '70px') {
        right = "65px";
    } else if (width === '120px') {
        right = "40px";
    }
    return (
        <div className={styles.bar}>
            <div className={styles.minus}>-
            </div>
            <div className={styles.barFill} style={{ backgroundColor: color, width: width, position: position, right: right }}>
                <p className={styles.barFillText} style={{ color: text === 'None' && "#a6a6a6" }}>
                    {text}
                </p>
            </div>
            <div className={styles.plus}>
                +
            </div>
        </div>
    )
}

export default Bar