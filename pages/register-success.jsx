import * as React from 'react'
import Head from 'next/head'
import RegisterSuccessPage from '@/app/components/screens/logIn/RegisterSuccessPage/RegisterSuccessPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const RegisterSuccess = () => {
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
                <meta name="description" content="Siz ushbu sahifada muvaffaqiyatli ro'yxatdan o'tganingizni bilib olasiz" />
                <meta name="keywords" content="muvaffaqiyatli ro'yxatdan o'tganingiz" />
                <meta property="og:title" content="Register Success" />
                <meta property="og:description" content="Siz ushbu sahifada muvaffaqiyatli ro'yxatdan o'tganingizni bilib olasiz" />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Register Success</title>
            </Head>


            <main>
                <RegisterSuccessPage />
            </main>
        </>
    )
}

export default RegisterSuccess;