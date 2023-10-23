import styles from './styles/sales.module.css';
import { useEffect, useState } from 'react';
import { readCSV } from '@/utils/readCSV';

interface salesProp {
    id: number;
}

export default function SalesCard({ id }: salesProp) {
    const [person, setPerson] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await readCSV('/salesinfo.csv');
            const info = data.find((p: any) => p.ID === id);
            setPerson(info);
        };

        fetchData();   
    }, [id]);

    if (!person) {
        return <div>Loading or person not found...</div>
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <h3>{person.Title}</h3>
            </div>
            <div className={styles.name}>
                <h3>{person.Name}</h3>
            </div>
            <div className={styles.contact}>
                <div className={styles.email}>
                    <p>{person.Email}</p>
                </div>
                <div className={styles.phone}>
                    <p>{person.PhoneNumber}</p>
                </div>
            </div>
        </div>
    );
}