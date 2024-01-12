import * as React from 'react'
import Head from 'next/head'
import SettingPage from '@/app/components/screens/SettingPage/SettingPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const Setting = () => {
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
                <meta name="description" content="Siz ushbu sahifada o`zingizni limitingizni q`o`shishingiz mumkin, turkum qo`shishingiz mumkin va parolingizni o`zgartirishiz mumkin" />
                <meta name="keywords" content="limit, turkum, parol" />
                <meta property="og:title" content="Sozlamalar sahifasi" />
                <meta property="og:description" content="Siz ushbu sahifada o`zingizni limitingizni q`o`shishingiz mumkin, turkum qo`shishingiz mumkin va parolingizni o`zgartirishiz mumkin" />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Sozlamalar</title>
            </Head>

            <main>
                <SettingPage />
            </main>
        </>
    )
}

export default Setting;