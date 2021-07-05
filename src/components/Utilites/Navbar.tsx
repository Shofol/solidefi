const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-4 mx-10">
            <div className="flex">
                <img className="pr-2" src="/smallLogo.svg" alt="smallLogo" width="54px" height="58px" />
                <img src="/textLogo.svg" alt="textLogo" width="195px" height="28px" />
            </div>
            <ul className="text-white flex ">
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
        </div>
    )
}

export default Navbar
