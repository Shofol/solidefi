import Underline from '../Utilites/Underline';

const Platform = () => {
    return (
        <div className="text-white w-full mt-40 lg:mt-80">
            <h2 className="text-center text-3xl lg:text-5xl font-botrio">Platform</h2>
            <Underline />
            <div className="px-7 lg:px-24 py-11 lg:py-14 text-sm lg:text-xl bg-ver mt-7 lg:mt-16">
                <p className="mb-8 lg:mb-12 font-medium">The platform’s aim is to not only offer experienced traders a place where they have all of their trading needs filled, but also aims to make DeFi a less complicated process, so that people with less experience can find the means to get involved with DeFi.</p>
                <p>The platform will have routine upgrades that will eventually evolve in to a fully decentralized exchange that cover all your bases as a DeFi trader.</p>
            </div>
        </div>
    )
}

export default Platform
