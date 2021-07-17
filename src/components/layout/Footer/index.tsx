import './footer.scss';
import Logo from 'components/svg/Logo';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Logo color="white" />
            <div className="subtitle">
                created by daniel plan, {new Date().getFullYear()}.
            </div>
            <div className="social-icons">
                <a href="https://github.com/danielplan" className="icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github"></i>
                </a>
                <a href="https://twitter.com/planiels" className="icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-twitter"></i>
                </a>
                <a href="https://instagram.com/plandaniel" className="icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://unsplash.com/planiel" className="icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-camera"></i>
                </a>
            </div>
        </footer>
    )
}