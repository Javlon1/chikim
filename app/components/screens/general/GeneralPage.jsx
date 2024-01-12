import * as React from 'react';
import Link from 'next/link'
import styles from './GeneralPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Context } from '../../ui/Context/Context';
import PieChart from '../../ui/Chart/Chart';

const GeneralPage = ({ initialChecked = false }) => {
    const { urlApi, auth_token } = React.useContext(Context);
    const [checked, setChecked] = React.useState(initialChecked);

    const [selectedDay, setSelectedDay] = React.useState(new Date().getDate());
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedYear] = React.useState(new Date().getFullYear());

    const [formattedDate, setFormattedDate] = React.useState(`${selectedYear}-${selectedMonth + 1}-${selectedDay}`)

    const [monthData] = React.useState([{ id: 0, month: "Yanvar" }, { id: 1, month: "Fevral" }, { id: 2, month: "Mart" }, { id: 3, month: "Aprel" }, { id: 4, month: "May" }, { id: 5, month: "Iyun" }, { id: 6, month: "Iyul" }, { id: 7, month: "Avgust", }, { id: 8, month: "Sentabr" }, { id: 9, month: "Oktabr" }, { id: 10, month: "Noyabr" }, { id: 11, month: "Dekabr" }]);
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [chartData, setChartData] = React.useState([]);
    const [expense, setExpense] = React.useState([]);

    // 
    const endpointGet = 'limit';
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
    }, [fullUrl, formattedDate]);

    // 

    const endpointGetAll = 'all_expense';
    const fullUrlAll = `${urlApi}/${endpointGetAll}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const urlWithDate = `${fullUrlAll}?date=${formattedDate}`;

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
    }, [fullUrlAll, formattedDate]);

    // 

    const endpointGetexpense = 'expense';
    const fullUrlexpense = `${urlApi}/${endpointGetexpense}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                const urlWithDate = `${fullUrlexpense}?date=${formattedDate}`;

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
                    setExpense(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }
            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrl, auth_token, formattedDate]);
    // 

    const handleToggle = () => {
        setChecked(!checked);
    };

    const daysInMonth = (year, month) => {
        const date = new Date(year, month + 1, 0);
        return date.getDate();
    };

    const daysInSelectedMonth = daysInMonth(selectedYear, selectedMonth);

    const handleDayChange = (day) => {
        setSelectedDay(day);
        setFormattedDate(`${selectedYear}-${selectedMonth + 1}-${day}`)
    };

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
        setFormattedDate(`${selectedYear}-${month + 1}-${selectedDay}`)
    };

    const calculateWidth = (e) => {
        const totalPercentage = (e / totalPrice) * 100;
        return totalPercentage > 100 ? '100%' : `${totalPercentage}%`;
    };

    const redColor = chartData.length > 0 && chartData[0].total_category_amount >= totalPrice ? "red" : "";


    const chartDataWithPercentage = chartData.map(item => ({
        ...item,
        percentage: (item.total_amount / chartData[0].total_category_amount) * 100,
    }));
    
    return (
        <section className={styles.generalPage}>
            <MyContainer>
                <div className={styles.generalPage__items}>

                    <div className={styles.generalPage__items__name}>
                        <h1 className={styles.generalPage__items__name__title}>Umumiy statistika</h1>
                        <span className={styles.generalPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>

                    <div className={styles.generalPage__items__dataFilter}>
                        <input type="checkbox" checked={checked} readOnly className={styles.generalPage__items__dataFilter__checkbox} />
                        <div onClick={handleToggle} className={styles.generalPage__items__dataFilter__slider}>
                            <span className={!checked ? `${styles.slideract}` : ""}>Oylar</span>
                            <span className={checked ? `${styles.slideract}` : ""}>Kunlar</span>
                        </div>
                        <ul className={`${styles.generalPage__items__dataFilter__month} ${!checked ? `${styles.dataAct}` : ""}`}>
                            {
                                monthData?.map((e) => (
                                    <li
                                        key={e.id}
                                        onClick={() => {
                                            handleMonthChange(e.id)
                                            setSelectedDay(1)
                                        }}
                                        className={`${styles.generalPage__items__dataFilter__month__item} ${selectedMonth === e.id ? `${styles.dateact}` : ""}`}
                                    >
                                        <p>{e.month}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className={`${styles.generalPage__items__dataFilter__day} ${checked ? `${styles.dataAct}` : ""}`}>
                            {Array.from({ length: daysInSelectedMonth }, (_, i) => i + 1).map((day) => (
                                <li onClick={() => handleDayChange(day)} className={`${styles.generalPage__items__dataFilter__month__item} ${selectedDay === day ? `${styles.dateact}` : ""}`} key={day}>
                                    <p>{day}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.generalPage__items__Iprice}>
                        <ul className={styles.generalPage__items__Iprice__list}>
                            {
                                chartData.length > 0 ? (
                                    <>
                                        <li>{selectedDay}</li>
                                        {
                                            monthData?.map((e) => (
                                                <li onClick={() => handleMonthChange(e.id)} key={e.id} className={`${styles.generalPage__items__Iprice__list__mon} ${selectedMonth === e.id ? `${styles.monact}` : ""}`}>
                                                    <p>{e.month}</p>
                                                </li>
                                            ))
                                        }
                                        <li>-</li>
                                        <li>{selectedYear}</li>
                                        <li>uchun chiqimlar</li>
                                    </>
                                ) : (
                                    <p className={styles.skeletonYears}></p>
                                )
                            }
                        </ul>
                        <div className={styles.generalPage__items__Iprice__price}>
                            {
                                chartData.length > 0 ? (
                                    <p>{expense.total_amount}</p>
                                ) : (
                                    <p className={styles.skeletonPrice}></p>
                                )
                            }
                        </div>
                    </div>

                    {
                        chartData.length > 0 ? (
                            <div className={styles.generalPage__items__used}>
                                <ul className={styles.generalPage__items__used__list1}>
                                    <li className={styles.generalPage__items__used__list1__item}>
                                        <p>Ishlatildi</p>
                                        <h5>{chartData && chartData[0] ? chartData[0].total_category_amount : ''}</h5>
                                    </li>
                                    <li className={styles.generalPage__items__used__list1__item}>
                                        <p>Oylik limit</p>
                                        <h5>{totalPrice}</h5>
                                    </li>
                                </ul>
                                <ul className={styles.generalPage__items__used__list2}>
                                    {
                                        chartData?.map((e, i) => (
                                            <li
                                                key={i}
                                                className={styles.generalPage__items__used__list2__item}
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
                            <p className={styles.skeletonMyCh}></p>
                        )
                    }

                    {
                        chartData.length > 0 ? (
                            <div className={styles.generalPage__items__chart}>
                                <p className={styles.generalPage__items__chart__title}>Turkumlar ko’rinishida</p>
                                <div className={styles.generalPage__items__chart__item}>
                                    <PieChart total_amount={chartData.length > 0 ? chartData[0].total_category_amount : 0} data={chartData} />
                                    <ul className={styles.generalPage__items__chart__item__list}>
                                        {chartDataWithPercentage.map((item, index) => (
                                            <li className={styles.generalPage__items__chart__item__list__item} key={index}>
                                                <p>{item.category_emoji}</p>
                                                <p>
                                                    {`${item.percentage.toFixed(2)}%`}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <p className={styles.skeletonCh}></p>
                        )
                    }

                </div>
            </MyContainer>
        </section >
    )
}

export default GeneralPage;