import * as React from 'react'
import Head from 'next/head'
import MonthPage from '@/app/components/screens/MonthPage/MonthPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const Month = () => {
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
                <meta name="description" content="Ushbu sahifada siz kunlik iste'molingizni ma'lum qilish orqali foydali ma'lumotlarga ega bo'lishingiz mumkin." />
                <meta name="keywords" content="kunlik chikim" />
                <meta property="og:title" content="kunlik xarajatlar sahifasi" />
                <meta property="og:description" content="Ushbu sahifada siz kunlik iste'molingizni ma'lum qilish orqali foydali ma'lumotlarga ega bo'lishingiz mumkin." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>kunlik xarajatlar</title>
            </Head>


            <main>
                <MonthPage />
            </main>
        </>
    )
}

export default Month;