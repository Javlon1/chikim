import * as React from 'react';
import Image from 'next/image'
import styles from './PasswordConfirmPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import passwordConfirmPageImg from "../../../../../public/image/password-confirm.svg"
import { useRouter } from 'next/router';

const PasswordConfirmPage = () => {
    const router = useRouter();

    const routerHandle = () => {
        router.push('/');
    }

    const routerRegisterHandle = () => {
        router.push('/register');
    }

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
        <section className={styles.passwordConfirmPage}>
            <MyContainer>
                <div className={styles.passwordConfirmPage__items}>
                    <h1 className={styles.passwordConfirmPage__items__name}>Chiqimlar</h1>
                    <Image src={passwordConfirmPageImg} widt={100} height={150} alt="" priority />
                    <p>Parolni tiklash uchun biz pochtangizga xabar yubordik iltimos pochta qutingizni tekshiring !</p>
                    <button onClick={() => {
                        routerHandle()
                        handleButtonClick()
                    }}>Kirish</button>
                    <button onClick={() => {
                        routerRegisterHandle()
                        handleButtonClick()
                    }}>Ro’yhatdan o’tish</button>
                </div>
            </MyContainer>
        </section>
    )
}

export default PasswordConfirmPage;