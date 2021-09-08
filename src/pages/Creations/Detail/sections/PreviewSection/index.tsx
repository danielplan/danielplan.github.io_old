import { Creation, CreationPreviewStyle } from "data/common";
import DefaultPreviewSection from './styles/DefaultPreviewSection';
import PhonePreviewSection from './styles/PhonePreviewSection';
import './preview-section.scss';

export default function PreviewSection({ creation }: { creation: Creation }): JSX.Element {
    if (creation.previews && creation.previews.images) {
        switch (creation.previews.style) {
            case CreationPreviewStyle.PHONE_MOCKUPS:
                return <PhonePreviewSection images={creation.previews.images} />
            default:
                return <DefaultPreviewSection images={creation.previews.images} />
        }
    }

    return <></>
}