import './text-input.scss';

interface Props {
    onChange: Function;
    defaultValue: string;
    name: string;
    label: string;
}

export default function TextInput({ onChange, defaultValue, name, label }: Props): JSX.Element {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input type="text" onChange={(e) => onChange(e.target.value)} value={defaultValue} name={name} id={name} />
        </div>
    )
}