import './creations.scss';
import Page from 'components/layout/Page';
import Heading from 'components/ui/Heading'
import CreationComponent from 'components/ui/Creation';
import { Tag } from 'data/common';

export default function Creations(): JSX.Element {
    return (
        <Page className="creations-page">
            <div className="content-container">
                <section className="heading-section">
                    <div className="row">
                        <div className="column large-8">
                            <Heading heading="My creations" size="xlarge" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sit viverra eget scelerisque nisl ut turpis porttitor.
                                Viverra quis vivamus potenti est. Blandit dictumst non nunc tellus, elementum.
                                Cras sit tempus nec mauris.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="creation-list">
                    <div className="row">
                        <CreationComponent creation={{ name: 'name', description: 'Some desc', tags: [Tag.DEVELOPMENT] }} />
                    </div>
                </section>
            </div>
        </Page >
    )
}