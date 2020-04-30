import React from 'react'
import styles from './style.module.css'
import classNames from 'classnames'
export default function Project({ children, href }) {
    return (
        <a href={href}>
            <button className={classNames(styles.button)}>{children}</button>
        </a>

    )
}
