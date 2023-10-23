import style from '@/styles/compDev.module.css'
import SalesCard from '@/components/cards/sales';

export default function compDev() {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.component}>
                    <SalesCard id={1}></SalesCard>
                </div>
            </div>
        </main>
    );
}