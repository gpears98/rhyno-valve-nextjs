"use client";
import React, { useState, useEffect } from 'react';
import styles from './styles/header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.container} ${scrolled ? styles.scrolled : styles.top}`}>
            <div className={styles.logo}>
                <Image 
                src='/rhyno-logo.png'
                alt='Logo'
                width={225}
                height={75}>
                </Image>
            </div>
            <div className={styles.nav}>
                <Link href="/"><span>About</span></Link>
                <Link href="/"><span>Locations</span></Link>
                <Link href='/newspage'><span>Company News</span></Link>
                <Link href="/"><span>Contact</span></Link>
            </div>
        </div>
    );
}