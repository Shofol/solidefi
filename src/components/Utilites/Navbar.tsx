import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    const { pathname } = useLocation();

    const isHomeRoute = pathname === '/' ? true : false;

    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className="flex items-center justify-between py-4 mx-7 lg:mx-10">
            <div className={(!isHomeRoute ? 'hidden lg:flex' : 'flex')}>
                <img className="pr-2" src="/smallLogo.svg" alt="smallLogo" width="54px" height="58px" />
                <img className="hidden lg:block" src="/textLogo.svg" alt="textLogo" width="195px" height="28px" />
            </div>
            <div className="relative">
                {isHomeRoute && <button className="lg:hidden text-white" onClick={() => setShowMobileNav(!showMobileNav)}>==</button>}
                <ul className={"text-white text-xs lg:text-xl " + ((!showMobileNav && isHomeRoute) ? 'hidden lg:flex ' : 'flex ') +
                    (showMobileNav ? 'border-2 border-brand-primary shadow-navInner flex flex-col absolute top-8 right-0 p-2' : '')}>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                        <Link to="/vote">Vote</Link>
                    </li>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                        <a href="http://">NFT</a>
                    </li>
                    {isHomeRoute && <>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="http://">Tokenomics</a>
                        </li>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="http://">Platform</a>
                        </li>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="http://">Features</a>
                        </li>
                    </>}
                </ul>
            </div>
            {!isHomeRoute && <Button classes={'px-4 lg:px-8 py-1 lg:py-2 font-bold rounded-br-md lg:mx-8 text-xs lg:text-xl'} text="CONNECT" />}
        </div>
    )
}

export default Navbar
