import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation(): JSX.Element {
    return (
        <nav className="site-navigation">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/creations">My creations</NavLink>
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}