import './home.scss';
import Page from 'components/layout/Page';
import Logo from 'components/svg/Logo';
import Heading from 'components/ui/Heading';
import CreationLarge from 'components/ui/CreationLarge';
import useCreations from 'data/CreationsContext';
import Button from 'components/ui/Button';
import { Helmet } from 'react-helmet';

export default function Home(): JSX.Element {
    const allCreations = useCreations();
    return (
        <Page className="home-page" withoutMargin>
            <Helmet>
                <title>Hey I'm daniel plan</title>
                <meta name="description" content="I’m a 20 year old computer science student focused on web development, design and photography." />
            </Helmet>
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

            <section className="background-primary me-section section-wrapper">
                <div className="content-container">
                    <div className="row center">
                        <div className="column large-8">
                            <p className="lead">
                                I’m a <strong>20 year old computer science student</strong> focused on web development, design and photography.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-wrapper">
                <div className="content-container creations-header">
                    <div className="row">
                        <div className="column large-6">
                            <Heading heading="My creations" size="xlarge" />
                            <p>
                                Here are some of the projects I have been working on recently.
                                If you like what you are seeing, just click on the button below, there is even more.
                            </p>
                            <Button route="/creations">
                                All creations...
                            </Button>
                        </div>
                    </div>
                </div>
                {
                    allCreations.slice(0, 3).map((creation, i) => (
                        <CreationLarge left={i % 2 === 0} creation={creation} key={i} />
                    ))
                }
            </section>
        </Page>
    )
}