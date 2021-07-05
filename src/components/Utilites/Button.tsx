const Button = (props: any) => {

    const { text, classes } = props;

    return (
        <button className={`bg-ver text-gray-100 hover:opacity-90 ${classes}`}>
            {text}
        </button >
    )
}

export default Button
