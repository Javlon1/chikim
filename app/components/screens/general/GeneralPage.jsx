import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
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
    const [selectedYear, setSelectedYear] = React.useState(2024); // edit
    const [monthData, setMonthData] = React.useState();
    const [emoji, setEmoji] = React.useState('🍎');

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

    const handleDayChange = (day) => {
        setSelectedDay(day);
    };

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    const daysInSelectedMonth = daysInMonth(selectedYear, selectedMonth);



    const chartData = {
        datasets: [
            {
                data: [20, 30, 15, 25, 10], // Пример данных
            },
        ],
    };

    // console.log(selectedDay);
    // console.log(selectedMonth + 1);
    // console.log(selectedYear);

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

                    <div className={styles.generalPage__items__chart}>
                        <p className={styles.generalPage__items__chart__title}>Turkumlar ko’rinishida</p>
                        <div className={styles.generalPage__items__chart__item}>
                            <PieChart price={135000} data={chartData} />
                            <ul className={styles.generalPage__items__chart__item__list}>
                                <li className={styles.generalPage__items__chart__item__list__item}>
                                    <p>{emoji}</p>
                                    <p>10%</p>
                                </li>
                                <li className={styles.generalPage__items__chart__item__list__item}>
                                    <p>{emoji}</p>
                                    <p>10%</p>
                                </li>
                                <li className={styles.generalPage__items__chart__item__list__item}>
                                    <p>{emoji}</p>
                                    <p>10%</p>
                                </li>
                                <li className={styles.generalPage__items__chart__item__list__item}>
                                    <p>{emoji}</p>
                                    <p>10%</p>
                                </li>
                                <li className={styles.generalPage__items__chart__item__list__item}>
                                    <p>{emoji}</p>
                                    <p>10%</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </MyContainer>
        </section >
    )
}

export default GeneralPage;