import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Stypes() {
    return (
        <Types title="Special Types" id="stypes" cformat="stype">
            <p className="desc fst-italic">Special types stem from the <a href="/docs/symbols#brackets">designated special blocks</a> which are a collection (not as in <code className="miniBlock px-1">arr : coll</code>) of syntactic exceptions. Some of these blocks are associated (designated) to a built-in Bytl type which value is represented within curly braces type-indicated with a prepended specifying character. Additionally, special blocks can be chained by prepending more than one specifying character before the curly braces.</p><br />
            <p className="fs-5 desc fw-bold">Cmacro Special Type</p>
            <Bytl>
                int x = rnd 1 3 <br />
                cmacro ix = c{"{ if x == }"} <br />
                ix 1 &gt;&gt; "one" <br />
                ^^ acts as 'if x == 1' <br />
                e ix 2 &gt;&gt; "two" <br />
                ^^ acts as 'eif x == 2' <br />
                e ix 3 &gt;&gt; "three"
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">cmacro</code> special type stands for 'code macro' and is the most powerful method to eliminate redundance in code. The code example above shows the piece of code <code className="miniBlock px-1">if x ==</code> being reused to limit redundancy as much as possible. This specific special type requires a 'c' to be prepended to the curly braces as that is the character representing the 'code' special block.</p>
            <Bytl>
                cmacro min1 = c{"{, {$ _ len > 0}?? }"} <br />
                alg
            </Bytl><br />

            <p className="fs-5 desc fw-bold">UOM Special Type</p>
            <Bytl>
                num.uom kg = u{"{ 1kg }"} <br />
                num.uom g = u{"{ 1g }"} <br />
                &gt;&gt; \(kg + g) \(kg + g) _ unit "g" <br />
                ^^ Prints 1.001kg 1001g <br /><br />

                num.uom N = u{"{ 3N }"} <br />
                num.uom s = u{"{ 1s }"} <br />
                num.uom W = u{"{ 2W }"} <br />
                &gt;&gt; N * s / W <br />
                ^^ Prints 1.5kg•m/(s•W)
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">uom</code> special type stands for 'unit of measurement' and takes any mathematical expression, but with the ability to incorporate units (it is a ktype of <code className="miniBlock px-1">num</code> because the value is still a number, printing just includes units). Only <a href="https://en.wikipedia.org/wiki/International_System_of_Units" target="_blank">SI units</a> are accepted and any potential simplifications (e.g. N to kg*m/s^2) will be made. If any units that cannot sum are added or subtracted (e.g. kg + Hz) then a <code className="miniBlock px-1">InvalidUnitSum</code> Parsing Exception will be thrown. The output will always be in the simplest units possible unless otherwise specified by the <code className="miniBlock px-1">unit</code> method.</p>
        </Types>
    )
}