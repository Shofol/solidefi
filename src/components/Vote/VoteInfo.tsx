import { VoteInfoModel } from './VoteDetail'
import styles from './Vote.module.css';

const VoteInfo = (props: any) => {

    const vote: VoteInfoModel = props.voteInfo;

    return (
        <div className="bg-brand-primary p-px">
            <div className="bg-black px-4 lg:px-7 py-8 lg:py-14">
                <h4 className="text-xl lg:text-3xl text-brand-secondary font-botrio">Information</h4>
                <div className="h-0.5 lg:h-1 mt-1 bg-rev-hor w-full"></div>
                <ul className="text-gray-300 text-sm lg:text-lg">
                    <li className="flex justify-between items-center mt-12">
                        <span>Author</span>
                        <div className="flex items-center"><div className={styles.authorCircle}></div><span className="ml-2">{vote.author}</span></div>
                    </li>
                    <li className="flex justify-between items-center mt-6">
                        <span>Start Date</span>
                        <span>{vote.starDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </li>
                    <li className="flex justify-between items-center mt-6">
                        <span>End Date</span>
                        <span>{vote.endDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default VoteInfo
