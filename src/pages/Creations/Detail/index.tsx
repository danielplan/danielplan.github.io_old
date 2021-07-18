import Page from 'components/layout/Page';
import { Creation } from 'data/common';
import useCreations from 'data/CreationsContext';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './creations-detail.scss';
import HeadSection from './sections/HeadSection';
import DetailSection from './sections/DetailSection';
import PreviewSection from './sections/PreviewSection';
import { Helmet } from 'react-helmet';

interface Params {
    slug: string;
}

export default function Detail() {
    const { slug } = useParams<Params>();
    const allCreations = useCreations();
    const [creation, setCreation] = useState<Creation>();

    useEffect(() => {
        setCreation(allCreations.find(c => c.general.slug === slug))
    }, [allCreations, slug])
    if (creation) {
        return (
            <Page className="creations-detail-page">
                <Helmet>
                    <title>{creation.general.name} | daniel plan</title>
                    <meta name="description" content={creation.general.description} />
                </Helmet>
                <HeadSection creation={creation} />
                <DetailSection creation={creation} />
                <PreviewSection creation={creation} />
            </Page>)
    }
    return <Page className="creations-detail-page">
        Loading
    </Page>
}