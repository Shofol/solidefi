import { VoteModel } from './VoteDetail'

const PrevVote = (props: any) => {

    const vote: VoteModel = props.vote;

    return (
        <>
            <div className="flex justify-between text-sm lg:text-2xl text-gray-300 font-medium">
                <span>{vote.id}</span>
                <span>{vote.status}</span>
                <span>{vote.amount}</span>
            </div>
            <div className="h-0.5 mt-1 bg-rev-hor w-full"></div>
        </>
    )
}

export default PrevVote
