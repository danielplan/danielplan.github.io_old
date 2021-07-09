import './creation-detail.scss';
import { CreationDetail as ICreationDetail } from 'data/common';

interface Props {
    detail: ICreationDetail
}

export default function CreationDetail({ detail }: Props) {

    const inner = (<>
        <span className="material-icons">
            {detail.icon}
        </span>
        <div className="title">{detail.title}</div>
        {
            detail.label && (
                <div className="label">{detail.label}</div>
            )
        }
    </>
    )

    if (detail.link) {
        return (
            <a href={detail.link} className="creation-detail-box">
                {inner}
            </a>
        )

    }
    return (
        <div className="creation-detail-box">
            {inner}
        </div>
    )
}