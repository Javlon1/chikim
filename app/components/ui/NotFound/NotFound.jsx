import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './NotFound.module.scss';

const NotFound = () => {
    const router = useRouter();
    const [auth_token, setAuth_token] = React.useState([])

    React.useEffect(() => {
        const auth_token = window.sessionStorage.getItem('auth_token');
        setAuth_token(auth_token)
    }, [])

    const linkHandler = () => {
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
                <p className={styles.notFound__item__message}>
                    Упс! Кажется, вы потерялись. Страница не найдена.
                </p>
                <button onClick={linkHandler} className={styles.notFound__item__link}>
                    Вернуться на главную
                </button>
            </div>
        </section>
    );
};

export const getServerSideProps = async ({ res }) => {
    // Убедимся, что в заголовке ответа указан Content-Type
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Установим статус 404
    res.statusCode = 404;
    return { props: {} };
};

export default NotFound;
