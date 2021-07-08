const Connect = () => {
    return (
        <div className="bg-brand-primary p-px w-full">
            <div className="bg-black px-4 py-8 flex items-center">
                {/* <h4 className="text-xl lg:text-3xl text-brand-secondary font-botrio">Information</h4> */}
                {/* <div className="h-0.5 lg:h-1 mt-1 bg-rev-hor w-full"></div> */}
                <ul className="text-gray-300 text-sm lg:text-lg">

                    <li >
                        <button className="flex items-center">
                            <span className="mr-4"><img src="/metamask.png" alt="metamask" width="30px" height="31px" /></span>
                            <span className="text-lg lg:text-xl text-left">METAMASK</span>
                        </button>
                    </li>
                    <li className="mt-4 lg:mt-6">
                        <button className="flex items-center">
                            <span className="mr-4"><img src="/twt.svg" alt="trust wallet" width="30px" height="31px" /></span>
                            <span className="text-lg lg:text-xl text-left">TRUST WALLET</span>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Connect
