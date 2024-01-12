import * as React from 'react'
import Head from 'next/head'
import AddPage from '@/app/components/screens/AddPage/AddPage';

const Add = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada siz o'z xarajatlaringizni qo'shishingiz mumkin." /> // Описание страницы
                <meta name="keywords" content="Xarajatlarni qo'shish" /> // ключевые слова, страницы
                <meta name="image_src" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img

                <meta property="og:title" content="Xarajatlarni qo'shish" /> // Название страницы
                <meta property="og:description" content="Ushbu sahifada siz o'z xarajatlaringizni qo'shishingiz mumkin." /> // Описание страницы
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://chikim.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Add</title>
            </Head>

            <main>
                <AddPage />
            </main>
        </>
    )
}

export default Add;