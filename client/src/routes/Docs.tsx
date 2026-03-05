import React from 'react'
import { Dropdown } from '../components/Dropdown'
import { Sidebar } from '../components/Sidebar'
import { Outlet, useOutletContext, Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as Icon from 'react-bootstrap-icons'
import { useEffect, useRef } from 'react'
// import { data } from '../components/docs/types/TypesSection'

export default function Docs() {
    const thresholdArray = (steps: number) => Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0)

    const intercall = (entries: IntersectionObserverEntry[]): void => {
        let prevY = 0;
        let prevRatio = 0;

        const hashes = [
            "ptypes",
            "subtypes",
            "rtypes",
            "ftypes",
            "atypes",
            "stypes",
            "gtypes",
            "ktypes",
            "etypes",
            "vfilters",
            "complex"
        ];

        entries.forEach(e => {
            const curY = e.boundingClientRect.y;
            const curRatio = e.intersectionRatio;
            const intsc = e.isIntersecting;

            if(e.boundingClientRect.top < 0 && intsc) console.log('hi');
            else if (e.boundingClientRect.top > 0 && intsc) console.log('bye');
            if(intsc) {
                const el = e.target as HTMLHeadingElement;
                window.location.href = `#${el.id}`;
            }

            prevY = curY;
            prevRatio = curRatio;
        });
    };
    const IO = new IntersectionObserver(intercall, {
        rootMargin: "10px",
        threshold: thresholdArray(20)
    });
    const mainRef = React.useRef<HTMLDivElement | null>(null);
    // useEffect(() => {
    //     const mainEl = mainRef.current!;
    //     const els = mainEl.querySelectorAll("h3");
    //     for(const e of els) 
    //         IO.observe(e);
    // }, [mainRef]);
    
    return (
        <>
            <Sidebar>
                <nav className="main">
                    <Dropdown title="Types">
                        <span><HashLink smooth to="/docs/types" className="mt-1 nav-link">Primitive</HashLink></span>
                        <span><HashLink smooth to="/docs/types#subtypes" className="mt-1 nav-link">Sub</HashLink></span>
                        <span><HashLink smooth to="/docs/types#rtypes" className="mt-1 nav-link">Reference</HashLink></span>
                        <span><HashLink smooth to="/docs/types#ftypes" className="mt-1 nav-link">Functional</HashLink></span>
                        <span><HashLink smooth to="/docs/types#atypes" className="mt-1 nav-link">Accessory</HashLink></span>
                        <span><HashLink smooth to="/docs/types#stypes" className="mt-1 nav-link">Special</HashLink></span>
                        <span><HashLink smooth to="/docs/types#gtypes" className="mt-1 nav-link">Ghost</HashLink></span>
                        <span><HashLink smooth to="/docs/types#ktypes" className="mt-1 nav-link">Kinetic</HashLink></span>
                        <span><HashLink smooth to="/docs/types#etypes" className="mt-1 nav-link">Encapsulating</HashLink></span>
                        <span><HashLink smooth to="/docs/types#complex" className="mt-1 nav-link">Complex</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Symbols">
                        <span><HashLink smooth to="/docs/symbols" className="mt-1 nav-link">Comments</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#assignment" className="mt-1 nav-link">Assignment</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#procedures" className="mt-1 nav-link">Procedures</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#logic" className="mt-1 nav-link">Logic</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#accessing" className="mt-1 nav-link">Accessing</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#math" className="mt-1 nav-link">Math Operations</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#brackets" className="mt-1 nav-link">Brackets</HashLink></span>
                        <span><HashLink smooth to="/docs/symbols#misc" className="mt-1 nav-link">Miscellaneous</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Relatives">
                        <span><HashLink smooth to="/docs/relatives" className="mt-1 nav-link">Context</HashLink></span>
                        <span><HashLink smooth to="/docs/relatives#properties" className="mt-1 nav-link">Properties</HashLink></span>
                        <span><HashLink smooth to="/docs/relatives#encapsulation" className="mt-1 nav-link">Encapsulation</HashLink></span>
                        <span><HashLink smooth to="/docs/relatives#bcreation" className="mt-1 nav-link">Basic Creation</HashLink></span>
                        <span><HashLink smooth to="/docs/relatives#acreation" className="mt-1 nav-link">Advanced Creation</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Methods">
                        <span><HashLink smooth to="/docs/methods" className="mt-1 nav-link">Global</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#num" className="mt-1 nav-link">Number</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#sc" className="mt-1 nav-link">String</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#arr" className="mt-1 nav-link">Array</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#assoc" className="mt-1 nav-link">Association</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#ambg" className="mt-1 nav-link">Ambiguous</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#exc" className="mt-1 nav-link">Exception</HashLink></span>
                        <span><HashLink smooth to="/docs/methods#regex" className="mt-1 nav-link">Regular Expression</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Control Flow">
                        <span><HashLink smooth to="/docs/cflow" className="mt-1 nav-link">Loops</HashLink></span>
                        <span><HashLink smooth to="/docs/cflow#conditions" className="mt-1 nav-link">Conditions</HashLink></span>
                        <span><HashLink smooth to="/docs/cflow#regress" className="mt-1 nav-link">Regressions</HashLink></span>
                        <span><HashLink smooth to="/docs/cflow#terminate" className="mt-1 nav-link">Termination</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Neural Net">
                        <span><HashLink smooth to="/docs/neurlw" className="mt-1 nav-link">Classes</HashLink></span>
                    </Dropdown>
                </nav>
            </Sidebar>
            <div className="content">The Bytl Documentation is not a normal documentation in the sense that its information is conveyed in a heavily simplified form. This tab is broken up into each main section of the language, provided by subsections</div>
            <div ref={mainRef}>
                <Outlet/>
            </div>
        </>
    )
}