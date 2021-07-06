const Button = (props: any) => {

    const { text, classes, onClick } = props;

    return (
        <button onClick={() => { onClick() }} className={`bg-ver text-gray-100 hover:opacity-90  ${classes}`}>
            {text}
        </button >
    )
}

export default Button
