import './image.scss';
import { createPortal } from 'react-dom';
import { useState } from 'react';

interface Props {
    src: string;
}

export default function Image({ src }: Props) {
    const [openLightBox, setOpenLightBox] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);
    return <>
        <div className="light-box-container" onClick={() => setOpenLightBox(true)}>
            <span className="material-icons icon">
                zoom_in
            </span>
            <img src={src} alt="" />
        </div>
        {
            openLightBox &&
            createPortal((
                <div className={'light-box' + (animateOut ? ' go-out' : '')} onClick={() => {
                    setAnimateOut(true);
                    setTimeout(() => {
                        setOpenLightBox(false);
                        setAnimateOut(false);
                    }, 300)
                }}>
                    <img src={src} alt="" />
                </div>
            ), document.getElementById('root') ?? document.documentElement)
        }
    </>
}