import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './NotFound.module.scss'


const NotFound = () => {
    const router = useRouter();


    const linkHandler = () => {
        const auth_token = window.localStorage.getItem('auth_token');

        if (auth_token) {
            router.push('/general');
        } else {
            router.push('/');
        }
    };


    return (
        <section className={styles.notFound}>
            <div className={styles.notFound__item}>
                <h2 className={styles.notFound__item__title}>
                    4<span className={styles.notFound__item__title__zero}></span>4
                </h2>
                <button onClick={linkHandler} className={styles.notFound__item__link}>Bosh sahifaga qaytish</button>
            </div>
        </section>
    )
}

export default NotFound;