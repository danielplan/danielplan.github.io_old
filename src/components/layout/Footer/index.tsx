import './footer.scss';
import Logo from 'components/svg/Logo';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Logo color="white" />
            <div className="subtitle">
                created by daniel plan, {new Date().getFullYear()}
            </div>
        </footer>
    )
}