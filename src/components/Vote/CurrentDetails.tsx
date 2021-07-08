import { CurrentDetailModal } from './VoteDetail'

const CurrentDetails = (props: any) => {

    const currentDetails: CurrentDetailModal[] = props.currentDetails;

    return (
        <div className="bg-brand-primary p-px mt-7">
            <div className="bg-black px-4 lg:px-7 py-8 lg:py-14">
                <h4 className="text-xl lg:text-3xl text-brand-secondary font-botrio">Current Results</h4>
                <div className="h-0.5 lg:h-1 mt-1 bg-rev-hor w-full"></div>
                {
                    currentDetails.map((detail: CurrentDetailModal, index) => {
                        return <div key={index} className="mt-8 lg:mt-12">
                            <div className="flex text-gray-300 justify-between text-sm lg:text-lg mb-2">
                                <span>{detail.status}</span>
                                <span className="text-white">{detail.amount}</span>
                                <span>{detail.progress}</span>
                            </div>
                            <progress className="w-full" value={detail.progress} max="100"></progress>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CurrentDetails
