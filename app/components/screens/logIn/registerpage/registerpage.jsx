import * as React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './RegisterPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import registerImg from "../../../../../public/image/register.svg";

const RegisterPage = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.email.trim()) {
            validationErrors.email = 'email kiriting';
        }

        if (!(formData.password.trim().length >= 8)) {
            validationErrors.password = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }

        if (formData.password !== formData.password2) {
            validationErrors.password2 = 'Parollar mos kelmayabdi';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        router.push('/register-success');

        console.log(formData);
    };

    return (
        <div className={styles.registerPage}>
            <MyContainer>
                <div className={styles.registerPage__items}>
                    <h1 className={styles.registerPage__items__name}>Chiqimlar</h1>
                    <Image src={registerImg} widt={100} height={150} alt="" priority />
                    <p>Moliyaviy savodingizni oshiring <br /> har oylik chiqimlaringizni nazorat qiling</p>
                    <form onSubmit={handleSubmit} action="#" method="post">
                        <h3>Ro’yhatdan o’tish</h3>
                        <input
                            name="email"
                            type="email"
                            placeholder='email *'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                        <input
                            name="password"
                            type="password"
                            placeholder='Parol *'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}
                        <input
                            name="password2"
                            type="password"
                            placeholder='Parol takroran *'
                            value={formData.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p className={styles.error}>{errors.password2}</p>}
                        <button>Ro’yhatdan o’tish</button>
                    </form>
                </div>
            </MyContainer>
        </div>
    )
}

export default RegisterPage;