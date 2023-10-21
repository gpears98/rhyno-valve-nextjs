import styles from './styles/sales.module.css';

export default function SalesCard() {
    return (
        <div className={styles.card}>
            <div className={styles.name}>
                <h3>Name</h3>
            <div className={styles.email}>
                <p>Email</p>
            <div className={styles.phone}>
                <p>PhoneNumber</p>
            </div>
            </div>
            </div>
        </div>
    );
}