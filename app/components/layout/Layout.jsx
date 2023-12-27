import styles from './Layout.module.scss';
import Footer from './footer/Footer';


const Layout = ({ children }) => {
    return (
        <div>
            <main className={styles.layout}>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout;