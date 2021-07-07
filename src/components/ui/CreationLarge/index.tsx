import './creation-item.scss';
import { Creation } from 'data/common';
import Heading from 'components/ui/Heading';
import Tag from 'components/ui/Tag';
import Button from 'components/ui/Button';

interface Props {
    creation: Creation;
    left?: boolean;
}

export default function CreationLarge({ creation, left }: Props): JSX.Element {
    return (
        <div className="content-container">
            <div className="creation-item-large">
                <div className="row bottom">
                    <div className={'column medium-6 large-7 ' + (left ? 'order-large-3' : '')}>
                        <div className="image"></div>
                    </div>
                    <div className="column medium-6 large-5">
                        <div className="creation-content">
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
                            <Heading heading={creation.name} size="small" />
                            <p>
                                {creation.description}
                            </p>
                            <div className="button-container">
                                <Button>
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}