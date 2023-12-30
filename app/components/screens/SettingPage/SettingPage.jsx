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

                </div>
            </MyContainer>
        </section>
    )
}

export default SettingPage;