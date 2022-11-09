import React from 'react'
import Header from '../components/Header'
import styles from "../styles/models.module.css"
import ReactPlayer from 'react-player'


function models() {
  return (
    <div className={styles.main}>

        <div className={styles.page1}>
        <Header iffixed={false}/>

        <div className={styles.namediv}>
    <h1 className={styles.modelname}>Model S</h1>
    <h1 className={styles.message}>Plaid</h1>
  </div>
  <div className={styles.bottomdiv}>
    <div className={styles.features}>

      <div className={styles.mileagediv}>
        <h1 className={styles.mileage}>396 mi</h1>
        <h1 className={styles.range}>Range (EPA est.)</h1>
      </div>
      <div className={styles.timediv}>
        <h1 className={styles.time}>1.99 s</h1>
        <h1 className={styles.speedrange}>0-60 mph</h1>
      </div>
      <div className={styles.speeddiv}>
        <h1 className={styles.speed}>200 mph</h1>
        <h1 className={styles.topspeed}>Top Speed</h1>
      </div>
      <div className={styles.powerdiv}>
        <h1 className={styles.hp}>1,020 hp</h1>
        <h1 className={styles.peakpower}>Peak Power</h1>
      </div>
      <div className={styles.order}>
      <h1 className={styles.ordernow}>Order Now</h1>
    </div>
    </div>
   
    <div className={styles.chatdiv}>
      <img className={styles.chat} src="/message.png" alt="" />
    </div>
  </div>
  <div className={styles.gradientdiv}>

  </div>
  </div>

<div className={styles.link1}>
  <h1 className={styles.inttitle}>Interior of the Future</h1>

</div>

  <div className={styles.page2}>

  </div>


  <div className={styles.page3}>
    <div className="videodiv3">
    <video className={styles.video4} autoPlay  src={"/sintvideo.mp4"}/>
    </div>
  </div>


  <div className={styles.page4}>
    <div className={styles.page4contents}>
    <div className={styles.topdiv4}></div>
    <div className={styles.bottomdiv4}>
      <div className={styles.sintpic}></div>
      <div className={styles.connected}>
        <h1 className={styles.stayconnected}>Stay Connected</h1>
        <p className={styles.paraconnected}>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
      </div>
    </div>
    </div>
  </div>

  <div className={styles.page5}>
    <div className={styles.page5contents}>
    <div className={styles.topdiv5}>
      <div className={styles.topleft5}>
        <h1 className={styles.immersivesound}>Immersive Sound</h1>
        <h1 className={styles.sounddefinition}>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</h1>
      </div>
      <div className={styles.topright5}></div>
    </div>
    <div className={styles.bottomdiv5}>
      <div className={styles.bottomleft5}></div>
      <div className={styles.bottomright5}>
        <h1 className={styles.roomforeverything}>Room for Everything</h1>
        <h1 className={styles.roomdefinition}>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off-and your luggage too.</h1>
      </div>
    </div>
    </div>

  </div>

  <div className={styles.page6}>
    <div className={styles.topdiv6}>
      <div className={styles.peakpowerdiv6}>
      <h1 className={styles.peakvalue6}>1,020 hp</h1>
      <h1 className={styles.peakpower6}>Peak Power</h1>
      </div>

      <div className={styles.milediv6}>
      <h1 className={styles.speedtime6}>9.23s</h1>
      <h1 className={styles.miledetails6}>@155 mph 1/4 mile</h1>
      </div>

      <div className={styles.timediv6}>
      <h1 className={styles.time6}>1.99s</h1>
      <h1 className={styles.speed6}>0-60 mph</h1>
      </div>

    </div>
    <div className={styles.bottomdiv6}>
      <div className={styles.bottomleftdiv6}>
        <h1 className={styles.plaid6}>Plaid</h1>
        <h1 className={styles.beyondludicrous}>Beyond Ludicrous</h1>
        <div className={styles.orderdiv6}>
          <h1 className={styles.ordernow6}>Order Now</h1>
        </div>
      </div>
      <div className={styles.bottomrightdiv6}></div>
    </div>
  </div>

    </div>
  )
}

export default models