import * as React from 'react'
import Head from 'next/head'
import LoginPage from '@/app/components/screens/logIn/LoginPage/LoginPage';

const Index = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Siz ushbu sahifada CHIKIM veb-saytiga kirasiz" />
                <meta name="keywords" content="CHIKIM veb-saytiga kirish" />
                <meta property="og:title" content="Kirish" />
                <meta property="og:description" content="Siz ushbu sahifada CHIKIM veb-saytiga kirasiz" />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Kirish</title>
            </Head>


            <div>
                <LoginPage />
            </div>
        </>
    )
}

export default Index;