const TokenomicsListItem = (props: any) => {
    const { range, title } = props.item;
    return (
        <div className="flex items-center border border-1 border-brand-primary lg:ml-4 h-12 lg:h-auto mb-4 lg:mb-0">
            <div className="bg-ver h-full min-h-full w-4"></div>
            <div className="w-16 lg:w-24">
                <p className="text-white py-4 text-xl lg:text-2xl text-right font-botrio">{range}%</p>
            </div>
            <p className="text-brand-primary py-4 ml-4 text-sm lg:text-xl uppercase">{title}</p>
        </div>
    )
}

export default TokenomicsListItem
