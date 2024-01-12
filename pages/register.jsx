import * as React from 'react'
import Head from 'next/head'
import RegisterPage from '@/app/components/screens/logIn/registerpage/registerpage';

const Register = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Siz ushbu sahifada ro'yxatdan o'tishingiz mumkin" /> // Описание страницы
                <meta name="keywords" content="ro'yxatdan o'tish" /> // ключевые слова, страницы
                <meta name="image_src" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img

                <meta property="og:title" content="Register" /> // Название страницы
                <meta property="og:description" content="Siz ushbu sahifada ro'yxatdan o'tishingiz mumkin" /> // Описание страницы
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://chikim.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" /> // Название сайта
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