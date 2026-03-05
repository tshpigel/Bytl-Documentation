import React from 'react'
import { useState, FC, ReactElement, ReactNode, useRef } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Collapse } from 'react-collapse'
import { useLocation } from 'react-router-dom'

interface CollapseProps {
    title: string,
    rotation?: 0 | 90,
    children?: ReactNode
}

export const Dropdown: FC<CollapseProps> = (props: CollapseProps): ReactElement => {
    const [isOpened, setOpen] = useState(false);
    const title = useRef<HTMLAnchorElement>(null);
    const line = useRef<HTMLDivElement>(null);
    function linkClick() {
        setOpen(!isOpened);
        title.current?.classList.toggle('sel');
        line.current?.classList.toggle('selShow');
    }
    const loc = useLocation();
    const pathdir = (loc.pathname.match(/^\/docs\/([a-z]+).*/) ?? [])[1];
    const check = props.title.toLowerCase() === pathdir || 
                    props.title === 'Control Flow' && pathdir === 'cflow'; // account for 'cflow' name instead of 'control flow' which is same as title

    return (
        <>
            <span ref={title} className={(check ? 'sectSelHov' : '') + ' fc hov ms-2 mt-3 px-3 fs-5'} onClick={linkClick}>
                <a style={{ cursor: 'pointer' }} className={(check ? 'sectSel' : '') + " nl p-2"}>{ props.title }</a>
            </span>
            <Collapse isOpened={isOpened}>
                <div className="mt-1 ms-2 px-4">
                    { props.children }
                </div>
            </Collapse>
            <div ref={line} className='mt-3' style={{ borderTop: '1px solid grey', opacity: 0.4 }}></div>
        </>
    )
}