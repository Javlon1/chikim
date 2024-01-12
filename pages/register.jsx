import * as React from 'react'
import Head from 'next/head'
import RegisterPage from '@/app/components/screens/logIn/registerpage/registerpage';

const Register = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Siz ushbu sahifada ro'yxatdan o'tishingiz mumkin" />
                <meta name="keywords" content="ro'yxatdan o'tish" />
                <meta property="og:title" content="Register" />
                <meta property="og:description" content="Siz ushbu sahifada ro'yxatdan o'tishingiz mumkin" />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Register</title>
            </Head>

            <div>
                <RegisterPage />
            </div>
        </>
    )
}

export default Register;