import * as React from 'react'
import Head from 'next/head'
import MonthPage from '@/app/components/screens/MonthPage/MonthPage';

const Month = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada siz kunlik iste'molingizni bilib olishingiz mumkin." />
                <meta name="keywords" content="kunlik chikim" />
                <meta property="og:title" content="Month" />
                <meta property="og:description" content="Ushbu sahifada siz kunlik iste'molingizni bilib olishingiz mumkin." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Month</title>
            </Head>


            <main>
                <MonthPage />
            </main>
        </>
    )
}

export default Month;