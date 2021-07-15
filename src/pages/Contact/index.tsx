import './contact.scss';
import Page from 'components/layout/Page';
import ContactBox from 'components/ui/ContactBox';

export default function About(): JSX.Element {
    return <Page className="about-page">
        <section className="intro-section">
            <div className="content-container">
                <div className="row center text-center">
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
                <div className="contact-boxes">
                    <ContactBox
                        color="#833AB4" 
                        href="https://instagram.com/plandaniel" 
                        title="Instagram"
                        label="@plandaniel"
                        icon="instagram" />
                    <ContactBox
                        color="#FF6056" 
                        href="mailto:dani.plan@yahoo.de" 
                        title="Email"
                        label="dani.plan(at)yahoo.de"
                        icon="envelope" />
                    <ContactBox
                        color="#000" 
                        href="https://unsplash.com/@planiel" 
                        title="Unsplash"
                        label="@planiel"
                        icon="camera" />
                </div>
            </div>
        </section>
    </Page>
}