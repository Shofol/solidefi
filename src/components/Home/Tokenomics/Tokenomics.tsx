import Underline from '../../Utilites/Underline'
import TokenomicsList from './TokenomicsList'
import TokenomicsType from './TokenomicsType'

const Tokenomics = () => {
    return (
        <div className="text-white w-full px-5 lg:px-10 mt-40 lg:mt-80">
            <h2 className="text-center text-3xl lg:text-5xl font-botrio">Tokenomics</h2>
            <Underline />
            <div className="flex flex-col lg:flex-row mt-16">
                <TokenomicsType />
                <TokenomicsList />
            </div>
        </div>
    )
}

export default Tokenomics
