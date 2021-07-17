import { Tag as ITag } from 'data/common';
import './tag.scss';

interface Props {
    tag?: ITag;
    text?: string;
    color?: string;
}

export default function Tag({ tag, text, color }: Props): JSX.Element {
    return (
        <div className={'tag theme-' + (tag ? tag?.color : color ?? '')}>
            {tag ? (
                tag.name
            ) : (
                text ?? ''
            )}
        </div>
    );
}