import { Link } from 'react-router-dom';
import styles from './Vote.module.css'

const Proposal = (props: any) => {

    const { isOpen, author, endTime, title, description } = props.proposal;

    return (
        <div className="bg-hor p-px relative">
            <Link to="/vote/detail" className="absolute inset-0 w-full h-full"></Link>
            <div className="bg-black">
                <div className={"absolute right-0 top-0 rounded-br-lg text-xs lg:text-xl flex items-center text-white px-6 py-1 " + (isOpen ? 'bg-ver' : 'bg-gray-600')}><p>{isOpen ? 'Open' : 'Closed'}</p></div>
                <div className="p-3 lg:p-8">
                    <div className="flex justify-between mt-10">
                        <div className="flex items-center">
                            <img className={`mr-3 lg:mr-6 ${styles.proposalLogo}`} src="/tinyLogo.svg" alt="proposal logo" width="40px" height="42px" />
                            <div>
                                <p className="text-white text-base lg:text-xl">Author</p>
                                <p className="text-gray-400 text-xs lg:text-xl">{author}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs lg:text-xl">Ends In<br />{endTime}</p>

                    </div>

                    <h4 className="text-brand-secondary text-base lg:text-2xl pt-6">{title}</h4>
                    <p className="text-white text-sm lg:text-xl lg:w-4/5 pb-6 pt-2">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Proposal
