import { useState } from 'react';
import { Link } from 'react-router-dom'
import Proposal from '../components/Proposal'
import styles from './vote.module.css';


const proposals: ProposalModel[] = [
    {
        isOpen: true,
        author: '0054545454545454545454',
        endTime: '1 YEAR',
        title: 'I propose a new CEO.',
        description: 'I propose to Vote Mark Cuban the new CEO of Iron Finance or Satoshi Nakamoto as the New CEO of Iron Finance. TITAN TO THE MOON!',
    },
    {
        isOpen: false,
        author: '0054545454545454545454',
        endTime: '1 YEAR',
        title: 'I propose a new CEO.',
        description: 'I propose to Vote Mark Cuban the new CEO of Iron Finance or Satoshi Nakamoto as the New CEO of Iron Finance. TITAN TO THE MOON!',
    },
]



const Vote = () => {


    const [activeState, setActiveState] = useState('all');

    return (
        <div className="flex flex-col lg:flex-row mx-7 lg:mx-10 mt-40 md:items-stretch lg:items-start">
            <div className="text-white flex flex-1 lg:flex-none flex-row lg:flex-col ">
                <div className="border-brand-primary border-l-2 border-t-2 border-b-2 md:flex-1 lg:flex-none lg:border-b-0 lg:border-r-2 px-2 lg:px-5 py-4 lg:py-10 flex items-center">
                    <img className={styles.logo} src="/smallLogo.svg" alt="solidefi logo" width="106px" height="113px" />
                    <p className="lg:text-xl text-sm font-bold text-center p-2 lg:p-3"><span className="lg:leading-10">SOLIDEFY <br className="hidden lg:block" /> ON <br />POLYGON</span></p>
                </div>
                <div className="bg-ver flex flex-1 flex-col text-base text-center lg:text-left lg:text-2xl px-4 lg:px-5 py-4 lg:py-10 rounded-br-lg justify-center">
                    <Link to="/vote" className="lg:mb-4 hover:opacity-60">Proposals</Link>
                    <Link to="/new-proposal" className="hover:opacity-60">New Proposal</Link>
                </div>
            </div>
            <div className="flex flex-col lg:px-12 flex-1 mt-36">
                <div className="flex justify-between text-white flex-1 items-start">
                    <h1 className="text-base lg:text-2xl uppercase">Proposals</h1>
                    <div className="bg-ver relative p-0.5 rounded-br-lg">
                        <div className="rounded-br-lg  flex pl-4 lg:pl-6 pr-8 lg:pr-10 py-1 lg:py-2 text-xs lg:text-xl items-end  bg-black">
                            <span className="pr-2">All</span>
                            <p style={{ transform: 'rotate(90deg)' }}>{'>'}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    {
                        proposals.map(
                            (prop, index) => {
                                return <Proposal key={index} proposal={prop} />
                            }
                        )
                    }
                </div>
            </div>

            <div className="mt-36 hidden lg:block">
                <div className="bg-ver relative p-0.5 rounded-br-lg text-white">
                    <div className="rounded-br-lg  flex pl-6 pr-10 py-2 text-xl items-end  bg-black">
                        <span className="pr-2">All</span>
                        <p>{'>'}</p>
                    </div>
                </div>
                <div className="bg-ver relative p-0.5 mt-4">
                    <div className="flex pl-4 py-2 text-base items-end bg-black">
                        <ul>
                            <li onClick={() => { setActiveState('all') }} className={"my-2 hover:text-brand-primary cursor-pointer " + (activeState === 'all' ? 'text-brand-primary' : 'text-white')}>
                                <span className="pr-2">All</span>
                            </li>
                            <li onClick={() => { setActiveState('active') }} className={"mb-2 hover:text-brand-primary cursor-pointer " + (activeState === 'active' ? 'text-brand-primary' : 'text-white')}>
                                <span className="pr-2">Active</span>
                            </li>
                            <li onClick={() => { setActiveState('closed') }} className={"my-2 hover:text-brand-primary cursor-pointer " + (activeState === 'closed' ? 'text-brand-primary' : 'text-white')}>
                                <span className="pr-2">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export interface ProposalModel {
    isOpen: boolean,
    author: string,
    endTime: string,
    title: string,
    description: string,
}

export default Vote
