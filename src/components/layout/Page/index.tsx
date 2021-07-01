import { ReactNode } from 'react';
import './page.scss';

interface Props {
    className?: string;
    children: ReactNode;
}

export default function Page({ className, children }: Props): JSX.Element {
    return (
        <main className={'page-container ' + (className ?? '')}>
            {children}
        </main>
    )
}