import * as React from 'react'
import Head from 'next/head'
import PasswordResetPage from '@/app/components/screens/logIn/PasswordResetPage/PasswordResetPage';
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const PasswordReset = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Agar siz parolingizni unutgan bo'lsangiz, ushbu sahifada elektron pochta manzilingizni kiritib, uni qayta tiklashingiz mumkin." />
                <meta name="keywords" content="parolni qayta tiklash" />
                <meta property="og:title" content="Password Reset" />
                <meta property="og:description" content="Agar siz parolingizni unutgan bo'lsangiz, ushbu sahifada elektron pochta manzilingizni kiritib, uni qayta tiklashingiz mumkin." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Password Reset</title>
            </Head>


            <main>
                <PasswordResetPage />
            </main>
        </>
    )
}

export default PasswordReset;