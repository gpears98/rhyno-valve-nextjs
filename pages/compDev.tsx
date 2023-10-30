import style from '@/styles/compDev.module.css'
import Manufacturer from '@/components/cards/manufacturer';

export default function compDev() {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.component}>
                    <Manufacturer title='Test' link='/' imageURL='/rhyno-icon.png'></Manufacturer>
                </div>
            </div>
        </main>
    );
}