import * as React from 'react';
import styles from './MonthPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';
import { Context } from '../../ui/Context/Context';
import { useRouter } from 'next/router';


const MonthPage = () => {
    const { urlApi, auth_token } = React.useContext(Context);
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth() + 1);
    const [currentDay, setCurrentDay] = React.useState(new Date().getDate());
    const [formattedDate, setFormattedDate] = React.useState(`${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`)
    const [thisday] = React.useState(`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate()}`)
    const [chartData, setChartData] = React.useState([]);
    const [mychart, setMychart] = React.useState([])

    const router = useRouter();

    React.useEffect(() => {

        if (!auth_token) {
            router.replace('/');
        }

    }, [router]);

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
    }, [fullUrlL, auth_token]);

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
                    setMychart(data);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrlAll, formattedDate]);

    return (
        <section className={styles.monthPage}>
            <MyContainer>
                <div className={styles.monthPage__items}>
                    <h1>month</h1>
                    <div className={styles.monthPage__items__name}>
                        <h2 className={styles.monthPage__items__name__title}>Chiqimlar</h2>
                        <span className={styles.monthPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <div className={styles.monthPage__items__price}>
                        <input type="date" value={formattedDate} onChange={handleDateChange} />
                        {
                            chartData.expense_history ? (
                                <h3>{Math.round(chartData.total_amount).toLocaleString("en-US").replace(/,/g, " ")}{" "}</h3>
                            ) : (
                                <p className={styles.skeletonPrice}></p>
                            )
                        }
                    </div>
                    {

                        formattedDate <= thisday ? (
                            chartData.expense_history ? (
                                <>
                                    <div className={styles.monthPage__items__used}>
                                        <ul className={styles.monthPage__items__used__list1}>
                                            <li className={styles.monthPage__items__used__list1__item}>
                                                <p>Ishlatildi</p>
                                                <h5>
                                                    {mychart && mychart.length > 0 && mychart[0].total_category_amount !== undefined
                                                        ? Math.round(mychart[0].total_category_amount).toLocaleString("en-US").replace(/,/g, " ")
                                                        : "Недоступно"
                                                    }
                                                </h5>
                                            </li>
                                            <li className={styles.monthPage__items__used__list1__item}>
                                                <p>Oylik limit</p>
                                                <h5>{Math.round(totalPrice).toLocaleString("en-US").replace(/,/g, " ")}{" "}</h5>
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

                                    <div className={styles.monthPage__items__result}>
                                        <h3>So’ngi chiqimlar</h3>
                                        <ul className={styles.monthPage__items__result__list}>
                                            {
                                                chartData.expense_history?.map((e, i) => (
                                                    <li key={i} className={styles.monthPage__items__result__list__item}>
                                                        <div>
                                                            <span className={styles.emoji}>{e.category__emoji}</span>
                                                            <span className={styles.etit}>{e.category__title}</span>
                                                        </div>
                                                        <p>{Math.round(e.amount).toLocaleString("en-US").replace(/,/g, " ")}{" "}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <p className={styles.skeletonMyCha}></p>
                            )
                        ) : (
                            <b style={{ color: "#2C2646", marginTop: "1rem", fontSize: "17px" }}>{formattedDate} sanadagi <br /> Ma'lumot mavjud emas</b>
                        )
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default MonthPage;