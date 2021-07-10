import './creation.scss';
import { Creation as ICreation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import ShortText from 'components/helpers/ShortText';
import { Link } from 'react-router-dom';

interface Props {
    creation: ICreation
}

export default function Creation({ creation }: Props): JSX.Element {
    return (
        <div className="column medium-6 large-4">
            <Link to={'/creations/' + creation.general.slug} className="creation-item">
                <div className="image" style={{ backgroundImage: 'url(' + creation.general.thumbnail + ')' }}>
                </div>
                <div className="content">
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
                    <Heading heading={creation.general.name} size="tiny" />
                    <ShortText text={creation.general.description} length={100} />
                </div>
            </Link>
        </div>
    )
}