import './heading.scss';

interface Props {
    heading: string;
}

export default function Heading({ heading }: Props): JSX.Element {
    return (
        <header className="heading-container">
            <h2 className="heading large">{heading}<span className="text-secondary">.</span></h2>
        </header>
    );
}