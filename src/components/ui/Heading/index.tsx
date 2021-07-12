import './heading.scss';

interface Props {
    heading: string;
    size?: 'large' | 'xlarge' | 'small' | 'tiny';
}

export default function Heading({ heading, size }: Props): JSX.Element {
    return (
        <header className={'heading-container ' + (size ?? '')}>
            <h2 className={'heading ' + (size ?? 'large')}>
                {heading}
                <span className="text-secondary">.</span>
            </h2>
        </header>
    );
}