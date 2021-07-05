const TokenomicsTypeItem = (props: any) => {
    const { title, description } = props.type;
    return (
        <div className={`flex flex-col mx-8 lg:mx-0 lg:mr-8 ` + ((props.index === 0 || props.index === 1) ? 'mb-10 lg:mb-10' : 'mb-10 lg:mb-0 lg:mt-10')}>
            <h3 className="text-brand-secondary uppercase text-center text-lg lg:text-xl bg-white p-4 lg:p-5 rounded-tl-lg rounded-tr-lg">{title}</h3>
            <div className="bg-brand-secondary rounded-bl-lg rounded-br-lg p-8 lg:p-10 flex-1 shadow-inner">
                <p className="italic text-white text-sm lg:text-base">{description}</p>
            </div>
        </div>
    )
}

export default TokenomicsTypeItem
