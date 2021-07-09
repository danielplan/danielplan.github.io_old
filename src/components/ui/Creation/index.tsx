import './creation.scss';
import { Creation as ICreation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import ShortText from 'components/ui/ShortText';
import { Link } from 'react-router-dom';

interface Props {
    creation: ICreation
}

export default function Creation({ creation }: Props): JSX.Element {
    return (
        <div className="column medium-6 large-4">
            <Link to={'/creations/' + creation.slug} className="creation-item">
                <div className="image">
                </div>
                <div className="content">
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
                    <Heading heading={creation.name} size="tiny" />
                    <ShortText text={creation.description} length={100} />
                </div>
            </Link>
        </div>
    )
}