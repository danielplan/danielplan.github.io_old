import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

interface Props {
    route?: string;
    children: ReactNode;
    onClick?: MouseEventHandler;
}

export default function Button({ children, route, onClick }: Props): JSX.Element {
    if (route) {
        return <Link to={route} className="button" onClick={onClick}>{children}</Link>
    }
    return <button className="button" onClick={onClick}>{children}</button>
}