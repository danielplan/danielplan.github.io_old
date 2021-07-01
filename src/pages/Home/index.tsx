import './home.scss';
import Page from 'components/layout/Page';
import logo from 'images/Logo.png';

export default function Home(): JSX.Element {
    return (
        <Page className="home-page">
            <img src={logo} alt="Logo" />
            This website will go online. Someday.
        </Page>
    )
}