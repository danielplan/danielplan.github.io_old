import Page from 'components/layout/Page';
import { Creation } from 'data/common';
import useCreations from 'data/CreationsContext';
import { useState, useEffect } from 'react';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import { useParams } from 'react-router-dom';
import './creations-detail.scss';
import CreationDetail from 'components/ui/CreationDetail';


interface Params {
    slug: string;
}

export default function Detail() {
    const { slug } = useParams<Params>();
    const allCreations = useCreations();
    const [creation, setCreation] = useState<Creation>();

    useEffect(() => {
        setCreation(allCreations.find(c => c.slug === slug))
    }, [allCreations, slug])
    if (creation) {
        return (
            <Page className="creations-detail-page">
                <section className="section-wrapper head-section">
                    <div className="content-container">
                        <div className="row">
                            <div className="column large-6">
                                {
                                    creation.tags.length > 0 && (
                                        <div className="tag-container">
                                            {
                                                creation.tags.map(t => (
                                                    <Tag tag={t} key={t.id} />
                                                ))
                                            }
                                        </div>
                                    )
                                }
                                <Heading heading={creation.name} size="xlarge" />
                                <p className="lead">
                                    {creation.description}
                                </p>
                            </div>
                            <div className="column large-6">
                                <div className="image-container">
                                    <div className="image" style={{ backgroundImage: 'url(/thumbnails/' + creation.thumbnail + ')' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    creation.detailHeading && (

                        <section className="section-wrapper background-light detail-section">
                            <div className="content-container">
                                <div className="row">
                                    <div className="column large-6">
                                        <Heading heading={creation.detailHeading} size="small" />
                                        {
                                            creation.detailText && (
                                                <p>
                                                    {creation.detailText}
                                                </p>
                                            )
                                        }
                                        {
                                            creation.details && creation.details.length > 0 &&
                                            (
                                                <div className="creation-details">
                                                    {
                                                        creation.details.map((d, i) => (
                                                            <CreationDetail detail={d} key={i} />
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </Page>)
    }
    return <Page className="creations-detail-page">
        Loading
    </Page>
}