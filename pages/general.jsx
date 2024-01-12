import * as React from 'react'
import Head from 'next/head'
import GeneralPage from '@/app/components/screens/general/GeneralPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';


const General = () => {
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
                <meta name="description" content="Ushbu sahifada bir oy davomida sarflagan jami pul miqdorini aniqlashingiz mumkin. Pul israfini kamaytirish va moliyaviy boshqotirmalarni o'rganish uchun bu sahifani tekshiring." />
                <meta name="keywords" content="umumiy oylik xarajat" />
                <meta property="og:title" content="umumiy oylik xarajat sahifasi" />
                <meta property="og:description" content="Ushbu sahifada bir oy davomida sarflagan jami pul miqdorini aniqlashingiz mumkin. Pul israfini kamaytirish va moliyaviy boshqotirmalarni o'rganish uchun bu sahifani tekshiring." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>umumiy oylik xarajat</title>
            </Head>


            <div>
                <GeneralPage />
            </div>
        </>
    )
}

export default General;