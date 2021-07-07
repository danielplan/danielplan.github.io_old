import './footer.scss';
import Logo from 'components/svg/Logo';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <Logo color="white" />
            <span className="subtitle">created by <strong>daniel plan.</strong></span>
        </footer>
    )
}