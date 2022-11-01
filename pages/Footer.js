import React from 'react'
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.infos}>
            <div className={styles.compyear}>
            <h1 className={styles.compname}>Tesla</h1>
            <img className={styles.c} src="/c.png" alt="" />
            <h1 className={styles.year}>2022</h1>
            </div>
            <h1 className={styles.privacy}>Privacy & Legal</h1>
            <h1 className={styles.vehicle}>Vehicle Recalls</h1>
            <h1 className={styles.contact}>Contact</h1>
            <h1 className={styles.careers}>Careers</h1>
            <h1 className={styles.news}>News</h1>
            <h1 className={styles.engage}>Engage</h1>
            <h1 className={styles.locations}>Locations</h1>

        </div>
    </div>
  )
}

export default Footer