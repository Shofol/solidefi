import styles from './Features.module.css';

const ItemContainer = (props: any) => {
    const { side, index } = props;

    return (
        <div className={`${styles.container} ${side === 'r' ? styles.right : styles.left}`}>
            <div className={`${styles.itemNumber} text-xl lg:text-4xl`}><span className="-mt-1">{index + 1}</span></div>
            <div className={styles.content}>
                <div className={`${side === 'r' ? 'lg:pl-16 text-left' : 'lg:pr-16 text-left lg:text-right'}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ItemContainer
