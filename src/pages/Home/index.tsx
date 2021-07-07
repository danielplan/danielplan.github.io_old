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
                <div className="row center">
                    <div className="column large-8">
                        <p className="lead">
                            I’m a <strong>computer science student</strong> focused on web development and -design, as well as photography.
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
                <CreationLarge left creation={{ name: 'ryoko', description: 'test', tags: [Tag.DESIGN] }} />
            </section>
        </Page>
    )
}