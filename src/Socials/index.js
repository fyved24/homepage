import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMailBulk } from '@fortawesome/free-solid-svg-icons'
export default function Socials() {
    return (
        <div className={styles.socials_container}>
            <a href="https://github.com/fyved24"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/fyved24"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://ironz.cn/atom.xml"><FontAwesomeIcon icon={faRss} /></a>
            <a href="mailto:fyved24@163.com"><FontAwesomeIcon icon={faMailBulk} /></a>
        </div>
    )
}
