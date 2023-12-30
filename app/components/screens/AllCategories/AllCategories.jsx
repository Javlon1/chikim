import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './AllCategories.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const AllCategories = () => {
    const [totalPrice, setTotalPrice] = React.useState(545)
    const [chartData, setChartData] = React.useState([
        { emoji: "👕", title: "Kiyim kechak", price: 250 },
        { emoji: "🚕", title: "Taxi", price: 100 },
        { emoji: "🍰", title: "Ovqat uchun", price: 70 },
    ]);


    const totalSum = chartData.reduce((sum, item) => sum + item.price, 0);
    const redColor = totalSum >= totalPrice ? "red" : ""

    const calculateWidth = (e) => {
        const totalPercentage = (e / totalPrice) * 100;
        return totalPercentage > 100 ? '100%' : `${totalPercentage}%`;
    };

    return (
        <section className={styles.allCategories}>
            <MyContainer>
                <div className={styles.allCategories__items}>
                    <div className={styles.allCategories__items__name}>
                        <h2 className={styles.allCategories__items__name__title}>Chiqimlar</h2>
                        <span className={styles.allCategories__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <div className={styles.allCategories__items__used}>
                        <ul className={styles.allCategories__items__used__list1}>
                            <li className={styles.allCategories__items__used__list1__item}>
                                <p>Ishlatildi</p>
                                <h5>{totalSum}</h5>
                            </li>
                            <li className={styles.allCategories__items__used__list1__item}>
                                <p>Oylik limit</p>
                                <h5>{totalPrice}</h5>
                            </li>
                        </ul>
                        <ul className={styles.allCategories__items__used__list2}>
                            {
                                chartData?.map((e, i) => (
                                    <li
                                        key={i}
                                        className={styles.allCategories__items__used__list2__item}
                                        style={{
                                            width: calculateWidth(e.price),
                                            backgroundColor: redColor,
                                        }}
                                    ></li>
                                ))
                            }
                        </ul>
                    </div>
                    <h3 className={styles.allCategories__items__title}>Turkumlar</h3>

                    <div className={styles.allCategories__items__result}>
                        <ul className={styles.allCategories__items__result__list}>
                            {
                                chartData?.map((e, i) => (
                                    <li key={i} className={styles.allCategories__items__result__list__item}>
                                        <div>
                                            <span className={styles.emoji}>{e.emoji}</span>
                                            <span className={styles.etit}>{e.title}</span>
                                        </div>
                                        <p>{e.price} ta</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default AllCategories;