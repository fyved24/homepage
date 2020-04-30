import React from 'react'
import styles from './style.module.css'

export default function Footer() {
    return (
        <footer  >
            <div className={styles.beian}>

                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41010202002837" rel="noopener noreferrer" target="_blank">豫公网安备 41010202002837号</a>
                <p>
                Copyright © 2018-2020 ironz.cn | <a href="http://www.beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">豫ICP备20004176号-1</a>
                </p>
            </div>

        </footer>
    )
}
