const Footer = () => {
    return (
        <footer className="border-t-2 border-brand-primary flex items-center py-4 px-10 mt-40 lg:mt-80">
            <a href="/">
                <img src="/footerLogo.svg" alt="solidefi logo" width="54px" height="57px" />
            </a>
            <ul className="text-white flex flex-1 justify-center">
                <li className="mx-5 hover:text-brand-primary">
                    <a href="http://">Home</a>
                </li>
                <li className="mx-5 hover:text-brand-primary">
                    <a href="http://">Vote</a>
                </li>
                <li className="mx-5 hover:text-brand-primary">
                    <a href="http://">NFT</a>
                </li>
                <li className="mx-5 hover:text-brand-primary">
                    <a href="http://">Tokenomics</a>
                </li>
                <li className="mx-5 hover:text-brand-primary">
                    <a href="http://">Platform</a>
                </li>
                <li>
                    <a href="http://">Features</a>
                </li>
            </ul>
            <div className="flex items-center">
                <a href="/" className="mr-8">
                    <img src="/instagram.svg" alt="instagram logo" />
                </a>
                <a href="/" className="mr-8">
                    <img src="/telegram.svg" alt="telegram logo" />
                </a>
                <a href="/" className="mr-8">
                    <img src="/twitter.svg" alt="twitter logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
