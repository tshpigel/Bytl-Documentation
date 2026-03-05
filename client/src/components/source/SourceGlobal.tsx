import React from "react";
import { Section } from "../docs/Section";
import { Bytl } from "../Bytl";

export const SourceGlobal = () => {
    const source = React.useRef<HTMLDivElement | null>(null);

    return (
        <Section ref={source} title="Global" next="/source/number" desc="">
            <Bytl ts>
                type context = {"{"}<br />
                    &nbsp;&nbsp;C0: () =&gt; void, <br />
                    &nbsp;&nbsp;Dtype: (v: D.Val) =&gt; D.Sc, <br />
                    &nbsp;&nbsp;Ktype: (v: D.Val) =&gt; D.Vect&lt;[{"{ main: 'String' }"}]&gt;, <br />
                    &nbsp;&nbsp;Args: (p: D.Proc&lt;[D.Sub]&gt;) =&gt; D.Val[],
                <br />{"}"}
            </Bytl>
            <p className='desc fst-italic'>Global methods are the only type of procedures that are implemented in TypeScript rather than Bytl as their functionality can only be made using the source TypeScript code used for the language development. They also represent the highest level Bytl <a href="/docs/context">context</a> as they are within the <code className="miniBlock px-1">glob</code> relative.</p><br />
            <p className="fs-5 desc fw-bold">Adjust Method <code className="miniBlock px-1">Adj()</code></p>
            <Bytl ts>
                let x: number = 5; <br />
                // call(x)
            </Bytl>
            <p className="fs-5 desc fw-bold">Alias Method <code className="miniBlock px-1">Alias()</code></p>
            <Bytl ts>
                let x: number = 5;
            </Bytl>
            <p className="fs-5 desc fw-bold">Argumentate Method <code className="miniBlock px-1">Args()</code></p>
            <Bytl ts>
                let x: number = 5;
            </Bytl>
            <p className="fs-5 desc fw-bold">Augment Method <code className="miniBlock px-1">Augment()</code></p>
            <Bytl ts>
                let x: number = 5;
            </Bytl>
            <p className="fs-5 desc fw-bold">Code Exit Method <code className="miniBlock px-1">C0()</code></p>
            <Bytl ts>
                () =&gt; Deno.exit(0)
            </Bytl>
        </Section>
    )
}