import { Bytl } from "../../Bytl"
import Methods from "./Methods"
import { HashLink } from 'react-router-hash-link'

export default function Array() {
    return (
        <Methods title="Array Methods" id="arr" cformat="arr">
            <p className="desc fst-italic">Array methods are </p><br />
            <p className="fs-5 desc fw-bold">Fatten Array Method <code className="miniBlock px-1">alg[arr.?md]&lt;int.usn dimension&gt; sc_fat</code></p>
            <Bytl>
                arr a = [1 2 3] <br />
                &gt;&gt; a _ fat 1 <br />
                ^^ Prints [[1] [2] [3]] <br /><br />

                arr.md b = [[1 2 3] 4 5 6 [7 8 9]] <br />
                &gt;&gt; b _ fat 1 <br />
                ^^ Prints [[[1 2 3]] [4] [5] [6] [[7 8 9]]] <br />
                &gt;&gt; b _ fat 2 <br />
                ^^ Prints [[[1] [2] [3]] 4 5 6 [[7] [8] [9]]] <br />
            </Bytl>
            <p className="desc">The fatten array method provides an extra layer to each element in the nth dimension of an array (decided by <code className="miniBlock px-1">dimension</code>). If an element is not as deep as <code className="miniBlock px-1">dimension</code> specifies, then it will be ignored by the fatten function.</p>
            <br />
        </Methods>
    )
}