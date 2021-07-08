import { useEffect, useState } from 'react';
import { NFTModel } from '../../pages/nft';
import Button from '../Utilites/Button';
import Checkout from './Checkout';
import styles from './NFT.module.css';

const ActiveNFT = ({ nft, onNext, onPrev }: NFTPropsModel) => {

    const backgroundStyle = { background: `center / cover no-repeat url(${nft.image}) `, }

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0)

    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        const countDownDate = nft.timeLeft.getTime();

        const x = setInterval(function () {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

            // If the count down is finished, clear the interval
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
        return () => {
            clearInterval(x);
        }
    }, [nft]);


    return (
        <div className="flex flex-col lg:flex-row lg:mx-20 lg:items-center">
            <div className="flex flex-col items-center lg:mr-16">
                <div className={(styles.activeImageContainer)} style={backgroundStyle}>
                </div>
                <h2 className="text-xl lg:text-5xl text-white font-bold mt-12">{nft.name}</h2>
                <p className="text-brand-secondary text-base lg:text-xl mt-2">only {nft.count} available</p>
            </div>

            <div className="flex flex-col mt-12 lg:mt-0 lg:ml-16">
                <div className="bg-brand-primary p-px ">
                    <div className="bg-black flex justify-between items-center">
                        <button onClick={() => onPrev()} className="h-16 w-6 bg-rev-ver text-white flex justify-center items-center">
                            <img src="/arrow.svg" style={{ transform: 'rotate(180deg)' }} alt="next nft" width="10px" height="16px" />
                        </button>
                        <div className="flex flex-col mx-5 lg:mx-20 py-10">
                            <p className="text-left text-sm lg:text-2xl text-brand-secondary mb-1">List Price</p>
                            <p className="text-left text-white text-2xl lg:text-4xl font-bold">{nft.listPrice}</p>
                            <p className="text-right text-sm lg:text-2xl text-gray-400 mt-1">{nft.realPrice}</p>
                        </div>
                        <button onClick={() => onNext()} className="h-16 w-6 bg-rev-ver text-white flex justify-center items-center">
                            <img src="/arrow.svg" alt="previous nft" width="10px" height="16px" />
                        </button>

                    </div>
                </div>

                <ul className="text-gray-300 lg:text-lg">
                    <li className="flex justify-between mt-6 items-center">
                        <span className="text-sm lg:text-lg text-brand-secondary">Solidefi Required</span>
                        <span className="text-3xl text-brand-primary font-medium">{nft.solidefiRequired}</span>
                    </li>
                    <li className="flex justify-between mt-4 items-center">
                        <span className="text-sm lg:text-xl text-brand-secondary">Time Left</span>
                        <span className="text-3xl lg:text-4xl text-brand-primary font-medium">{`${days}:${hours}:${minutes}:${seconds}`}</span>
                    </li>
                </ul>
                <Button onClick={() => { setShowCheckout(true) }} classes={'mt-11 px-4 lg:px-8 py-2 font-bold rounded-br-md lg:mx-4 text-3xl'} text="BUY" />
            </div>
            {showCheckout && <Checkout onCancel={() => { setShowCheckout(false) }} nft={nft} />}
        </div>
    )
}

export interface NFTPropsModel {
    nft: NFTModel,
    onNext: Function,
    onPrev: Function
}

export default ActiveNFT
