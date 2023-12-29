import * as React from 'react';
import Link from 'next/link'
import styles from './GeneralPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { getService } from '../../ui/services/get.service';
import { Context } from '../../ui/Context/Context';
import PieChart from '../../ui/Chart/Chart';


const GeneralPage = ({ initialChecked = false }) => {
    const { url } = React.useContext(Context);
    const [checked, setChecked] = React.useState(initialChecked);
    const [selectedDay, setSelectedDay] = React.useState(1);
    const [selectedMonth, setSelectedMonth] = React.useState(0);
    const [selectedYear] = React.useState(new Date().getFullYear());
    const [monthData, setMonthData] = React.useState();
    const [totalPrice, setTotalPrice] = React.useState(545)
    const [chartData, setChartData] = React.useState([
        { emoji: "👕", price: 50 },
        { emoji: "☕", price: 60 },
        { emoji: "🚕", price: 50 },
        { emoji: "🍰", price: 70 },
    ]);

    const endpointGet = 'month';

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getService(endpointGet, url);
                setMonthData(result);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

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
    };

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    const calculateWidth = (e) => {
        const totalPercentage = (e / totalPrice) * 100;
        return totalPercentage > 100 ? '100%' : `${totalPercentage}%`;
    };

    const totalSum = chartData.reduce((sum, item) => sum + item.price, 0);
    const redColor = totalSum >= totalPrice ? "red" : ""

    const chartDataWithPercentage = chartData.map(item => ({
        ...item,
        percentage: (item.price / totalSum) * 100,
    }));

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

                    <div className={styles.generalPage__items__dataFilter}>
                        <input type="checkbox" checked={checked} readOnly className={styles.generalPage__items__dataFilter__checkbox} />
                        <div onClick={handleToggle} className={styles.generalPage__items__dataFilter__slider}>
                            <span className={!checked ? `${styles.slideract}` : ""}>Oylar</span>
                            <span className={checked ? `${styles.slideract}` : ""}>Kunlar</span>
                        </div>
                        <ul className={`${styles.generalPage__items__dataFilter__month} ${!checked ? `${styles.dataAct}` : ""}`}>
                            {
                                monthData ? (monthData?.map((e) => (
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
                                ))) : (
                                    <ul className={styles.skeletonMon}>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                        <li className={styles.skeletonMon__item}></li>
                                    </ul>
                                )
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
                                monthData ? (
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
                                monthData ? (
                                    <p>135.000</p>
                                ) : (
                                    <p className={styles.skeletonPrice}></p>
                                )
                            }
                        </div>
                    </div>

                    <div className={styles.generalPage__items__used}>
                        <ul className={styles.generalPage__items__used__list1}>
                            <li className={styles.generalPage__items__used__list1__item}>
                                <p>Ishlatildi</p>
                                <h5>{totalSum}</h5>
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
                                            width: calculateWidth(e.price),
                                            backgroundColor: redColor,
                                        }}
                                    ></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.generalPage__items__chart}>
                        <p className={styles.generalPage__items__chart__title}>Turkumlar ko’rinishida</p>
                        <div className={styles.generalPage__items__chart__item}>
                            <PieChart price={totalSum} data={chartData} />
                            <ul className={styles.generalPage__items__chart__item__list}>
                                {chartDataWithPercentage.map((item, index) => (
                                    <li className={styles.generalPage__items__chart__item__list__item} key={index}>
                                        <p>{item.emoji}</p>
                                        <p>
                                            {`${item.percentage.toFixed(2)}%`}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </MyContainer>
        </section >
    )
}

export default GeneralPage;