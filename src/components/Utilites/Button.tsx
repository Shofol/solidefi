const Button = (props: any) => {

    const { text, classes, onClick, isSecondary } = props;

    return (
        <button onClick={() => { onClick() }} className={`text-gray-100 hover:opacity-90  ${classes} ` + (isSecondary ? 'bg-brand-dark' : 'bg-ver')}>
            {text}
        </button >
    )
}

export default Button
