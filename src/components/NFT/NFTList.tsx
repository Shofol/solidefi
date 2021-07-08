import { NFTModel } from '../../pages/nft'
import styles from './NFT.module.css';

const NFTList = ({ list, onselect }: NFTListPropsModel) => {

    const returnBackgroundStyle = (image: string) => {
        return { background: `center / cover no-repeat url(${image}) ` }
    }

    return (
        <div className="lg:mx-20 items-center mt-32 lg:mt-56 ">
            <h2 className="text-xl lg:text-2xl text-center lg:text-left text-white">You may also like</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20">
                {list.map(nft => {
                    return <div onClick={() => onselect(nft)} key={nft.id} className="col-span-1 flex flex-col items-center lg:items-start cursor-pointer mb-12 lg:mb-0 hover:opacity-80">
                        <div>
                            <div className={(styles.nftImageContainer)} style={returnBackgroundStyle(nft.image)}>
                            </div>
                            <div className="flex flex-col items-center mt-10">
                                <p className="text-xl lg:text-2xl text-white">{nft.name}</p>
                                <p className="text-lg lg:text-2xl text-gray-400 mt-2">{nft.listPrice}</p>
                                <div className="h-px mt-2 bg-rev-hor w-1/3"></div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export interface NFTListPropsModel {
    list: NFTModel[],
    onselect: Function
}

export default NFTList
