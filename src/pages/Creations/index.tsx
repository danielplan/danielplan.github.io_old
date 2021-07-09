import './creations.scss';
import Page from 'components/layout/Page';
import Heading from 'components/ui/Heading'
import TextInput from 'components/ui/TextInput';
import { useState } from 'react';
import CreationComponent from 'components/ui/Creation';
import useCreations from 'data/CreationsContext';

export default function Creations(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const allCreations = useCreations();

    return (
        <Page className="creations-page">
            <div className="content-container">
                <section className="heading-section">
                    <div className="row">
                        <div className="column large-6">
                            <Heading heading="My creations" size="xlarge" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sit viverra eget scelerisque nisl ut turpis porttitor.
                                Viverra quis vivamus potenti est. Blandit dictumst non nunc tellus, elementum.
                                Cras sit tempus nec mauris.
                            </p>
                            <TextInput label="Search" name="search" defaultValue={searchTerm} onChange={setSearchTerm} />
                        </div>
                    </div>
                </section>
                <section className="creation-list">
                    <div className="row">
                        {
                            allCreations.map((creation, i) => (
                                <CreationComponent creation={creation} key={creation.id} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </Page >
    )
}