import './contact.scss';
import Page from 'components/layout/Page';

export default function About(): JSX.Element {
    return <Page className="about-page">
        <section className="intro-section">
            <div className="content-container">
                <div className="row">
                    <div className="column large-6">
                        <h1 className="heading xlarge">
                            Let's get in touch
                            <span className="text-secondary">
                                .
                            </span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, consectetur iusto quis id consequatur similique porro quia dignissimos illo omnis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Page>
}