import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import './head-section.scss';
import { Creation } from 'data/common';
import Image from 'components/ui/Image';

export default function HeadSection({ creation }: { creation: Creation }) {

    return (<section className="section-wrapper head-section">
        <div className="content-container">
            <div className="row">
                <div className="column large-6">
                    {
                        creation.general.tags.length > 0 && (
                            <div className="tag-container">
                                {
                                    creation.general.tags.map(t => (
                                        <Tag tag={t} key={t.id} />
                                    ))
                                }
                            </div>
                        )
                    }
                    <Heading heading={creation.general.name} size="xlarge" />
                    <p className="lead">
                        {creation.general.description}
                    </p>
                </div>
                <div className="column large-6">
                    <div className="image-container">
                        <Image src={creation.general.thumbnail} />
                    </div>
                </div>
            </div>
        </div>
    </section>)
}