import './creation.scss';
import { Creation as ICreation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';

interface Props {
    creation: ICreation
}

export default function Creation({ creation }: Props): JSX.Element {
    return (
        <div className="column medium-6 large-4">
            <div className="creation-item">
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
                    <p>
                        {creation.description}
                    </p>
                </div>
            </div>
        </div>
    )
}