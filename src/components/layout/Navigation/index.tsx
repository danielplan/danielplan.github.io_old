import { NavLink } from 'react-router-dom';
import Button from 'components/ui/Button';
import './navigation.scss';

export default function Navigation(): JSX.Element {
    return (
        <nav className="site-navigation">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/creations">My creations</NavLink>
            <Button route="/contact">Contact</Button>
        </nav>
    )
}