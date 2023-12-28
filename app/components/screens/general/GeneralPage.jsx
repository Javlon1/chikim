import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './GeneralPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const GeneralPage = ({ initialChecked = false }) => {
    const [checked, setChecked] = React.useState(initialChecked);

    const handleToggle = () => {
        setChecked(!checked);
        onToggle(!checked);
    };

    const onToggle = (isChecked) => {
        console.log(isChecked);
    };  

    return (
        <section className={styles.generalPage}>
            <MyContainer>
                <div className={styles.generalPage__items}>
                    <div className={styles.generalPage__items__name}>
                        <h2 className={styles.generalPage__items__name__title}>Umumiy statistika</h2>
                        <span className={styles.generalPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <div className={styles.generalPage__items__dataFilter} onClick={handleToggle}>
                        <input type="checkbox" checked={checked} readOnly className={styles.generalPage__items__dataFilter__checkbox} />
                        <div className={styles.generalPage__items__dataFilter__slider}>
                            <span>Oylar</span>
                            <span>Kunlar </span>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default GeneralPage;