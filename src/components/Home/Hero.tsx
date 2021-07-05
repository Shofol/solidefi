import Button from '../Utilites/Button'

const Hero = () => {
    return (
        <div className="w-full mt-40 flex flex-col items-center">
            <img src="/logo.svg" alt="logo" width="530px" height="134px" />
            <img className=" mt-14" src="/shade.svg" alt="logo" width="650px" height="33px" />
            <div className="flex mt-16 ">
                <Button classes={'px-10 py-1 font-bold rounded-br-md mx-8'} text="VOTE" />
                <Button classes={'px-12 py-1 font-bold rounded-br-md mx-8'} text="NFT" />
            </div>
        </div>
    )
}

export default Hero
