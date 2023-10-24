import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/footer.module.css'

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.office}>
                    <h3>Kemah Office</h3>
                    <p>1005 Windfield Lane</p>
                    <p>Kemah, Texas 77565</p>
                </div>
                <div className={styles.tabs}>
                    <Link href="/"><span>About</span></Link>
                    <Link href="/"><span>Locations</span></Link>
                    <Link href='/newspage'><span>Company News</span></Link>
                    <Link href="/"><span>Contact</span></Link>
                </div>
            </div>
            <div className={styles.icon}>
                <Link href='/'>
                    <Image 
                        src='/rhyno-icon.png'
                        alt='Rhyno Icon'
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
            <div className={styles.social}>
                <div className={styles.socialIcon}>    
                    <Link href='/'>
                        <Image
                            src='/facebook.png'
                            alt='Facebook icon'
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
                <div className={styles.socialIcon}>    
                    <Link href='/'>
                        <Image
                            src='/linkedin.png'
                            alt='LinkedIn icon'
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
                <div className={styles.socialIcon}>    
                    <Link href='/'>
                        <Image
                            src='/instagram.png'
                            alt='Instagram icon'
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}