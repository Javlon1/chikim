import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './GeneralPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { getService } from '../../ui/services/get.service';
import { Context } from '../../ui/Context/Context';


const GeneralPage = ({ initialChecked = false }) => {
    const { url } = React.useContext(Context);
    const [checked, setChecked] = React.useState(initialChecked);
    const [selectedDay, setSelectedDay] = React.useState(1);
    const [selectedMonth, setSelectedMonth] = React.useState(0);
    const [selectedYear, setSelectedYear] = React.useState(2024);
    const [monthData, setMonthData] = React.useState([]);

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


    // console.log(selectedDay);
    // console.log(selectedMonth+1);
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
                                monthData?.map((e) => (
                                    <li onClick={() => handleMonthChange(e.id)} key={e.id} className={`${styles.generalPage__items__dataFilter__month__item} ${selectedMonth === e.id ? `${styles.dateact}` : ""}`}>
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
                </div>
            </MyContainer>
        </section >
    )
}

export default GeneralPage;