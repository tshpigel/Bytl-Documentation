import React from 'react'
import { Dropdown } from '../components/Dropdown'
import { Sidebar } from '../components/Sidebar'
import { Outlet, useOutletContext, Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import * as Icon from 'react-bootstrap-icons'
import { useEffect, useRef } from 'react'
// import { data } from '../components/docs/types/TypesSection'

export default function Source() {
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
                    <Dropdown title="Global">
                        <span><HashLink smooth to="/source/global#adj" className="mt-1 nav-link">Adjust</HashLink></span>
                        <span><HashLink smooth to="/source/global#alias" className="mt-1 nav-link">Alias</HashLink></span>
                        <span><HashLink smooth to="/source/global#args" className="mt-1 nav-link">Argumentate</HashLink></span>
                        <span><HashLink smooth to="/source/global#augment" className="mt-1 nav-link">Augment</HashLink></span>
                        <span><HashLink smooth to="/source/global#c0" className="mt-1 nav-link">Code Exit</HashLink></span>
                        <span><HashLink smooth to="/source/global#coerce" className="mt-1 nav-link">Coerce</HashLink></span>
                        <span><HashLink smooth to="/source/global#dtype" className="mt-1 nav-link">Data Type</HashLink></span>
                        <span><HashLink smooth to="/source/global#enable" className="mt-1 nav-link">Enable</HashLink></span>
                        <span><HashLink smooth to="/source/global#event" className="mt-1 nav-link">Eventify</HashLink></span>
                        <span><HashLink smooth to="/source/global#ktype" className="mt-1 nav-link">Kinetype</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Number">
                        <span><HashLink smooth to="/source/number#ceil" className="mt-1 nav-link">Ceiling</HashLink></span>
                        <span><HashLink smooth to="/source/number#fix" className="mt-1 nav-link">Fix</HashLink></span>
                        <span><HashLink smooth to="/source/number#floor" className="mt-1 nav-link">Floor</HashLink></span>
                        <span><HashLink smooth to="/source/number#round" className="mt-1 nav-link">Round</HashLink></span>
                        <span><HashLink smooth to="/source/number#trunc" className="mt-1 nav-link">Truncate</HashLink></span>
                    </Dropdown>
                    <Dropdown title="String">
                        <span><HashLink smooth to="/source/string#ascii" className="mt-1 nav-link">ASCII</HashLink></span>
                        <span><HashLink smooth to="/source/number#index" className="mt-1 nav-link">Index Of</HashLink></span>
                        <span><HashLink smooth to="/source/number#has" className="mt-1 nav-link">Has</HashLink></span>
                        <span><HashLink smooth to="/source/number#lcase" className="mt-1 nav-link">Lowercase</HashLink></span>
                        <span><HashLink smooth to="/source/number#len" className="mt-1 nav-link">Length</HashLink></span>
                        <span><HashLink smooth to="/source/number#occur" className="mt-1 nav-link">Occurrence</HashLink></span>
                        <span><HashLink smooth to="/source/number#rep" className="mt-1 nav-link">Repeat</HashLink></span>
                        <span><HashLink smooth to="/source/number#split" className="mt-1 nav-link">Split</HashLink></span>
                        <span><HashLink smooth to="/source/number#ucase" className="mt-1 nav-link">Uppercase</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Array">
                        <span><HashLink smooth to="/source/array#fat" className="mt-1 nav-link">Fatten</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Math">
                        <span><HashLink smooth to="/source/math#stat" className="mt-1 nav-link">Statistics</HashLink></span>
                        <span><HashLink smooth to="/source/math#trig" className="mt-1 nav-link">Trigonometry</HashLink></span>
                        <span><HashLink smooth to="/source/math#chem" className="mt-1 nav-link">Chemistry</HashLink></span>
                        <span><HashLink smooth to="/source/math#phys" className="mt-1 nav-link">Physics</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Random">
                        <span><HashLink smooth to="/source/rnd#int" className="mt-1 nav-link">Integer</HashLink></span>
                    </Dropdown>
                    <Dropdown title="Time">
                        <span><HashLink smooth to="/source/time#runt" className="mt-1 nav-link">Runtime</HashLink></span>
                    </Dropdown>
                </nav>
            </Sidebar>
            <div className="content">The source section is structured identically to the <a href="/docs">documentation</a> section but instead contains a commented version of the source code (Bytl and TypeScript) for all methods and relatives defined in the language. Unlike the documentation, the source section displays each section as a code block which does not include further comments or descriptions about the method/relative. Information such as that is found in the documentation instead and each method will have a link towards its description in the documentation and vice versa.</div>
            <div ref={mainRef}>
                <Outlet/>
            </div>
        </>
    )
}