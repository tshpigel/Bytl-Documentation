import { LegacyRef, ReactNode } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useLayoutEffect } from "react"

interface SectionProps {
    title: string,
    children?: ReactNode,
    next?: string,
    prev?: string,
    desc: string,
    ref: LegacyRef<HTMLDivElement>
}

export const Section = (props: SectionProps) => {
    useLayoutEffect(() => window.scrollTo(0, 0));

    return (
        <div ref={props.ref} className="content">
            <h1>{props.title}</h1>
            <p className='sectDesc'>{props.desc}</p>
            <br />
            { props.children }
            { props.next ? <Link to={props.next}><button className='next'>Next Section&nbsp;&nbsp;<Icon.ArrowReturnRight/></button></Link> : '' }
            { props.prev ? <Link to={props.prev}><button className="prev"><Icon.ArrowReturnLeft/>&nbsp;&nbsp;Previous Section</button></Link> : '' }
            <div className='break'></div>
        </div>
    )
}