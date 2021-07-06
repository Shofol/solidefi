import Underline from '../../Utilites/Underline'
import FeatureItem from './FeatureItem';
import styles from './Features.module.css';
import ItemContainer from './ItemContainer';

const Features = () => {


    const features: FeatureModel[] = [
        {
            title: 'Initial Stage',
            description: 'The project will include a Governence system that will allow holders privileges to vote for changes/upgrades/suggestions for the project itself. <br/> <br/> We will be minting an original NFT that allows people to become pledgers for the community, as well as give them access to the ICO, the holders of these NFT’s will also be granted access to certain features on the website that you otherwise will have to hold Solidefi tokens for, similar to a membership system.'
        },
        {
            title: 'Premium Charts',
            description: 'We will be implementing a charting system that offers premium charts for the BSC chain as well as other chains. As defi grows, these other chains will also grow and we want to offer charting systems for anybody who needs them. This will have routine upgrades as the project evolves, offering different features, such as a push notification system that will alert you on certain variables you can set up on the charting system.'
        },
        {
            title: 'AD Platform/Marketplace',
            description: 'This will offer a platform for people to advertise their DeFi services as well as new project launches. You will be able to purchase these services directly through the website and we will have a custom built smart contract that acts as an escrow service which will protect both parties in the exchange. Some examples of people who would use this are : Influencers/Promoters of all levels, Shilling services, People who are selling certain tools such as telegram price bots. <br/> <br/> We will also be offering an NFT advertisement platform that will allow other projects with NFT’s to advertise their NFT’s through the website.'
        },
        {
            title: 'Launchpad',
            description: 'Launchpad for new coin launches that will have regulatory infrastructure to prevent people from scamming buyers, such as mandatory private KYC, and rugpull checks on the contracts. We will also have a platform that allows projects to lock liquidity/tokens.'
        },
        {
            title: 'In house wallet',
            description: 'We will be building our own in house wallet that will make defi trading much simpler for your average investor, bypassing the need to setup metamask/trust wallet. This will also allow you to purchase crypto directly via our platform which will integrate in to our wallet.'
        },
        {
            title: 'Decentralized Exchange',
            description: 'A full fledged decentralized exchange that will allow you to trade on our platform with our integrated wallet. Several features will be implemented that will make trading very simple.'
        },

    ]

    return (
        <div className="text-white w-full px-5 lg:px-10 mt-40 lg:mt-80">
            <h2 className="text-center text-3xl lg:text-5xl font-botrio">Features</h2>
            <Underline />
            <div className={`${styles.timeline} mt-16 lg:mt-20`}>
                {
                    features.map(
                        (feat, index) => {
                            return <ItemContainer key={index} index={index} side={((index % 2) === 0 ? 'r' : 'l')}>
                                {<FeatureItem feature={feat} />}
                            </ItemContainer>
                        }
                    )
                }
            </div>
        </div>
    )
}

export interface FeatureModel {
    title: string,
    description: string
}

export default Features
