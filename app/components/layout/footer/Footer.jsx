import Link from 'next/link'
import { useRouter } from 'next/router';
import MyContainer from '../../ui/MyContainer/MyContainer'
import styles from './Footer.module.scss'
import Head from 'next/head';


const Footer = () => {
    const { pathname } = useRouter();

    return (
        <>
            <Head>
                <link rel="canonical" href={`https://chikim.vercel.app/${pathname}`} />
            </Head>

            <footer className={styles.foote}>
                <div className={styles.footer}>
                    <MyContainer>
                        <nav className={styles.footer__nav}>
                            <ul className={styles.footer__nav__list}>
                                <li className={`${styles.footer__nav__list__item} ${pathname === "/general" ? styles.active : ""}`}>
                                    <Link href={`/general`} className={styles.footer__nav__list__item__link} >
                                        <span className={styles.footer__nav__list__item__link__icon}>
                                            <svg width="24" height="24" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 21H14.5C19.5 21 21.5 19 21.5 14V8C21.5 3 19.5 1 14.5 1H8.5C3.5 1 1.5 3 1.5 8V14C1.5 19 3.5 21 8.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 17.5C16.1 17.5 17 16.6 17 15.5V6.5C17 5.4 16.1 4.5 15 4.5C13.9 4.5 13 5.4 13 6.5V15.5C13 16.6 13.89 17.5 15 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 17.5C9.1 17.5 10 16.6 10 15.5V12C10 10.9 9.1 10 8 10C6.9 10 6 10.9 6 12V15.5C6 16.6 6.89 17.5 8 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className={styles.footer__nav__list__item__link__text}>Umumiy</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footer__nav__list__item} ${pathname === "/month" ? styles.active : ""}`}>
                                    <Link href={`/month`} className={styles.footer__nav__list__item__link} >
                                        <span className={styles.footer__nav__list__item__link__icon}>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.938 2V5M8.93799 2V5M21.688 17.6H4.18799M16.938 3.5C20.268 3.68 21.938 4.95 21.938 9.65V15.83C21.938 19.95 20.938 22.01 15.938 22.01H9.93799C4.93799 22.01 3.93799 19.95 3.93799 15.83V9.65C3.93799 4.95 5.60799 3.69 8.93799 3.5H16.938Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12.938 8.25C11.708 8.25 10.668 8.92 10.668 10.22C10.668 10.84 10.958 11.31 11.398 11.61C10.788 11.97 10.438 12.55 10.438 13.23C10.438 14.47 11.388 15.24 12.938 15.24C14.478 15.24 15.438 14.47 15.438 13.23C15.438 12.55 15.088 11.96 14.468 11.61C14.918 11.3 15.198 10.84 15.198 10.22C15.198 8.92 14.168 8.25 12.938 8.25ZM12.938 11.09C12.418 11.09 12.038 10.78 12.038 10.29C12.038 9.79 12.418 9.5 12.938 9.5C13.458 9.5 13.838 9.79 13.838 10.29C13.838 10.78 13.458 11.09 12.938 11.09ZM12.938 14C12.278 14 11.798 13.67 11.798 13.07C11.798 12.47 12.278 12.15 12.938 12.15C13.598 12.15 14.078 12.48 14.078 13.07C14.078 13.67 13.598 14 12.938 14Z" fill="currentColor" />
                                            </svg>

                                        </span>
                                        <span className={styles.footer__nav__list__item__link__text}>Bu oy</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footer__nav__list__item} ${pathname === "/add" ? styles.active : ""}`}>
                                    <Link href={`/add`} className={styles.footer__nav__list__item__link}>
                                        <span className={`${styles.footer__nav__list__item__link__icon} ${styles.shadow}`}>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className={styles.footer__nav__list__item__link__text}>Qo’shish</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footer__nav__list__item} ${pathname === "/categories" ? styles.active : ""}`}>
                                    <Link href={`/categories`} className={styles.footer__nav__list__item__link} >
                                        <span className={styles.footer__nav__list__item__link__icon}>
                                            <svg width="24" height="24" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.18799 1.75V2.95M9.18799 15.05V16.25M9.18799 7.04999V10.95M18.438 9.5C18.438 8.12 19.558 7 20.938 7V6C20.938 2 19.938 1 15.938 1H5.93799C1.93799 1 0.937988 2 0.937988 6V6.5C2.31799 6.5 3.43799 7.62 3.43799 9C3.43799 10.38 2.31799 11.5 0.937988 11.5V12C0.937988 16 1.93799 17 5.93799 17H15.938C19.938 17 20.938 16 20.938 12C19.558 12 18.438 10.88 18.438 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </span>
                                        <span className={styles.footer__nav__list__item__link__text}>Turkumlar</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footer__nav__list__item} ${pathname === "/setting" ? styles.active : ""}`}>
                                    <Link href={`/setting`} className={styles.footer__nav__list__item__link} >
                                        <span className={styles.footer__nav__list__item__link__icon}>
                                            <svg width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.937988 8.10998V13.88C0.937988 16 0.937988 16 2.93799 17.35L8.43799 20.53C9.26799 21.01 10.618 21.01 11.438 20.53L16.938 17.35C18.938 16 18.938 16 18.938 13.89V8.10998C18.938 5.99998 18.938 5.99999 16.938 4.64999L11.438 1.46999C10.618 0.989985 9.26799 0.989985 8.43799 1.46999L2.93799 4.64999C0.937988 5.99999 0.937988 5.99998 0.937988 8.10998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.93799 14C11.5948 14 12.938 12.6568 12.938 11C12.938 9.34313 11.5948 7.99999 9.93799 7.99999C8.28113 7.99999 6.93799 9.34313 6.93799 11C6.93799 12.6568 8.28113 14 9.93799 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </span>
                                        <span className={styles.footer__nav__list__item__link__text}>Sozlama</span>
                                    </Link>
                                </li>
                                <div className={styles.indicator}></div>
                            </ul>
                        </nav>
                    </MyContainer>
                </div>
            </footer>
        </>
    )
}

export default Footer;