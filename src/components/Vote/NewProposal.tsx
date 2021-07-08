import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Utilites/Button'
import DatePicker from "react-datepicker";
import styles from './Vote.module.css';

import "react-datepicker/dist/react-datepicker.css";

const NewProposal = () => {

    const [choices, setChoices] = useState([{ id: 1, value: '' }, { id: 2, value: '' }])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const removeChoices = (index: number) => {
        if (choices.length > 1) {
            const temp = [...choices];
            temp.splice(index, 1);
            setChoices(temp);
        }
    }

    return (
        <div className=" mx-7 lg:mx-24 mt-20 lg:mt-40 ">
            <Link className="text-gray-400 flex items-center justify-start text-sm lg:text-xl" to="/vote">
                <img className={styles.backIcon} src="/arrow.svg" width="8px" height="14px" alt="back icon" style={{ transform: 'rotate(180deg)' }} />
                <span className="text-white text-xl pr-1 ">
                </span>Back</Link>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col flex-1">
                    <h2 className="text-base lg:text-3xl text-gray-400 mt-4 lg:mt-12">QUESTION</h2>
                    <p className="text-sm lg:text-2xl text-gray-500 mt-2 lg:mt-4">What is your proposal ?</p>
                    <div className="mt-12 lg:mt-40">
                        <h4 className="font-botrio text-xl lg:text-3xl text-white">Choices</h4>
                        <ul className="mt-8">
                            {
                                choices.map((choice, index) => {
                                    return <li key={choice.id} className="flex flex-col mb-7">
                                        <div className="flex justify-between items-center text-sm lg:text-2xl">
                                            <span className="text-gray-400 font-medium ">{index + 1}</span>
                                            <input className="bg-black text-gray-400 flex-1 px-4 py-1 mx-10" placeholder="Type your choice" type="text" />
                                            <button className="text-gray-400 font-medium" onClick={() => { removeChoices(index) }}>x</button>
                                        </div>
                                        <div className="h-0.5 mt-1 bg-rev-hor w-full"></div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="flex-1 lg:pt-8 lg:pl-20">
                    <div className="lg:bg-brand-primary p-px">
                        <div className="bg-black px-8 lg:px-14 py-14">
                            <h4 className="text-xl lg:text-3xl text-brand-secondary font-botrio">Actions</h4>
                            <div className="h-0.5 lg:h-1 mt-1 bg-rev-hor w-full"></div>
                            <div className="flex mt-10">
                                <div className="h-16 bg-ver w-2"></div>
                                <DatePicker placeholderText="Select start date"
                                    wrapperClassName={styles.datePicker} selected={startDate} onChange={(date: any) => setStartDate(date)} />
                                <div className="h-16 bg-ver w-2"></div>
                            </div>

                            <div className="flex mt-10">
                                <div className="h-16 bg-ver w-2"></div>
                                <DatePicker placeholderText="Select end date"
                                    wrapperClassName={styles.datePicker} selected={endDate} onChange={(date: any) => setEndDate(date)} />
                                <div className="h-16 bg-ver w-2"></div>
                            </div>

                            <Button classes={'w-full py-3 text-xl mt-10'} text="Publish" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProposal
