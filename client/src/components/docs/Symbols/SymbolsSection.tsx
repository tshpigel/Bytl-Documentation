import React from "react";
import { Section } from "../Section"
import Comments from "./Comments"
import Assignment from "./Assignment"
import Procedures from "./Procedures"

export const SymbolsSection = () => {
    const symbols = React.useRef<HTMLDivElement | null>(null);

    return (
        <Section ref={symbols} title="Symbols" prev="/docs/types" next="/docs/relatives" desc="The Symbols section briefly explains the general uses for each special character based on context. The chapters within this section refer to the symbols which are used in the given contexts, not necessarily how to create the context.">
            <Comments />
            <Assignment />
            <Procedures />
        </Section>
    )
}