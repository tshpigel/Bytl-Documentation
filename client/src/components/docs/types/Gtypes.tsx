import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Gtypes() {
    return (
        <Types title="Ghost Types" id="gtypes" cformat="gtype">
            <p className="desc fst-italic">Ghost types are unassignable types, meaning they cannot be used in variable assignment and therefore cannot be used on the RHS of an assigment. Instead they are only permitted in reference, which includes procedure arguments.</p><br />
            <p className="fs-5 desc fw-bold">Type Class Ghost Type</p>
            <Bytl>
                dtype intAlias = int <br />
                ^^ invalid code
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">dtype</code> ghost type represents</p>
        </Types>
    )
}