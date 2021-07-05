import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation(): JSX.Element {
    return (
        <nav className="site-navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/references">References</NavLink>
        </nav>
    )
}