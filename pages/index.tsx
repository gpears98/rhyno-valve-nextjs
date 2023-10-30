import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_div}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>Rhyno Valve Co</h1>
          <p className={styles.description}>Bridging the gap between the customer and manufacturer</p>
        </div>
      </div>
      <div className={styles.industry}>
        <div className={styles.industryHeader}>
          <div className={styles.industryH1}>
            <h1>With over 100 years in Oil and Gas industry, we are ready to provide innovative solutions
              that exceed all expectations.
            </h1>
          </div>
          <div className={styles.industryP}>
            <p>Rhyno Valve Co. is a new company established by people with over 100 years of experience in the oil industry.
              We aim to serve our customers by providing them with the highest customer service and distributing the highest quality valves.
              With our partners in the manufacturing space, we can supply our customers with any sized project or endeavor.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.manufacturers}>
        
      </div>
      <div className={styles.locations}>
        
      </div>
    </main>
  )
}
