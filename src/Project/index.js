import React from 'react'
import styles from './style.module.css'
import classNames from 'classnames'
export default function Project({ children }) {
    return (
        <a href="https://github.com">
            <button className={classNames(styles.button)}>{children}</button>
        </a>

    )
}
