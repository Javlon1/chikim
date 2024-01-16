import * as React from 'react';
import Image from 'next/image'
import styles from './PasswordResetPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import passwordResetPageImg from "../../../../../public/image/password-reset.svg"
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const PasswordResetPage = () => {
    const { urlApi } = React.useContext(Context);
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: ''
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

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        const endpointPost = 'reset_password';// edit
        const fullUrl = `${urlApi}/${endpointPost}/`;
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                }),
            });

            setFormData({
                email: '',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else if (response.ok) {
                router.push('/password-confirm');
            }

            const data = await response.json();
            console.log('Response data:', data);

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
        <section className={styles.passwordResetPage}>
            <MyContainer>
                <div className={styles.passwordResetPage__items}>
                    <h1>password-reset</h1>
                    <h2 className={styles.passwordResetPage__items__name}>Chiqimlar</h2>
                    <Image src={passwordResetPageImg} widt={100} height={150} alt="" priority />
                    <p>Parol esdan chiqgan bo’lsa email pochtangizni kiriting biz unga tiklash uchun link yuboramiz.</p>

                    <form onSubmit={handleSubmit} action="#" method="post">
                        <h3>Parolni tiklash</h3>
                        <input
                            name="email"
                            type="email"
                            placeholder='email *'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}

                        <button onClick={handleButtonClick}>Tiklash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default PasswordResetPage;