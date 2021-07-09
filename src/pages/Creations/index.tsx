import './creations.scss';
import Page from 'components/layout/Page';
import Heading from 'components/ui/Heading'
import TagComponent from 'components/ui/Tag';
import TextInput from 'components/ui/TextInput';
import { useState, useEffect } from 'react';
import CreationComponent from 'components/ui/Creation';
import useCreations from 'data/CreationsContext';
import { Creation, Tag } from 'data/common';

export default function Creations(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [hiddenTags, setHiddenTags] = useState<number[]>([]);
    const allCreations = useCreations();
    const [shownCreations, setShownCreations] = useState<Creation[]>([]);

    useEffect(() => {
        setShownCreations(allCreations);
    }, [allCreations]);

    useEffect(() => {
        setShownCreations(allCreations.filter(c => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0))
    }, [searchTerm, allCreations]);

    useEffect(() => {
        setShownCreations(allCreations.filter(c => !c.tags.every(t => hiddenTags.some(ht => ht === t.id))))
    }, [hiddenTags, allCreations]);

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
                            <div className="filter-container">
                                <TextInput label="Search" name="search" defaultValue={searchTerm} onChange={setSearchTerm} />
                                <div className="filter-tags">
                                    {
                                        Tag.all.map((tag, i) => (
                                            <div
                                                className={'filter-item' + (hiddenTags.indexOf(tag.id) >= 0 ? ' inactive' : '')}
                                                onClick={() => setHiddenTags(
                                                    state => {
                                                        if (state.indexOf(tag.id) >= 0) {
                                                            return state.filter(t => t !== tag.id);
                                                        } else {
                                                            return [...state, tag.id];
                                                        }
                                                    }
                                                )}>
                                                <TagComponent tag={tag} key={i} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="creation-list">
                    <div className="row">
                        {
                            shownCreations.map((creation, i) => (
                                <CreationComponent creation={creation} key={creation.id} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </Page >
    )
}