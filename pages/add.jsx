import Head from 'next/head'
import AddPage from '@/app/components/screens/AddPage/AddPage';

const Add = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada o'z xarajatlaringizni qo'shishingiz, moliyaviy boshqotirmalarni yaxshilash va moliyaviy o'zgarishlaringizni kuzatib borish uchun foydali vosita." />
                <meta name="keywords" content="Xarajatlarni qo'shish" />
                <meta property="og:title" content="Xarajatlarni qo'shish" />
                <meta property="og:description" content="Ushbu sahifada o'z xarajatlaringizni qo'shishingiz, moliyaviy boshqotirmalarni yaxshilash va moliyaviy o'zgarishlaringizni kuzatib borish uchun foydali vosita." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Xarajatlarni qo'shish</title>
            </Head>


            <main>
                <AddPage />
            </main>
        </>
    )
}

export default Add;