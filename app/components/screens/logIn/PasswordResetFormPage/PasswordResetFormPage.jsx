import * as React from 'react';
import Image from 'next/image'
import styles from './PasswordResetFormPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useRouter } from 'next/router';
import PasswordResetFormPageImg from "../../../../../public/image/password-reset-form.svg"
import { Context } from '@/app/components/ui/Context/Context';

const PasswordResetFormPage = () => {
    const { urlApi } = React.useContext(Context);
    const router = useRouter();
    const { uidb64, token } = router.query;
    const [formData, setFormData] = React.useState({
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

        const resetConfirm = async () => {
            const response = await fetch(`${urlApi}/password/reset/confirm/${uidb64}/${token}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ new_password: formData.password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.detail);
                router.push('/');
            } else {
                const errorData = await response.json();
                console.error(errorData.detail);
            }
        };

        resetConfirm();
    };


    return (
        <section className={styles.passwordResetFormPage}>
            <MyContainer>
                <div className={styles.passwordResetFormPage__items}>
                    <h1 className={styles.passwordResetFormPage__items__name}>Chiqimlar</h1>
                    <Image src={PasswordResetFormPageImg} widt={100} height={150} alt="" priority />
                    <form onSubmit={handleSubmit} action="#" method="post">
                        <h3>Parolni tiklash</h3>
                        <input
                            name="password"
                            type="password"
                            placeholder='Yangi parol *'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}
                        <input
                            name="password2"
                            type="password"
                            placeholder='Yangi parol takroran *'
                            value={formData.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p className={styles.error}>{errors.password2}</p>}
                        <button>Ro’yhatdan o’tish</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default PasswordResetFormPage;