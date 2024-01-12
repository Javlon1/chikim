import * as React from 'react'
import Head from 'next/head'
import PasswordConfirmPage from '@/app/components/screens/logIn/PasswordConfirmPage/PasswordConfirmPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const PasswordConfirm = () => {
    const router = useRouter();
    const { auth_token } = React.useContext(Context);

    React.useEffect(() => {

        if (!auth_token) {
            router.replace('/');
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifadagi pochta qutingizga xabar yuborilganligini bilib olasiz." />
                <meta name="keywords" content="pochta qutingizga xabar yuborildi" />
                <meta property="og:title" content="Password Confirm" />
                <meta property="og:description" content="Ushbu sahifadagi pochta qutingizga xabar yuborilganligini bilib olasiz." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Password Confirm</title>
            </Head>


            <main>
                <PasswordConfirmPage />
            </main>
        </>
    )
}

export default PasswordConfirm;