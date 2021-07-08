import Underline from '../../Utilites/Underline'
import TokenomicsList from './TokenomicsList'
import TokenomicsType from './TokenomicsType'

const Tokenomics = () => {
    return (
        <div id="tokenomics" className="text-white mx-7 lg:mx-24 mt-40 lg:mt-80">
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
