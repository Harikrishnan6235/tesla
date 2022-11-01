import React from 'react'
import styles from "../styles/Home.module.css"
import Header from './Header'
import { FaChevronDown } from "react-icons/fa";
import Footer from './Footer';


function index() {



  return (
    <div className={styles.main}>
      <Header/>


      <div className={styles.content}>


        <div className={styles.namediv}>
          <h1 className={styles.modelname}>Model 3</h1>
          <h1 className={styles.message}>Order Online for Touchless Delivery</h1>
        </div>
        <div className={styles.buttons}>
          <div className={styles.orderdiv}>
            <h1 className={styles.custom}>Custom Order</h1>
          </div>
          <div className={styles.inventory}>Existing Inventory</div>
        </div>
        <div className={styles.down}>
          <FaChevronDown size={25}/>
        </div>
      </div>


      <div className={styles.content2}>


      <div className={styles.namediv2}>
          <h1 className={styles.modelname2}>Model Y</h1>
          <h1 className={styles.message2}>Order Online for Touchless Delivery</h1>
        </div>
        <div className={styles.buttons2}>
          <div className={styles.orderdiv2}>
            <h1 className={styles.custom2}>Custom Order</h1>
          </div>
          <div className={styles.inventory2}>Existing Inventory</div>
        </div>
        
      </div>

      <div className={styles.content3}>


<div className={styles.namediv3}>
    <h1 className={styles.modelname3}>Model S</h1>
    <h1 className={styles.message3}>Order Online for Touchless Delivery</h1>
  </div>
  <div className={styles.buttons3}>
    <div className={styles.orderdiv3}>
      <h1 className={styles.custom3}>Custom Order</h1>
    </div>
    <div className={styles.inventory3}>Existing Inventory</div>
  </div>
  
</div>

<div className={styles.content4}>


<div className={styles.namediv4}>
    <h1 className={styles.modelname4}>Model X</h1>
    <h1 className={styles.message4}>Order Online for Touchless Delivery</h1>
  </div>
  <div className={styles.buttons4}>
    <div className={styles.orderdiv4}>
      <h1 className={styles.custom4}>Custom Order</h1>
    </div>
    <div className={styles.inventory4}>Existing Inventory</div>
  </div>
  
</div>

<div className={styles.content5}>


<div className={styles.namediv5}>
    <h1 className={styles.modelname5}>Solar Panels</h1>
    <h1 className={styles.message5}>Lowest Cost Solar Panels In America</h1>
  </div>
  <div className={styles.buttons5}>
    <div className={styles.orderdiv5}>
      <h1 className={styles.custom5}>Order Now</h1>
    </div>
    <div className={styles.inventory5}>Learn More</div>
  </div>
  
</div>

<div className={styles.content6}>


<div className={styles.namediv6}>
    <h1 className={styles.modelname6}>Solar Roof</h1>
    <h1 className={styles.message6}>Produce Clean Energy From Your Roof</h1>
  </div>
  <div className={styles.buttons6}>
    <div className={styles.orderdiv6}>
      <h1 className={styles.custom6}>Order Now</h1>
    </div>
    <div className={styles.inventory6}>Learn More</div>
  </div>
  
</div>

<div className={styles.content7}>


<div className={styles.namediv7}>
    <h1 className={styles.modelname7}>Accessories</h1>
  </div>
  <div className={styles.buttons7}>
    <div className={styles.orderdiv7}>
      <h1 className={styles.custom7}>Shop Now</h1>
    </div>
  </div>
  
<Footer/>
</div>


    </div>
  )
}

export default index