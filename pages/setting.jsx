import * as React from 'react'
import Head from 'next/head'
import SettingPage from '@/app/components/screens/SettingPage/SettingPage';

const Setting = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Siz ushbu sahifada o`zingizni limitingizni q`o`shishingiz mumkin, turkum qo`shishingiz mumkin va parolingizni o`zgartirishiz mumkin" /> // Описание страницы
                <meta name="keywords" content="limit, turkum, parol" /> // ключевые слова, страницы
                <meta name="image_src" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img

                <meta property="og:title" content="Setting" /> // Название страницы
                <meta property="og:description" content="Siz ushbu sahifada o`zingizni limitingizni q`o`shishingiz mumkin, turkum qo`shishingiz mumkin va parolingizni o`zgartirishiz mumkin" /> // Описание страницы
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://chikim.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Setting</title>
            </Head>

            <main>
                <SettingPage />
            </main>
        </>
    )
}

export default Setting;