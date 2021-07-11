import './default-preview-section.scss';
import Image from 'components/ui/Image';

export default function DefaultPreviewSection({ images }: { images: string[] }) {
    return <section className="preview-section phone-mockups portfolio-items">
        <div className="content-container">

            <div className="row">
                {
                    images.map((image, i) => (
                        <div className="portfolio-item column large-4 medium-6" key={i}>
                            <Image src={'/previews/' + image} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
}