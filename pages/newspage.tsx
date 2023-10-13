import styles from '../styles/Newspage.module.css';
import React from 'react';
import Head from 'next/head';
import LinkedInWidget from '@/components/widget/LinkedInWidget';

export default function News() {
    return (
        <>
            <Head>
                <title>News Page</title>
            </Head>
            
            <main className={styles.main}>
                <LinkedInWidget></LinkedInWidget>
            </main>
        </>
    );
}
