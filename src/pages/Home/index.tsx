import './home.scss';
import Page from 'components/layout/Page';
import Logo from 'components/svg/Logo';

export default function Home(): JSX.Element {
    return (
        <Page className="home-page">
            <section className="intro-section content-container">
                <div className="inner">
                    <Logo />
                    <div className="text-overlay">
                        <span className="text-uppercase subtitle">Hello I'm</span>
                        <h1 className="heading xlarge text-primary">daniel plan</h1>
                    </div>
                </div>
            </section>
            <section className="content-container">
                Here will be some content. Maybe... Someday?
            </section>
        </Page>
    )
}