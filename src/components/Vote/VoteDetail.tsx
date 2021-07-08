import { useState } from 'react';
import { Link } from 'react-router-dom'
import CurrentDetails from './CurrentDetails';
import PrevVote from './PrevVote';
import VoteInfo from './VoteInfo';
import styles from './Vote.module.css';

const VoteDetail = () => {

    const title = 'I propose a new CEO.';
    const description = 'I propose to Vote Mark Cuban the new CEO of Iron Finance or Satoshi Nakamoto as the New CEO of Iron Finance. TITAN TO THE MOON!';
    const isOpen = true;

    const votes: VoteModel[] = [
        {
            id: '0xb2b7...63D1',
            status: 'YES',
            amount: '209.8m SLID'
        },
        {
            id: '0xb2b7...60D1',
            status: 'YES',
            amount: '209.8m SLID'
        },
        {
            id: '0xb2b7...6051',
            status: 'YES',
            amount: '209.8m SLID'
        }
    ];

    const voteInfo: VoteInfoModel = {
        author: '0x32b8...0708',
        starDate: new Date(),
        endDate: new Date()
    }

    const currentDetails: CurrentDetailModal[] = [
        {
            status: 'YES',
            amount: '378.33m TITAN',
            progress: '100'
        },
        {
            status: 'NO',
            amount: '10 TITAN',
            progress: '5'
        }
    ]

    const [isVotingSuccessful, setIsVotingSuccessful] = useState(false);

    return (
        <div className=" mx-7 lg:mx-24 mt-20 lg:mt-40 ">
            <Link className="text-gray-400 flex items-center justify-start text-sm lg:text-xl" to="/vote">
                <img className={styles.backIcon} src="/arrow.svg" width="8px" height="14px" alt="back icon" style={{ transform: 'rotate(180deg)' }} />
                <span className="text-white text-xl pr-1 ">
                </span>Back</Link>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col flex-1">
                    <div className="relative mt-4 lg:mt-8">
                        <div className={"absolute right-0 top-0 rounded-br-lg text-xs lg:text-xl flex items-center text-white px-6 py-1 " + (isOpen ? 'bg-ver' : 'bg-gray-600')}><p>{isOpen ? 'Open' : 'Closed'}</p></div>
                        <h4 className="text-brand-secondary text-base lg:text-2xl lg:pt-4">{title}</h4>
                        <p className="text-gray-300 text-sm lg:text-xl  pb-6 pt-2">{description}</p>
                    </div>
                    <div className="font-botrio text-xl lg:text-4xl text-white mt-4 lg:mt-16">
                        <button className="w-full py-2 mb-2 lg:mb-5 rounded-lg border-2 border-brand-secondary">yes</button>
                        <button className="w-full py-2 mb-4 lg:mb-10 rounded-lg bg-brand-tertiary border-2 border-brand-secondary">no</button>
                        <button onClick={() => setIsVotingSuccessful(true)} className="w-full py-2 rounded-lg bg-ver">Vote</button>
                    </div>

                    <div className="mt-10 lg:mt-40">
                        <h4 className="font-botrio text-xl lg:text-3xl text-white">Votes</h4>
                        <ul className="mt-8">
                            {
                                votes.map((vote, index) => {
                                    return <li key={vote.id} className="flex flex-col mb-7">
                                        <PrevVote key={index} vote={vote} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex-1 pt-8 lg:pl-20">
                    <VoteInfo voteInfo={voteInfo} />
                    <CurrentDetails currentDetails={currentDetails} />
                </div>
            </div>
            {isVotingSuccessful && <div className="backDrop">
                <div className="bg-ver p-1 rounded-br-3xl">
                    <div className="bg-black px-12 lg:px-36 py-8 lg:py-20 relative rounded-br-3xl">
                        <button className="absolute right-3 lg:right-5 top-3 lg:top-5">
                            <img className={styles.closeIcon} src="/close.svg" width="16px" height="16px" alt="close modal" onClick={() => setIsVotingSuccessful(false)} />
                        </button>
                        <p className="text-sm lg:text-2xl text-gray-200 font-botrio">Voting is successfully done</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export interface VoteModel {
    id: string,
    status: string,
    amount: string
}

export interface VoteInfoModel {
    author: string,
    starDate: Date,
    endDate: Date
}

export interface CurrentDetailModal {
    status: string,
    amount: string,
    progress: string
}

export default VoteDetail
