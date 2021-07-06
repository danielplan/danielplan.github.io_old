import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation(): JSX.Element {
    return (
        <nav className="site-navigation">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/references">References</NavLink>
        </nav>
    )
}