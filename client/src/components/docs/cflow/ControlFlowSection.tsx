import React from "react";
import { Section } from "../Section"
import Conditions from "./Conditions"
import Loops from "./Loops";
import Regressions from "./Regressions";
import Termination from "./Termination";

export const ControlFlowSection = () => {
    const cflow = React.useRef<HTMLDivElement | null>(null);

    return (
        <Section ref={cflow} title="Control Flow" prev="/docs/methods" next="/docs/neural" desc="The Control Flow section goes over the different ways to run dynamic code within a program mainly through different types of loops and conditionals.">
            <Conditions />
            <Loops />
            <Regressions />
            <Termination />
        </Section>
    )
}