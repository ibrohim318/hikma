const Input = ({ name, placeholder, onChange }) => {
    return (
        <input name={name} placeholder={placeholder} onChange={onChange} className="border px-3 py-2 rounded-lg w-full" />
    );
};

export default Input;