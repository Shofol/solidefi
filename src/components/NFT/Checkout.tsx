import { NFTModel } from '../../pages/nft';
import Button from '../Utilites/Button';
import styles from './NFT.module.css';

const Checkout = ({ nft, onCancel }: NFTPropsModel) => {

    const backgroundStyle = { background: `center / cover no-repeat url(${nft.image}) `, }
    const yourBalance = '0 BNB';

    return (
        <div className="backDrop">
            <div className="bg-black flex flex-col lg:flex-row p-10 lg:px-16 lg:py-16 lg:items-center relative">
                <div className={(styles.checkoutImageContainer)} style={backgroundStyle}>
                </div>
                <div className="mt-12 lg:mt-0 text-center lg:text-left lg:ml-12">
                    <h2 className="text-gray-400 text-xl lg:text-3xl">Checkout</h2>
                    <p className="text-brand-secondary font-medium text-base lg:text-xl">You are about to purchase</p>
                    <p className="text-gray-100 text-base  lg:text-xl lg:mt-1">{nft.name}</p>
                    <ul className="text-gray-400 text-sm lg:text-lg">
                        <li className="text-white flex justify-between items-center mt-6 lg:mt-8">
                            <span>{nft.listPrice}</span>
                            <span>{nft.realPrice}</span>
                        </li>
                        <li className="flex justify-between items-center mt-2 lg:mt-2">
                            <span>Your Balance</span>
                            <span>{yourBalance}</span>
                        </li>
                        <li className="flex justify-between items-center mt-2 lg:mt-2">
                            <span>Solidefi Required</span>
                            <span>{nft.solidefiRequired}</span>
                        </li>
                    </ul>
                    <div className="flex justify-center lg:justify-start mt-8">
                        <Button onClick={() => { onCancel() }} classes={'px-6 lg:px-8 py-2 font-bold rounded-br-lg mr-2 lg:mr-8 text-xs lg:text-xl'} isSecondary="true" text="CANCEL" />
                        <Button onClick={() => { }} classes={'px-6 lg:px-8 py-2 font-bold rounded-br-lg mx-2 lg:mx-0 text-xs lg:text-xl'} text="CONFIRM" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface NFTPropsModel {
    nft: NFTModel,
    onCancel: Function
}

export default Checkout
