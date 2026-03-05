import { Bytl } from "../../Bytl"
import ControlFlow from "./ControlFlow"
import { HashLink } from 'react-router-hash-link'

export default function Termination() {
    return (
        <ControlFlow title="Code Termination" id="termination" keyword="C0">
            <p className="desc fst-italic">Code termination </p><br />
            <p className="fs-5 desc fw-bold">Ceiling Number Method <code className="miniBlock px-1">alg[int] dec_ceil</code></p>
            <Bytl>
            </Bytl>
            <p className="desc"></p>
        </ControlFlow>
    )
}