import * as React from 'react'
import Head from 'next/head'
import RegisterPage from '@/app/components/screens/logIn/registerpage/registerpage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const Register = () => {
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
                <meta name="description" content="Ro'yxatdan o'tish orqali siz bu sahifaga kirishingiz mumkin. Ushbu sahifa sizga foydali ma'lumotlarni taqdim qiladi." />
                <meta name="keywords" content="ro'yxatdan o'tish" />
                <meta property="og:title" content="Ro'yxatdan o'tish sahifasi" />
                <meta property="og:description" content="Ro'yxatdan o'tish orqali siz bu sahifaga kirishingiz mumkin. Ushbu sahifa sizga foydali ma'lumotlarni taqdim qiladi." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Ro'yxatdan o'tish</title>
            </Head>

            <div>
                <RegisterPage />
            </div>
        </>
    )
}

export default Register;