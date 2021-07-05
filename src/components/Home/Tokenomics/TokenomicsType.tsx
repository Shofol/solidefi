import TokenomicsTypeItem from './TokenomicsTypeItem'

const TokenomicsType = () => {

    const types: TokenomicsTypeModel[] = [
        {
            title: 'Transaction Fee',
            description: 'All of the features on the transaction fee’s are variable, we will be able to change them manually as the project evolves, community members will also be allowed to vote for changes through the governance system.',

        },
        {
            title: 'Lottery System',
            description: 'The system will be a fully automated system that uses an off chain oracle and Chainlinks Verifiable Random Function to produce one winner every hour, and another daily winner.',
        },
        {
            title: '24/7/365',
            description: 'It will be running 24/7/365 so it will give holders 24 chances a day, 168 chances a week to win money on top of their holdings.',
        },
        {
            title: 'minimum buy',
            description: 'There will be a minimum buy in amount to be eligible for the lottery, and this amount is also variable so it can change as the project grows.',
        }
    ]

    return (
        <div className="h-full flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-1 grid-rows-4 lg:grid-rows-2 lg:grid-cols-2">
                {types.map(
                    (type, index) => {
                        return <TokenomicsTypeItem key={index} index={index} type={type} />
                    }
                )}
            </div>
        </div>
    )
}

export interface TokenomicsTypeModel {
    title: string,
    description: string
}

export default TokenomicsType
