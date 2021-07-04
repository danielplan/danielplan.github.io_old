import Logo from 'components/svg/Logo';
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
    return (
        <header className="site-header">
            <Link to="/">
                <Logo />
            </Link>
        </header>
    )
}