import * as React from 'react';
import Image from 'next/image'
import styles from './PasswordResetPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import passwordResetPageImg from "../../../../../public/image/password-reset.svg"
import { useRouter } from 'next/router';

const PasswordResetPage = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: ''
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

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        router.push('/password-confirm');

        console.log(formData);
    };

    return (
        <section className={styles.passwordResetPage}>
            <MyContainer>
                <div className={styles.passwordResetPage__items}>
                    <h1 className={styles.passwordResetPage__items__name}>Chiqimlar</h1>
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

                        <button>Tiklash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default PasswordResetPage;