import React from "react";
import { Section } from "../Section"
import Global from "./Global"
import Number from "./Number";
import String from "./String";
import Array from "./Array";

export const MethodsSection = () => {
    const methods = React.useRef<HTMLDivElement | null>(null);

    return (
        <Section ref={methods} title="Methods" prev="/docs/relatives" next="/docs/cflow" desc="The Methods section provides the minimum explanation for every method, categorized by their types; the source code for all methods can be found in the 'Source' tab in the top bar.">
            <Global />
            <Number />
            <String />
            <Array />
        </Section>
    )
}