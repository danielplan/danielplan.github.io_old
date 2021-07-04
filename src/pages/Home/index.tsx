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
                        <span className="text-uppercase subtitle">Hey, I'm</span>
                        <h1 className="heading xlarge text-primary">daniel plan
                            <span className="text-secondary">.</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section-wrapper content-container">
                <div className="row">
                    <div className="column medium-8 large-6">
                        <p className="lead">
                            Hey I'm daniel plan, I am a 20-year old computer science student. This will be my website someday. Please stand by.
                        </p>
                    </div>
                </div>
            </section>
        </Page>
    )
}