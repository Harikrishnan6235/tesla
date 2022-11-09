import React from 'react'
import styles from "../styles/Header.module.css"

function Header({iffixed=true}) {
  return (
    <header  className={iffixed===true?styles.headerfixed:styles.headerabs}>
      <div className={styles.icondiv}>
        <img className={styles.icon} src="/teslalogo.png" alt="" />
      </div>
      <div className={styles.modeldiv}>
        <h1 className={styles.s}>Model S</h1>
        <h1 className={styles.three}>Model 3</h1>
        <h1 className={styles.x}>Model X</h1>
        <h1 className={styles.y}>Model Y</h1>
        <h1 className={styles.solarroof}>Solar Roof</h1>
        <h1 className={styles.solarpanel}>Solar Panels</h1>
      </div>
      <div className={styles.elements}>
        <h1 className={styles.shop}>Shop</h1>
        <h1 className={styles.account}>Account</h1>
        <h1 className={styles.menu}>Menu</h1>
      </div>

    </header>
  )
}

export default Header