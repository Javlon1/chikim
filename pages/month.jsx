import * as React from 'react'
import Head from 'next/head'
import MonthPage from '@/app/components/screens/MonthPage/MonthPage';

const Month = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada siz kunlik iste'molingizni bilib olishingiz mumkin." /> // Описание страницы
                <meta name="keywords" content="kunlik chikim" /> // ключевые слова, страницы
                <meta name="image_src" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img

                <meta property="og:title" content="Month" /> // Название страницы
                <meta property="og:description" content="Ushbu sahifada siz kunlik iste'molingizni bilib olishingiz mumkin." /> // Описание страницы
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://chikim.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" /> // Название сайта
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