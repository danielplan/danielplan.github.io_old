import Logo from 'components/svg/Logo';
import Navigation from 'components/layout/Navigation';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
    return (
        <header className="site-header">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>
            <Navigation />
        </header>
    )
}