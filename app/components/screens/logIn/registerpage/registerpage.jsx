import * as React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from './RegisterPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import registerImg from "../../../../../public/image/register.svg";
import { Context } from '@/app/components/ui/Context/Context';

const RegisterPage = () => {
    const { urlApi } = React.useContext(Context);
    const [errorsData, setErrorsData] = React.useState("");
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

    const handleSubmit = async (e) => {
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

        const endpointPost = 'register';// edit
        const fullUrl = `${urlApi}/${endpointPost}/`;
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            setErrorsData(data.error)

            setFormData({
                email: '',
                password: '',
                password2: '',
            });


            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else if (response.ok) {
                router.push('/register-success');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

    const handleButtonClick = (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        e.target.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    }

    return (
        <div className={styles.registerPage}>
            <MyContainer>
                <div className={styles.registerPage__items}>
                    <h1>register</h1>
                    <h2 className={styles.registerPage__items__name}>Chiqimlar</h2>
                    <Image src={registerImg} widt={100} height={150} alt="" priority />
                    <p>Moliyaviy savodingizni oshiring <br /> har oylik chiqimlaringizni nazorat qiling</p>
                    <form onSubmit={handleSubmit} action="#" method="post">
                        <h3>Ro’yhatdan o’tish</h3>
                        {errorsData && <p>{errorsData}</p>}
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
                        <button onClick={handleButtonClick}>Ro’yhatdan o’tish</button>
                    </form>
                </div>
            </MyContainer>
        </div>
    )
}

export default RegisterPage;