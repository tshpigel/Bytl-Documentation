import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Etypes() {
    return (
        <Types title="Encapsulating Types" id="etypes" cformat="etype">
            <p className="desc fst-italic">Encapsulating types are a type classification for datatypes which can supply a subtype.</p><br />
            <p className="fs-5 desc fw-bold">Array Encapsulating Type</p>
            <Bytl>
                arr[int] a = [1 2 3] <br />
                ^^ 'int' is encapsulated, 'arr' is encapsulating
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">arr</code> encapsulator</p>
        </Types>
    )
}