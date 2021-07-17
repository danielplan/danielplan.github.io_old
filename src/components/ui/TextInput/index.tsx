import './text-input.scss';

interface Props {
    onChange: Function;
    defaultValue: string;
    name: string;
    label?: string;
    search?: boolean;
}

export default function TextInput({ onChange, defaultValue, name, label, search }: Props): JSX.Element {
    return (
        <div className={'input-container' + (search ? ' search' : '')}>
            {
                label &&
                <label htmlFor={name}>{label}</label>
            }
            <div className="input">
                {
                    search &&
                    <div className="search-icon">
                        <i className="uil uil-search"></i>
                    </div>
                }
                <input type="text" onChange={(e) => onChange(e.target.value)} value={defaultValue} name={name} id={name} placeholder={search ? 'Search...' : ''} />
            </div>
        </div>
    )
}