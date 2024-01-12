import * as React from 'react'
import Head from 'next/head'
import AllCategories from '@/app/components/screens/AllCategories/AllCategories';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const Categories = () => {
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
                <meta name="description" content="Bu sahifa sizga har oyda necha marta biror narsaga pul sarflaganingizni aniqlash imkoniyatini beradi. Pul xarajatlaringizni nazorat qilish va moliyaviy hisob-kitoblarni o'rganish uchun bu sahifani tekshiring." />
                <meta name="keywords" content="necha marta" />
                <meta property="og:title" content="Categories" />
                <meta property="og:description" content="Bu sahifa sizga har oyda necha marta biror narsaga pul sarflaganingizni aniqlash imkoniyatini beradi. Pul xarajatlaringizni nazorat qilish va moliyaviy hisob-kitoblarni o'rganish uchun bu sahifani tekshiring." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
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