
import Heading from 'components/ui/Heading';
import './detail-section.scss';
import { Creation } from 'data/common';
import CreationDetail from 'components/ui/CreationDetail';


export default function DetailSection({ creation }: { creation: Creation }) {
    if (creation.details?.heading || creation.details?.description) {
        return (
            <section className="section-wrapper background-light detail-section">
                <div className="content-container">
                    <div className="row">
                        <div className="column large-8">
                            {
                                creation.details.heading &&
                                <Heading heading={creation.details.heading} size="small" />
                            }
                            {
                                creation.details.description && (
                                    <p>
                                        {creation.details.description}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                    {
                        creation.details.boxes && creation.details.boxes.length > 0 &&
                        (
                            <div className="creation-details">
                                <div className="row">
                                    {
                                        creation.details.boxes.map((d, i) => (
                                            <div className="column large-3 medium-4 small-6" key={i}>
                                                <CreationDetail detail={d} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }
    return <></>
}