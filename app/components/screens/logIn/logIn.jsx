import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './LogIn.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';


const LogIn = () => {
    const router = useRouter();
    const [otp, setOTP] = React.useState(["", "", "", "", ""]);

    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value)) {
            const newOTP = [...otp];
            newOTP[index] = value;

            if (value !== '' && index < newOTP.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }

            setOTP(newOTP);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp.join(""));

        if (otp.join("").length === 5) {
            setOTP(["", "", "", "", ""])
            router.push('/general');
        }
    }

    return (
        <div className={styles.logIn}>
            <MyContainer>
                <div className={styles.logIn__items}>
                    <h3 className={styles.logIn__items__title}>Kirish</h3>
                    <p className={styles.logIn__items__subtitle}>
                        Tizimga kirish uchun <br /><span>kirish kodini</span> kiriting.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.logIn__items__form} action="#" method="post">
                        <div className={styles.logIn__items__form__inps}>
                            {
                                otp?.map((digit, index) => (
                                    <input
                                        required
                                        key={index}
                                        type="text"
                                        id={`otp-input-${index}`}
                                        maxLength="1"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        value={digit}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                ))
                            }
                        </div>
                        <button className={styles.logIn__items__form__btn}>Davom etish</button>
                    </form>
                    <div className={styles.logIn__items__register}>
                        <p>Hali ro’yhatdan o’tmagan bo’lsangiz va shaxsiy kirish kodi yo’qmi ? Unda <Link href="/register">ro’yhatdan o’ting.</Link></p>
                    </div>
                </div>
            </MyContainer>
        </div>
    )
}

export default LogIn;