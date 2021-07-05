import styles from './Features.module.css';

const FeatureItem = (props: any) => {

    const { title, description } = props.feature;

    function createMarkup() {
        return { __html: description };
    }

    return (
        <div>
            <h3 className={`${styles.title} text-lg lg:text-3xl font-bold uppercase mb-6`}>{title}</h3>
            <p className="text-sm lg:text-xl" dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    )
}

export default FeatureItem
