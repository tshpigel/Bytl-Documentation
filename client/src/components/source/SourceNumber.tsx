import React from "react";
import { Section } from "../docs/Section";
import { Bytl } from "../Bytl";

export const SourceNumber = () => {
    const source = React.useRef<HTMLDivElement | null>(null);
    return (
        <Section ref={source} title="Number" prev="/source/global" next="/source/string" desc="The Number section.">
            <Bytl>
                source ::+ num&lt;glob:num n&gt; <br />
                &nbsp;&nbsp; _ ceil alg[int] <br />
                &nbsp;&nbsp; _ fix alg[dec]&lt;int.usn amount&gt; <br />
                &nbsp;&nbsp; _ floor alg[int] <br />
                &nbsp;&nbsp; _ round alg[num]&lt;num ?multiple&gt; <br />
                &nbsp;&nbsp; _ trunc alg[int] <br />
                ::
            </Bytl>
            <p className="fs-5 desc fw-bold">Ceiling Method <code className="miniBlock px-1">alg[int] dec_ceil</code></p>
            <Bytl>
                num _ ceil = (<br /> 
                &nbsp;&nbsp;rn n _ floor + 1 
                <br />)
            </Bytl>
            <p className="fs-5 desc fw-bold">Fix Method <code className="miniBlock px-1">alg[dec]&lt;int.usn amount&gt; num_ceil</code></p>
            <Bytl>
                num _ fix = (<br /> 
                &nbsp;&nbsp;rn n _ floor + 1 
                <br />)
            </Bytl>
        </Section>
    )
}