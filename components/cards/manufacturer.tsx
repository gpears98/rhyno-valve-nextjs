import styles from './styles/manufacturer.module.css'
import Link from 'next/link';
import Image from 'next/image';

interface ManufacturerProps {
    imageURL: string;
    title: string;
    link: string;
}

export default function Manufacturer({ imageURL, title, link }: ManufacturerProps) {
    return (
        <Link href={link}>
            <div className={styles.card}>
                <div className={styles.name}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.image}>
                    <Image
                        src={imageURL}
                        alt='logo'
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </Link>
    );
}