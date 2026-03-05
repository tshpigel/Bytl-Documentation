import { Bytl } from "../../Bytl"
import Relatives from "./Relatives"

export default function Basic() {
    return (
        <Relatives title="Basic" id="basic" cformat="::">
            <p className="desc fst-italic">There are two ways to create a relative: </p><br />
            <p className="fs-5 desc fw-bold">Constant Access <code>#</code></p>
            <Bytl>
                dec pi = math # pi
            </Bytl>
            <p className="desc">The hash accesses a constant from a parent relative and is one of the three methods to </p>
        </Relatives>
    )
}