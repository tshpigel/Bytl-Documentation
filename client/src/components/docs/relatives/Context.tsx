import { Bytl } from "../../Bytl"
import Relatives from "./Relatives"

export default function Context() {
    return (
        <Relatives title="Relative Context" id="context" cformat="context">
            <p className="desc fst-italic">Context is a property for every value or variable in Bytl,</p><br />
            <p className="fs-5 desc fw-bold">Constant Access <code>#</code></p>
            <Bytl>
                dec pi = math # pi
            </Bytl>
            <p className="desc">The hash accesses a constant from a parent relative and is one of the three methods to </p>
            <br />

            <p className="fs-5 desc fw-bold">Procedure Access <code>_</code></p>
            <Bytl>
                stype:cmacro block = 
            </Bytl>
            <p className="desc">The underscore accesses a procedure from a parent relative </p>
            <br />

            <p className="fs-5 desc fw-bold">Sub-Relative Access <code>:</code></p>
            <Bytl>
                proc.lambda(math : trig _ sin \($ * 180 / math#pi)) degSin
            </Bytl>
            <p className="desc">The colon accesses a sub relative from a parent relative </p>
        </Relatives>
    )
}