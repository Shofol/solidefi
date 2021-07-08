import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Connect from '../NFT/Connect';
import Button from './Button'

const Navbar = () => {

    const { pathname } = useLocation();

    const isHomeRoute = pathname === '/' ? true : false;

    const [showMobileNav, setShowMobileNav] = useState(false);

    const [showConnectOptions, setShowConnectOptions] = useState(false)

    return (
        <div className="flex items-center justify-between py-4 mx-7 lg:mx-24">
            <Link to="/" className={(!isHomeRoute ? 'hidden lg:flex' : 'flex')}>
                {isHomeRoute && <img className="pr-2" src="/smallLogo.svg" alt="smallLogo" width="54px" height="58px" />}
                <img className="hidden lg:block" src="/textLogo.svg" alt="textLogo" width="195px" height="28px" />
            </Link>
            <div className="relative">
                {isHomeRoute && <button className="lg:hidden text-white" onClick={() => setShowMobileNav(!showMobileNav)}>==</button>}
                <ul className={"text-white text-xs lg:text-xl " + ((!showMobileNav && isHomeRoute) ? 'hidden lg:flex ' : 'flex ') +
                    (showMobileNav ? 'border-2 border-brand-primary shadow-navInner flex flex-col absolute top-8 right-0 p-2' : '')}>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '') + (pathname === '/' ? 'text-brand-primary' : '')}>
                        <Link to="/" onClick={() => setShowMobileNav(false)}>Home</Link>
                    </li>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '') + (pathname.includes('vote') ? 'text-brand-primary' : '')}>
                        <Link to="/vote" onClick={() => setShowMobileNav(false)}>Vote</Link>
                    </li>
                    <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '') + (pathname.includes('nft') ? 'text-brand-primary' : '')}>
                        <Link to="/nft" onClick={() => setShowMobileNav(false)}>NFT</Link>
                    </li>
                    {isHomeRoute && <>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="/#tokenomics" onClick={() => setShowMobileNav(false)}>Tokenomics</a>
                        </li>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="/#platform" onClick={() => setShowMobileNav(false)}>Platform</a>
                        </li>
                        <li className={"mx-2 lg:mx-5 hover:text-brand-primary " + (showMobileNav ? 'mb-1' : '')}>
                            <a href="/#features" onClick={() => setShowMobileNav(false)}>Features</a>
                        </li>
                    </>}
                </ul>
            </div>
            {!isHomeRoute && <div className="relative">
                <Button onClick={() => setShowConnectOptions(!showConnectOptions)} classes={'px-4 lg:px-8 py-1 lg:py-2 font-bold rounded-br-md lg:mx-8 text-xs lg:text-xl'} text="CONNECT" />
                <div className={showConnectOptions ? 'w-64 absolute top-8 lg:top-12 right-0 lg:right-8 block' : 'hidden'}>
                    <Connect />
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar
