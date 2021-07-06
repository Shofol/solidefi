import Button from '../Utilites/Button';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className="w-full mt-40 flex flex-col items-center">
            <img className={styles.heroLogo} src="/logo.svg" alt="logo" width="530px" height="134px" />
            <img className={"mt-7 lg:mt-14 " + (styles.shade)} src="/shade.svg" alt="logo" width="650px" height="33px" />
            <div className="flex mt-8 lg:mt-16 ">
                <Button classes={'px-8 lg:px-10 py-1 font-bold rounded-br-md mx-4 lg:mx-8 text-sm lg:text-2xl'} text="VOTE" />
                <Button classes={'px-9 lg:px-12 py-1 font-bold rounded-br-md mx-4 lg:mx-8 text-sm lg:text-2xl'} text="NFT" />
            </div>
        </div>
    )
}

export default Hero
