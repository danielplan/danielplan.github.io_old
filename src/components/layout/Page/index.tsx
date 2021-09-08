import { ReactNode } from 'react';
import './page.scss';

interface Props {
    className?: string;
    children: ReactNode;
    withoutMargin?: boolean;
}

export default function Page({ className, children, withoutMargin }: Props): JSX.Element {
    return (
        <main className={'page-container ' + (withoutMargin ? 'without-margin ' : '') + (className ?? '')}>
            {children}
        </main>
    )
}