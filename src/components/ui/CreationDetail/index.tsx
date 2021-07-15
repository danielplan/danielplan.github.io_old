import './creation-detail.scss';
import { CreationDetail as ICreationDetail } from 'data/common';

interface Props {
    detail: ICreationDetail
}

export default function CreationDetail({ detail }: Props) {

    const inner = (<div className="inner">
        <div className="icon-container">
            <span className={'icon uil uil-' + detail.icon}>
            </span>
        </div>
        <div className="text-container">
            <div className="title">{detail.title}</div>
            {
                detail.label && (
                    <div className="label">{detail.label}</div>
                )
            }
        </div>
    </div>
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