import * as React from 'react';
import styles from './SettingPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';


const SettingPage = () => {
    const [errors, setErrors] = React.useState({});
    const [editData, setEditData] = React.useState({
        password: '',
        change: '',
    });

    const [limitData, setLimitData] = React.useState({
        price: ''
    });

    const editPassowrd = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const limit = (e) => {
        setLimitData({ ...limitData, price: e.target.value });
    };

    const editHandle = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!(editData.password.trim().length >= 8)) {
            validationErrors.password = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }

        if (!(editData.change.trim().length >= 8)) {
            validationErrors.change = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log(editData);
    };


    const limitHandle = (e) => {
        e.preventDefault();

        console.log(limitData);
    };

    return (
        <section className={styles.settingPage}>
            <MyContainer>
                <div className={styles.settingPage__items}>
                    <div className={styles.settingPage__items__name}>
                        <h2 className={styles.settingPage__items__name__title}>Sozlamalar</h2>
                        <span className={styles.settingPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <h3>Limit belgilash</h3>
                    <form onSubmit={limitHandle} action="#" method="post">
                        <input
                            name="limit"
                            type="number"
                            placeholder='Bu oy uchun limitni kiriting'
                            value={limitData.price}
                            onChange={limit}
                        />
                        <button>Saqlash</button>
                    </form>
                    <h3>Turkum qo’shish</h3>
                    <form action="#" method="post">
                        <input
                            type="text"
                            placeholder='Turkum nomi'
                        />
                        <input
                            type="text"
                            placeholder='Icon'
                        />
                        <button>Saqlash</button>
                    </form>
                    <h3>Kirish kodini o’zgartirish</h3>
                    <form action="#" onSubmit={editHandle} method="post">
                        <input
                            name="password"
                            type="number"
                            placeholder='Eski kod'
                            value={editData.password}
                            onChange={editPassowrd}
                        />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}
                        <input
                            name="change"
                            type="number"
                            placeholder='Yangi kod '
                            value={editData.change}
                            onChange={editPassowrd}
                        />
                        {errors.change && <p className={styles.error}>{errors.change}</p>}
                        <button>Saqlash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default SettingPage;