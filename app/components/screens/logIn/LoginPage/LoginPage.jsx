import * as React from 'react';
import Image from 'next/image'
import styles from './LoginPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import loginImg from "../../../../../public/image/login.svg"
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Context } from '@/app/components/ui/Context/Context';

const LoginPage = () => {
    const { urlApi, setAuth_token } = React.useContext(Context);
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };
    const endpointPost = 'login';// edit
    const fullUrl = `${urlApi}/${endpointPost}/`;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.email.trim()) {
            validationErrors.email = 'email kiriting';
        }

        if (!(formData.password.trim().length >= 8)) {
            validationErrors.password = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
            
            
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            
            const data = await response.json();
            
            setAuth_token(data.auth_token);

            setFormData({
                email: '',
                password: '',
            });

            router.push('/month');

        } catch (error) {
            console.error('Error during POST request:', error.message);
        }
    };


    return (
        <section className={styles.loginPage}>
            <MyContainer>
                <div className={styles.loginPage__items}>
                    <h1 className={styles.loginPage__items__name}>Chiqimlar</h1>
                    <Image src={loginImg} widt={100} height={150} alt="" priority />
                    <form onSubmit={handleSubmit} action="#" method="post">
                        <h3>Kirish</h3>
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
                        <div>
                            <h5>Saytda yangimisiz?<Link href="/register">Ro'yxatdan o'tish</Link></h5>
                            <h5>Parolni unutdingizmi?<Link href="/password-reset">Parolni tiklash</Link></h5>
                        </div>
                        <button>Kirish</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default LoginPage;