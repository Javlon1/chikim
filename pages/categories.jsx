import * as React from 'react'
import Head from 'next/head'
import AllCategories from '@/app/components/screens/AllCategories/AllCategories';

const Categories = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Bu sahifa sizga har oyda necha marta biror narsaga pul sarflaganingizni ko'rsatadi." /> // Описание страницы
                <meta name="keywords" content="necha marta" /> // ключевые слова, страницы
                <meta name="image_src" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img

                <meta property="og:title" content="Categories" /> // Название страницы
                <meta property="og:description" content="Bu sahifa sizga har oyda necha marta biror narsaga pul sarflaganingizni ko'rsatadi." /> // Описание страницы
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://chikim.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>Categories</title>
            </Head>

            <main>
                <AllCategories />
            </main>
        </>
    )
}

export default Categories;