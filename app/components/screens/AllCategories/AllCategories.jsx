import * as React from 'react';
import Link from 'next/link'
import styles from './AllCategories.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Context } from '../../ui/Context/Context';


const AllCategories = () => {
    const { urlApi, auth_token } = React.useContext(Context);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [chartDataTa, setChartDataTa] = React.useState([]);

    const redColor = chartDataTa.length >= totalPrice ? "red" : "";

    const calculateWidth = (e) => {
        const totalPercentage = (e / totalPrice) * 100;
        return totalPercentage > 100 ? '100%' : `${totalPercentage}%`;
    };

    const endpointGetlimit = 'limit';
    const fullUrllimit = `${urlApi}/${endpointGetlimit}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrllimit, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${auth_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data && data.limit !== undefined) {
                    setTotalPrice(data.limit);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrllimit, auth_token]);

    const endpointGet = 'total_category';
    const fullUrl = `${urlApi}/${endpointGet}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${auth_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (data) {
                    setChartDataTa(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrl, auth_token]);

    return (
        <section className={styles.allCategories}>
            <MyContainer>
                <div className={styles.allCategories__items}>
                    <h1>categories</h1>
                    <div className={styles.allCategories__items__name}>
                        <h2 className={styles.allCategories__items__name__title}>Chiqimlar</h2>
                        <span className={styles.allCategories__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    {
                        chartDataTa.length > 0 ? (
                            <div className={styles.allCategories__items__used}>
                                <ul className={styles.allCategories__items__used__list1}>
                                    <li className={styles.allCategories__items__used__list1__item}>
                                        <p>Ishlatildi</p>
                                        <h5>{chartDataTa && chartDataTa[0] ? chartDataTa[0].total_category_amount : ''}</h5>
                                    </li>
                                    <li className={styles.allCategories__items__used__list1__item}>
                                        <p>Oylik limit</p>
                                        <h5>{totalPrice}</h5>
                                    </li>
                                </ul>
                                <ul className={styles.allCategories__items__used__list2}>
                                    {
                                        chartDataTa?.map((e, i) => (
                                            <li
                                                key={i}
                                                className={styles.allCategories__items__used__list2__item}
                                                style={{
                                                    width: calculateWidth(e.total_amount),
                                                    backgroundColor: redColor,
                                                }}
                                            ></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : (
                            <p className={styles.skeleton}></p>
                        )
                    }

                    <h3 className={styles.allCategories__items__title}>Turkumlar</h3>

                    {
                        chartDataTa.length > 0 ? (
                            <div className={styles.allCategories__items__result}>
                                <ul className={styles.allCategories__items__result__list}>
                                    {
                                        chartDataTa?.map((e, i) => (
                                            <li key={i} className={styles.allCategories__items__result__list__item}>
                                                <div>
                                                    <span className={styles.emoji}>{e.category_emoji}</span>
                                                    <span className={styles.etit}>{e.category_title}</span>
                                                </div>
                                                <p>{e.total_count} ta</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : (
                            <p className={styles.skeleton}></p>
                        )
                    }

                </div>
            </MyContainer>
        </section>
    )
}

export default AllCategories;