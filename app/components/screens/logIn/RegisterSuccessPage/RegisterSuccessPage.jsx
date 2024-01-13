import * as React from 'react';
import Image from 'next/image'
import styles from './RegisterSuccessPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import registerSuccessImg from "../../../../../public/image/register-success.svg"
import { useRouter } from 'next/router';

const RegisterSuccessPage = () => {
    const router = useRouter();

    const routerHandle = () => {
        router.push('/');
    }

    return (
        <section className={styles.registerSuccessPage}>
            <MyContainer>
                <div className={styles.registerSuccessPage__items}>
                    <h1 className={styles.registerSuccessPage__items__name}>Chiqimlar</h1>
                    <Image src={registerSuccessImg} widt={100} height={150} alt="" priority />
                    <p>Siz muvaffaqiyatli ro’yhatdan o’tdingiz ilovaga kirish uchun quyidagi tugmani bosing !</p>
                    <button onClick={routerHandle}>Kirish</button>
                </div>
            </MyContainer>
        </section>
    )
}

export default RegisterSuccessPage;