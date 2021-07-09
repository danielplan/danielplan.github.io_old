import Page from 'components/layout/Page';
import { Creation } from 'data/common';
import useCreations from 'data/CreationsContext';
import { useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import './creations-detail.scss';


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
        return <Page className="creations-detail-page">
            {slug}
        </Page>
    }
    return <Page className="creations-detail-page">
        Loading
    </Page>
}