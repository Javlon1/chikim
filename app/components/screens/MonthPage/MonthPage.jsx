import * as React from 'react';
import styles from './MonthPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';
import { Context } from '../../ui/Context/Context';


const MonthPage = () => {
    const { urlApi, auth_token } = React.useContext(Context);
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth() + 1);
    const [currentDay, setCurrentDay] = React.useState(new Date().getDate());
    const [formattedDate, setFormattedDate] = React.useState(`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`)
    const [chartData, setChartData] = React.useState([]);


    const redColor = chartData.total_amount >= totalPrice ? "red" : ""


    const calculateWidth = (e) => {
        const totalPercentage = (e / totalPrice) * 100;
        return totalPercentage > 100 ? '100%' : `${totalPercentage}%`;
    };

    const handleDateChange = (event) => {
        const { value } = event.target;

        const selectedDate = new Date(value);

        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();

        setCurrentYear(year);
        setCurrentMonth(month);
        setCurrentDay(day);

        setFormattedDate(value)
    };

    const endpointGetL = 'limit';
    const fullUrlL = `${urlApi}/${endpointGetL}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrlL, {
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
    }, [fullUrlL]);

    const endpointGet = 'expense';
    const fullUrl = `${urlApi}/${endpointGet}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const urlWithDate = `${fullUrl}?date=${formattedDate}`;

                const response = await fetch(urlWithDate, {
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
                    setChartData(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }
            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrl, auth_token, formattedDate]);

    return (
        <section className={styles.monthPage}>
            <MyContainer>
                <div className={styles.monthPage__items}>
                    <div className={styles.monthPage__items__name}>
                        <h1 className={styles.monthPage__items__name__title}>Chiqimlar</h1>
                        <span className={styles.monthPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <div className={styles.monthPage__items__price}>
                        <input type="date" value={formattedDate} onChange={handleDateChange} />
                        {
                            chartData.expense_history ? (
                                <h3>{chartData.total_amount}</h3>
                            ) : (
                                <p className={styles.skeletonPrice}></p>
                            )
                        }
                    </div>
                    {
                        chartData.expense_history ? (
                            <div className={styles.monthPage__items__used}>
                                <ul className={styles.monthPage__items__used__list1}>
                                    <li className={styles.monthPage__items__used__list1__item}>
                                        <p>Ishlatildi</p>
                                        <h5>{chartData.total_amount}</h5>
                                    </li>
                                    <li className={styles.monthPage__items__used__list1__item}>
                                        <p>Oylik limit</p>
                                        <h5>{totalPrice}</h5>
                                    </li>
                                </ul>
                                <ul className={styles.monthPage__items__used__list2}>
                                    {
                                        chartData.expense_history?.map((e, i) => (
                                            <li
                                                key={i}
                                                className={styles.monthPage__items__used__list2__item}
                                                style={{
                                                    width: calculateWidth(e.amount),
                                                    backgroundColor: redColor,
                                                }}
                                            ></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : (
                            <p className={styles.skeletonMyCha}></p>
                        )
                    }

                    <div className={styles.monthPage__items__result}>
                        <h3>So’ngi chiqimlar</h3>
                        {
                            chartData.expense_history ? (
                                <ul className={styles.monthPage__items__result__list}>
                                    {
                                        chartData.expense_history?.map((e, i) => (
                                            <li key={i} className={styles.monthPage__items__result__list__item}>
                                                <div>
                                                    <span className={styles.emoji}>{e.category__emoji}</span>
                                                    <span className={styles.etit}>{e.category__title}</span>
                                                </div>
                                                <p>{e.amount}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ) : (
                                <p className={styles.skeletonItem}></p>
                            )
                        }
                    </div>

                </div>
            </MyContainer>
        </section>
    )
}

export default MonthPage;