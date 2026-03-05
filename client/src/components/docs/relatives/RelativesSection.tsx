import React from "react";
import { Section } from "../Section"
import Context from "./Context";

export const RelativesSection = () => {
    const relatives = React.useRef<HTMLDivElement | null>(null);

    return (
        <Section ref={relatives} title="Context" prev="/docs/symbols" next="/docs/methods" desc="The Relatives section...">
            <Context/>
        </Section>
    )
}