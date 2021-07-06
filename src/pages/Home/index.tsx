import './home.scss';
import Page from 'components/layout/Page';
import Logo from 'components/svg/Logo';
import Heading from 'components/ui/Heading';
import CreationLarge from 'components/ui/CreationLarge';
import { Tag } from 'data/common';

export default function Home(): JSX.Element {
    return (
        <Page className="home-page">
            <section className="intro-section content-container">
                <div className="inner">
                    <Logo />
                    <div className="text-overlay">
                        <span className="text-uppercase subtitle">Hey, I'm</span>
                        <h1 className="heading special">daniel plan
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
            <section className="section-wrapper">
                <div className="row content-container">
                    <div className="column large-6">
                        <Heading heading="My creations" size="xlarge" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sit viverra eget scelerisque nisl ut turpis porttitor.
                            Viverra quis vivamus potenti est. Blandit dictumst non nunc tellus, elementum.
                            Cras sit tempus nec mauris.
                        </p>
                    </div>
                </div>
                <CreationLarge creation={{ name: 'ryoko', description: 'test', tags: [Tag.DESIGN] }} />
                <CreationLarge right creation={{ name: 'ryoko', description: 'test', tags: [Tag.DESIGN] }} />
            </section>
        </Page>
    )
}