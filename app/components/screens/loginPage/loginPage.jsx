import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './LoginPage.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import loginImg from "../../../../public/image/login.svg";
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();

    const Submit = (e) => {
        router.push('/');
    }
    return (
        <section className={styles.loginPage}>
            <MyContainer>
                <div className={styles.loginPage__items}>
                    <Image src={loginImg} alt="" priority />
                    <p>Siz muvaffaqiyatli ro’yhatdan o’tdingiz ilovaga kirish uchun quyidagi kodni ishlating !</p>
                    <h2>23654</h2>
                    <button onClick={Submit}>Kirish</button>
                </div>
            </MyContainer>
        </section>
    )
}

export default LoginPage;