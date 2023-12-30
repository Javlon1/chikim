import * as React from 'react';
import styles from './MonthPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';


const MonthPage = () => {
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

    const [currentYear, setCurrentYear] = React.useState(null);
    const [currentMonth, setCurrentMonth] = React.useState(null);
    const [currentDay, setCurrentDay] = React.useState(null);

    const handleDateChange = (event) => {
        const { value } = event.target;

        const selectedDate = new Date(value);

        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();

        setCurrentYear(year);
        setCurrentMonth(month);
        setCurrentDay(day);
    };

    React.useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        setCurrentYear(year);
        setCurrentMonth(month);
        setCurrentDay(day);
    }, []);

    const formattedDate = currentMonth !== null && currentDay !== null
        ? `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`
        : '';

    return (
        <section className={styles.monthPage}>
            <MyContainer>
                <div className={styles.monthPage__items}>
                    <div className={styles.monthPage__items__name}>
                        <h2 className={styles.monthPage__items__name__title}>Chiqimlar</h2>
                        <span className={styles.monthPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <div className={styles.monthPage__items__price}>
                        <input type="date" value={formattedDate} onChange={handleDateChange} />
                        <h3>205.000</h3>
                    </div>
                    <div className={styles.monthPage__items__used}>
                        <ul className={styles.monthPage__items__used__list1}>
                            <li className={styles.monthPage__items__used__list1__item}>
                                <p>Ishlatildi</p>
                                <h5>{totalSum}</h5>
                            </li>
                            <li className={styles.monthPage__items__used__list1__item}>
                                <p>Oylik limit</p>
                                <h5>{totalPrice}</h5>
                            </li>
                        </ul>
                        <ul className={styles.monthPage__items__used__list2}>
                            {
                                chartData?.map((e, i) => (
                                    <li
                                        key={i}
                                        className={styles.monthPage__items__used__list2__item}
                                        style={{
                                            width: calculateWidth(e.price),
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
                                chartData?.map((e, i) => (
                                    <li key={i} className={styles.monthPage__items__result__list__item}>
                                        <div>
                                            <span className={styles.emoji}>{e.emoji}</span>
                                            <span className={styles.etit}>{e.title}</span>
                                        </div>
                                        <p>{e.price}</p>
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

export default MonthPage;