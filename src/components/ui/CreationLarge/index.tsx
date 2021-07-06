import './creation-item.scss';
import { Creation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import Button from 'components/ui/Button';

interface Props {
    creation: Creation
}

export default function CreationLarge({ creation }: Props): JSX.Element {
    return (
        <div className="creation-item-large content-container">
            <div className="row">
                <div className="column large-5">
                    <div className="tag-container">
                        {
                            creation.tags.map(t => (
                                <Tag tag={t} />
                            ))
                        }
                    </div>
                    <Heading heading={creation.name} size="small" />
                    <p>
                        {creation.description}
                    </p>
                    <Button>
                        Learn more
                    </Button>
                </div>
                <div className="column large-7">

                </div>
            </div>
        </div>
    );
}