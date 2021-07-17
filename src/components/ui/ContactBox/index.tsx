import './contact-box.scss';

interface Props {
    color: string;
    href: string;
    icon: string;
    title: string;
    label: string;
}

export default function ContactBox({ color, href, title, icon, label }: Props): JSX.Element {
    return <a href={href} className="contact-box" style={{ background: color }} target="_blank" rel="noreferrer">
        <i className={'icon uil uil-' + icon}></i>
        <span className="title">{title}</span>
        <span className="label">{label}</span>
    </a>
}