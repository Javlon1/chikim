import NotFound from '@/app/components/ui/NotFound/NotFound';
import Head from 'next/head';

const PageNotFound = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Bu sahifa topilmadi." />
                <meta name="keywords" content="Page Not Found" />
                <meta property="og:title" content="Page Not Found" />
                <meta property="og:description" content="Bu sahifa topilmadi." />
                <meta property="og:image" content="https://chikim.vercel.app/_next/static/media/login.6a615d2d.svg" />
                <meta property="og:url" content="https://chikim.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiqimlar" />
                <meta property="og:locale" content="ru_RU" />
                <title>Page Not Found</title>
            </Head>

            <div>
                <NotFound />
            </div>
        </>
    )
}

export default PageNotFound;