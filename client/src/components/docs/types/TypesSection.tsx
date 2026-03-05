import React from "react"
import { Section } from "../Section"
import Ptypes from "./Ptypes"
import Subtypes from "./Subtypes"
import Rtypes from "./Rtypes"
import Ftypes from "./Ftypes"
import Atypes from "./Atypes"
import Stypes from "./Stypes"
import Gtypes from "./Gtypes"
import Ktypes from "./Ktypes"
import Etypes from "./Etypes"
import Complex from "./Complex"

export const TypesSection = () => {
    const types = React.useRef<HTMLDivElement | null>(null);
    const data: HTMLDivElement = types.current!;
    // module.exports = { data };

    return (
        <Section ref={types} title="Types" next="/docs/symbols" desc="The Types section provides complete information on how to handle types in Bytl, while also acting as a reference for type classification. The section additionally covers every type with code examples on how to use it provided with a short explanation.">
            <Ptypes />
            <Subtypes />
            <Rtypes />
            <Ftypes />
            <Atypes />
            <Stypes />
            <Gtypes />
            <Ktypes />
            <Etypes />
            <Complex />
        </Section>
    )
}