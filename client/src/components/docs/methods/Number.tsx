import { Bytl } from "../../Bytl"
import Methods from "./Methods"
import { HashLink } from 'react-router-hash-link'

export default function Number() {
    return (
        <Methods title="Number Methods" id="num" cformat="num">
            <p className="desc fst-italic">Number methods are </p><br />
            <p className="fs-5 desc fw-bold">Ceiling Number Method <code className="miniBlock px-1">alg[int] dec_ceil</code></p>
            <Bytl>
                dec a = 5.2 <br />
                dec b = 5.8 <br /><br />

                &gt;&gt; a _ ceil b _ ceil <br />
                ^^ Prints 6 twice
            </Bytl>
            <p className="desc">The number ceiling method requires a decimal on the left hand side, and returns the next integer, essentially rounding up.</p>
            <br />
            <p className="fs-5 desc fw-bold">Fix Number Method <code className="miniBlock px-1">alg[dec]&lt;int.usn amount&gt; num_fix</code></p>
            <Bytl>
                num a = 4 <br />
                num b = math # pi <br /><br />

                &gt;&gt; \(a _ fix 3) \(b _ fix 3) <br />
                ^^ Prints 4.000 3.141
            </Bytl>
            <p className="desc">The number fix method can take any type of number on the left hand side, but requires a positive integer argument specifying the number of decimal places to cut off the number at (it will not round the number). If the number being fixed has less decimal places than the fix amount, then the appropriate number of 0s will be added to reach the fix amount.</p>
            <br />
            <p className="fs-5 desc fw-bold">Round Number Method <code className="miniBlock px-1">alg[num]&lt;num ?multiple&gt; num_round</code></p>
            <Bytl>
                num a = 4.5 <br />
                num b = 4.4 <br />
                &gt;&gt; \(a _ round) \(b _ round) <br />
                ^^ Prints 5 4 <br /><br />

                num c = 7 <br />
                num d = 6 <br />
                num e = 8.2 <br />
                &gt;&gt; \(c _ round 3) \(d _ round 5.4) \(e _ round 3) <br />
                ^^ Prints 6 5.4 9
            </Bytl>
            <p className="desc">The number round method defaults a left hand side decimal implicitly rounding (rounding down if the decimal is less than .5, otherwise round up), but takes an optional argument to round to the nearest multiple of a specified number. The <code className="miniBlock px-1">multiple</code> argument can be either an integer or a decimal, meaning the round function can also return a decimal if the nearest multiple is one.</p>
            <br />
            <p className="fs-5 desc fw-bold">Truncate Number Method <code className="miniBlock px-1">alg[int] dec_trunc</code></p>
            <Bytl>
                num a = 7.3 <br />
                num b = 7.6 <br /><br />

                &gt;&gt; a _ trunc b _ trunc <br />
                ^^ Prints 7 twice
            </Bytl>
            <p className="desc">The number truncate method requires a decimal on the left hand side and returns the integer portion of the decimal, essentially rounding down.</p>
        </Methods>
    )
}