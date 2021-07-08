import { useEffect, useState } from 'react';
import ActiveNFT from '../components/NFT/ActiveNFT'
import NFTList from '../components/NFT/NFTList'


const NFT = () => {

    const nftsData: NFTModel[] = [
        {
            id: 1,
            name: 'MIMAS',
            listPrice: '0.22BNB',
            realPrice: '$129.74',
            solidefiRequired: '100',
            timeLeft: new Date("Jan 5, 2022 15:37:25"),
            count: '130',
            image: '/temp.png'
        },
        {
            id: 2,
            name: 'Tethys',
            listPrice: '0.22BNB',
            realPrice: '$129.74',
            solidefiRequired: '100',
            timeLeft: new Date("Jan 5, 2022 15:37:25"),
            count: '130',
            image: '/temp2.jpg'
        },
        {
            id: 3,
            name: 'Tethys',
            listPrice: '0.210BNB',
            realPrice: '$129.74',
            solidefiRequired: '100',
            timeLeft: new Date("Jan 5, 2022 15:37:25"),
            count: '130',
            image: '/temp3.png'
        }
    ];

    const [nfts, setNfts] = useState(nftsData);
    const [selectedNFT, setSelectedNFT] = useState<NFTModel>(nfts[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [otherNfts, setOtherNfts] = useState(nfts.filter(nft => nft.id !== selectedNFT.id));

    const selectNextNFT = () => {
        console.log('bsd')

        if (currentIndex + 1 > nfts.length - 1) {
            setSelectedNFT(nfts[0]);
        } else {
            setSelectedNFT(nfts[currentIndex + 1]);
        }
    }

    const selectPrevNFT = () => {
        console.log('asd')
        if (currentIndex - 1 < 0) {
            setSelectedNFT(nfts[nfts.length - 1]);
        } else {
            setSelectedNFT(nfts[currentIndex - 1]);
        }
    }

    useEffect(() => {
        setCurrentIndex(nfts.findIndex(nft => nft.id === selectedNFT.id));
        setOtherNfts(nfts.filter(nft => nft.id !== selectedNFT.id));
    }, [selectedNFT, nfts]);

    return (
        <div className="flex flex-col mx-7 lg:mx-24 mt-40 ">
            <ActiveNFT onPrev={() => { selectPrevNFT() }} onNext={() => { selectNextNFT() }} nft={selectedNFT} />
            <NFTList onselect={(nft: NFTModel) => { setSelectedNFT(nft); }} list={otherNfts} />
        </div>
    )
}

export interface NFTModel {
    id: number;
    name: string;
    listPrice: string;
    realPrice: string;
    solidefiRequired: string;
    timeLeft: Date;
    count: string;
    image: string;
}

export default NFT
