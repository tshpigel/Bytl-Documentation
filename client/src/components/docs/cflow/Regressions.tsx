import { Bytl } from "../../Bytl"
import ControlFlow from "./ControlFlow"
import { HashLink } from 'react-router-hash-link'

export default function Regressions() {
    return (
        <ControlFlow title="Main Regression" id="regression" keyword="$label">
            <p className="desc fst-italic">Regressions are </p><br />
            <p className="fs-5 desc fw-bold">Ceiling Number Method <code className="miniBlock px-1">alg[int] dec_ceil</code></p>
            <Bytl>
            </Bytl>
            <p className="desc"></p>
        </ControlFlow>
    )
}