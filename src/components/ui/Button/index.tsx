import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

interface Props {
    route?: string;
    children: ReactNode
}

export default function Button({ children, route }: Props): JSX.Element {
    if (route) {
        return <Link to={route} className="button">{children}</Link>
    }
    return <button className="button">{children}</button>
}