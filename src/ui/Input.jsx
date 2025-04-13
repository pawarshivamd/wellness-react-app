
const InputField = ({ type = "text", ...rest }) => {
    return (
        <input
            type={type}
            className="input-text"
            {...rest}
        />
    );
};

export default InputField;
