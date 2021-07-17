import './creations.scss';
import Page from 'components/layout/Page';
import TagComponent from 'components/ui/Tag';
import TextInput from 'components/ui/TextInput';
import { useState, useEffect } from 'react';
import CreationComponent from 'components/ui/Creation';
import useCreations from 'data/CreationsContext';
import { Creation, Tag } from 'data/common';
import Heading from 'components/ui/Heading';

export default function Creations(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filterTags, setFilterTags] = useState<number[]>([]);
    const allCreations = useCreations();
    const [shownCreations, setShownCreations] = useState<Creation[]>([]);

    useEffect(() => {
        setShownCreations(allCreations);
    }, [allCreations]);

    useEffect(() => {
        setShownCreations(allCreations.filter(c => c.general.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0))
    }, [searchTerm, allCreations]);

    useEffect(() => {
        if (filterTags.length) {
            setShownCreations(allCreations.filter(c => c.general.tags.some(t => filterTags.some(ht => ht === t.id))))
        } else {
            setShownCreations(allCreations);
        }
    }, [filterTags, allCreations]);

    return (
        <Page className="creations-page">
            <div className="content-container">
                <section className="heading-section">
                    <div className="row">
                        <div className="column large-6">
                            <h1 className="heading xlarge">
                                My creations
                                <span className="text-secondary">
                                    .
                                </span>
                            </h1>
                            <p>
                                Here you can see all of the projects I have been working on. By clicking
                                on one of them you can find out more about it.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="filter-section background-light">
                <div className="content-container">

                    <div className="row">
                        <div className="column large-6">
                            <Heading heading="Let's have a look" size="small" />
                            <p>
                                Down below you can find a list of all of my creations. Here you can filter 
                                them by tags or search for a specific creation by its name.
                            </p>
                            <div className="filter-container">
                                <TextInput search name="search" defaultValue={searchTerm} onChange={setSearchTerm} />
                                <div className="filter-tags">
                                    {
                                        Tag.all.map((tag) => (
                                            <div
                                                key={tag.id}
                                                className={'filter-item' + (filterTags.indexOf(tag.id) >= 0 ? ' active' : '')}
                                                onClick={() => setFilterTags(
                                                    state => {
                                                        if (state.indexOf(tag.id) >= 0) {
                                                            return state.filter(t => t !== tag.id);
                                                        } else {
                                                            return [...state, tag.id];
                                                        }
                                                    }
                                                )}>
                                                <TagComponent tag={tag} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="content-container">
                <section className="creation-list">
                    <div className="row">
                        {
                            shownCreations.map((creation) => (
                                <CreationComponent creation={creation} key={creation.general.id} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </Page >
    )
}