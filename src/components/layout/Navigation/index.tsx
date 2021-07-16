import { NavLink } from 'react-router-dom';
import Button from 'components/ui/Button';
import './navigation.scss';
import { useState } from 'react';

export default function Navigation(): JSX.Element {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <>
            <div className={'hamburger' + (mobileOpen ? ' expanded' : '')} onClick={() => setMobileOpen(state => !state)}>
                <div className="inner">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <nav className={'site-navigation' + (mobileOpen ? ' open' : '')}>
                <NavLink exact to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
                <NavLink to="/creations" onClick={() => setMobileOpen(false)}>My creations</NavLink>
                <Button route="/contact" onClick={() => setMobileOpen(false)}>Contact</Button>
            </nav>
        </>
    )
}