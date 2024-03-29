import { Link, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    const { pathname } = useLocation();

    const isHomeRoute = pathname === '/' ? true : false;

    return (
        <footer className="border-t-2 border-brand-primary flex items-center py-4 px-7 lg:px-24 mt-40 lg:mt-80">
            <a href="/">
                <img className={styles.footerLogo} src="/footerLogo.svg" alt="solidefi logo" width="54px" height="57px" />
            </a>
            <ul className={"text-white grid grid-cols-3 lg:flex flex-1 ml-2 lg:ml-2 justify-center flex-wrap text-xs lg:text-xl "}>
                <li className={"text-center hover:text-brand-primary lg:mx-5 " + (pathname === '/' ? 'text-brand-primary' : '')}>
                    <Link to="http://">Home</Link>
                </li>
                <li className={"text-center hover:text-brand-primary lg:mx-5 " + (pathname.includes('/vote') ? 'text-brand-primary' : '')}>
                    <Link to="/vote">Vote</Link>
                </li>
                <li className={"text-center hover:text-brand-primary lg:mx-5 " + (pathname.includes('/nft') ? 'text-brand-primary' : '')}>
                    <Link to="/nft">NFT</Link>
                </li>
                {
                    isHomeRoute && <>
                        <li className="text-center hover:text-brand-primary lg:mx-5">
                            <a href="http://">Tokenomics</a>
                        </li>
                        <li className="text-center hover:text-brand-primary lg:mx-5">
                            <a href="http://">Platform</a>
                        </li>
                        <li className="text-center lg:mx-5">
                            <a href="http://">Features</a>
                        </li>
                    </>
                }

            </ul>
            <div className={"flex items-center flex-wrap justify-center " + (styles.socialContainer)}>
                <a href="/" target="_blank" rel="noreferrer" className="mr-2 mt-2 lg:mr-8">
                    <img className={styles.socialIcon} src="/instagram.svg" alt="instagram logo" />
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="mr-2 mt-2 lg:mr-8">
                    <img className={styles.socialIcon} src="/telegram.svg" alt="telegram logo" />
                </a>
                <a href="/" target="_blank" rel="noreferrer" className="mr-2 mt-2 lg:mr-8">
                    <img className={styles.socialIcon} src="/twitter.svg" alt="twitter logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
