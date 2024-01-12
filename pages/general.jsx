import * as React from 'react'
import Head from 'next/head'
import GeneralPage from '@/app/components/screens/general/GeneralPage';


const General = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Ushbu sahifada siz bir oy davomida jami qancha pul sarflaganingizni bilib olasiz." />
                <meta name="keywords" content="umumiy oylik xarajat" />
                <meta property="og:title" content="General" />
                <meta property="og:description" content="Ushbu sahifada siz bir oy davomida jami qancha pul sarflaganingizni bilib olasiz." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>General</title>
            </Head>


            <div>
                <GeneralPage />
            </div>
        </>
    )
}

export default General;