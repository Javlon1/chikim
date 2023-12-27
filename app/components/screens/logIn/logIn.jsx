import * as React from 'react';
import Link from 'next/link'
import styles from './LogIn.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const LogIn = () => {
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
    console.log(otp.join(""));

    return (
        <div className={styles.logIn}>
            <MyContainer>
                <div className={styles.logIn__items}>
                    <h3 className={styles.logIn__items__title}>Kirish</h3>
                    <p className={styles.logIn__items__subtitle}>Tizimga kirish uchun admin tomonidan berilgan kodni kiriting.</p>
                    <form className={styles.logIn__items__form} action="#" method="post">
                        <div className={styles.logIn__items__form__inps}>
                            {
                                otp?.map((digit, index) => (
                                    <input
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
                        <button  className={styles.logIn__items__form__btn}>Davom etish</button>
                    </form>
                </div>
            </MyContainer>
        </div>
    )
}

export default LogIn;