import * as React from 'react'
import Head from 'next/head'
import PasswordResetFormPage from '@/app/components/screens/logIn/PasswordResetFormPage/PasswordResetFormPage';

const PasswordResetForm = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada parolingizni tiklashingiz mumkin" />
                <meta name="keywords" content="" />
                <meta property="og:title" content="Password Reset Form" />
                <meta property="og:description" content="Ushbu sahifada parolingizni tiklashingiz mumkin" />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Password Reset Form</title>
            </Head>


            <main>
                <PasswordResetFormPage />
            </main>
        </>
    )
}

export default PasswordResetForm;