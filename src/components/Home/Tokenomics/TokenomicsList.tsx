import TokenomicsListItem from './TokenomicsListItem'

const TokenomicsList = () => {

    const list: TokenomicsListModel[] = [
        {
            range: '0-5',
            title: 'Reflection/Redistribution'
        },
        {
            range: '0-5',
            title: 'Burn rate'
        },
        {
            range: '0-5',
            title: 'Auto liquidity'
        },
        {
            range: '.25-1',
            title: 'hourly draw based on volume'
        },
        {
            range: '.5-.3',
            title: 'daily draw based on volume'
        },
        {
            range: '2.5',
            title: 'project wallet AT fixed rate'
        },
        {
            range: '12',
            title: 'The total max transaction fee'
        },
    ]

    return (
        <div className="flex flex-1 flex-col justify-between  order-1 lg:order-2 mb-10 lg:mb-0">
            {list.map((item, index) => {
                return <TokenomicsListItem key={index} item={item} />
            })}
        </div>
    )
}

export interface TokenomicsListModel {
    range: string,
    title: string
}

export default TokenomicsList
