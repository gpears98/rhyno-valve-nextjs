import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_div}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>Rhyno Valve Co</h1>
          <p className={styles.description}>Our purpose is to bridge the gap between the customer and the manufacturer</p>
        </div>
      </div>
      <div className={styles.manufacturers}>
        
      </div>
      <div className={styles.locations}>
        
      </div>
    </main>
  )
}
