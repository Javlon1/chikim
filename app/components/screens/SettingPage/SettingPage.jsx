import * as React from 'react';
import styles from './SettingPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';


const SettingPage = () => {

    return (
        <section className={styles.settingPage}>
            <MyContainer>
                <div className={styles.settingPage__items}>
                    <div className={styles.settingPage__items__name}>
                        <h2 className={styles.settingPage__items__name__title}>Sozlamalar</h2>
                        <span className={styles.settingPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <h3>Limit belgilash</h3>
                    <form action="#" method="post">
                        <input
                            type="text"
                            placeholder='Bu oy uchun limitni kiriting'
                        />
                        <button>Saqlash</button>
                    </form>
                    <h3>Turkum qo’shish</h3>
                    <form action="#" method="post">
                        <input
                            type="text"
                            placeholder='Turkum nomi'
                        />
                        <input
                            type="text"
                            placeholder='Icon'
                        />
                        <button>Saqlash</button>
                    </form>
                    <h3>Kirish kodini o’zgartirish</h3>
                    <form action="#" method="post">
                        <input
                            type="text"
                            placeholder='Eski kod'
                        />
                        <input
                            type="text"
                            placeholder='Yangi kod'
                        />
                        <button>Saqlash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default SettingPage;