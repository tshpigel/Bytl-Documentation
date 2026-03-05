import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Ktypes() {
    return (
        <Types title="Kinetic Types" id="ktypes" cformat="ktype">
            <p className="desc fst-italic">Kinetic types are not data types, but instead value modifiers and filters. The two types of ktypes are valued ktypes and functional ktypes. Valued ktypes solely affect the value of a variable with only the built in way to alter it. Functional ktypes require supplied arguments to alter the value which allows for more dynamic development.</p><br />
            <p className="fs-5 desc fw-bold">Base Kinetic Type <code className="miniBlock px-1">.base(val *ref)</code></p>
            <Bytl>
                num reference = 5 <br />
                int.base(reference) baser = 10 <br /><br />
                
                reference += 5 <br />
                ^^ reference becomes 10, baser becomes 15
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">baser</code> functional kinetype takes in a variable as a reference to alter the based variable. This concept works best with number values but essentially, any altering to the reference variable (including reassignment) will affect the based variable in the same way.</p><br />

            <p className="fs-5 desc fw-bold">Nillable Kinetic Type <code className="miniBlock px-1">.cannil</code></p>
            <Bytl>
                int.cannil i = nil <br />
                ^^ int cannot be 'nil' by default, but 'cannil' overrides that restriction
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">cannil</code> valued kinetype provides the simple functionality of allowing a variable to hold the value of <code className="miniBlock px-1">nil</code> in addition to what the rest of the complex type suggests.</p><br />

            <p className="fs-5 desc fw-bold">Constant (Immutable) Kinetic Type <code className="miniBlock px-1">.immute</code></p>
            <Bytl>
                sc.immute story = "Once upon a time..." <br />
                ^^ The story is now unchangeable <br /><br />

                story = "The End." <br />
                ^^ ImmutableReassignment Runtime Exception
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">immute</code> valued kinetype prevents a variable from changing from its original assigned value. This also applies to array pushing/popping because those methods include <a href="/docs/symbols#procedures-argmods">referenced reassignment</a>.</p><br />

            <p className="fs-5 desc fw-bold">Initial Kinetic Type <code className="miniBlock px-1">.init(val value fnc ?callback)</code></p>
            <Bytl>
                int i = 0 <br />
                int.init(6 (i++)) oneToFive = 1 <br />
                ^^ 'oneToFive' has an original value of 1, a resetting value of 6, and adds 1 to 'i' on each reset<br /><br />

                while i &lt; 3 ( <br />
        &nbsp;&nbsp;&gt;&gt; oneToFive <br />
        &nbsp;&nbsp;oneToFive++ <br />
                ) <br /><br />

                ^^ Prints 1-5 three times
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">init</code> functional kinetype sets a value for the assigned variable to reach (first argument) and if reached, then the value will reassign back to the first assigned value. The second argument is an optional callback function that will run every time the variable resets its value. Even though the ktype works best for numbers, it works with any dtype within the constraint that the variable eventually becomes the resetting value.</p><br />

            <p className="fs-5 desc fw-bold">Creation Kinetic Type <code className="miniBlock px-1">fnc.ktype(uni[dtype] types)</code></p>
            <br />

            <p className="fs-5 desc fw-bold">Lambda Kinetic Type <code className="miniBlock px-1">proc.lambda(anonm expression)</code></p>
            <Bytl>
                alg.lambda($ _ sum ^ 2) quickSumSquared <br />
                alg&lt;arr[int] array&gt; normalSumSquared = (<br />
        &nbsp;&nbsp;rn array _ sum ^ 2 <br />
                ) <br /><br />

                vect[int] array = [1 2 3 4 5] <br />
                &gt;&gt; quickSumSquared array <br />
                &gt;&gt; normalSumSquared array <br />
                ^^ both proc calls print 225
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">lambda</code> functional kinetype is a fast way to create single argumented procedures as they use anonymous procedures which do not require types. The code above shows two nearly identical ways to create an array sum squared procedure. The only difference in functionality is the <code className="miniBlock px-1">normalSumSquared</code> will disallow non-integer arrays at compile time while the former will check the argument type at runtime.</p><br />

            <p className="fs-5 desc fw-bold">Left-Hand Side Kinetic Type <code className="miniBlock px-1">proc.lhs(vect[complex] ??args)</code></p>
            <Bytl>
                proc.lhs(num left)&lt;num right&gt; times = left * right <br />
                &gt;&gt; 5 times 4 <br />
                ^^ prints 20
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">lhs</code> functional kinetype allows procedures to have left hand side arguments in addition to the right hand side arguments. Arguments within the 'lhs' block are created the exact same way as within the argument block (angle brackets) and allows any type of parameter, also the same as the argument block. They don't provide any additional functionality but could be useful in creating more readable code as with the above example. Without the <code className="miniBlock px-1">lhs</code> ktype, the code would be <code className="miniBlock px-1">times 5 4</code> which is less clear about what is happening.</p><br />

            <p className="fs-5 desc fw-bold">Multi-Dimensional Kinetic Type <code className="miniBlock px-1">arr.md(int.usn [math#inf]maxDepth)</code></p>
            <Bytl>
                arr.md(3)[int] nested = [[1 2 3] [4 5 6] [7 8 9]] <br />
                &gt;&gt; nested # depth <br />
                ^^ Prints 2 even though max depth is 3
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">md</code> functional kinetype gives arrays additional functionality surrounding the depth of a multi-dimensional array including returning the current + max depth and filtering different parts of an array based on a given depth. The argument given for the ktype represents the maximum depth the array can have, defaulting to infinity. A multi-dimensional array does not need to have the <code className="miniBlock px-1">md</code> ktype attached to it in order to be multi-dimensional, but instead provides additional functionality specifically for md arrays that would otherwise be inexistent.</p><br />

            <p className="fs-5 desc fw-bold">Overloading Kinetic Type <code className="miniBlock px-1">proc.ovld</code></p>
            <Bytl>
                fnc.ovld p = &gt;&gt; "hello world" <br />
                fnc&lt;sc s&gt; p = &gt;&gt; s <br /><br />

                p <br />
                p "goodbye world" <br />
                ^^ first prints "hello world", second prints "goodbye world"
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">ovld</code> valued kinetype allows procedures to be overloadable meaning there are different ways to call the same procedure based on how it's overloaded. If the ktype is not attached to the original assignment, then reassigning the procedure will not overload the original one, but instead throw a <code className="miniBlock px-1">DuplicateVarName</code> Parsing exception.</p><br />
            
            <p className="fs-5 desc fw-bold">Sequence Kinetic Type <code className="miniBlock px-1">arr[E].seq(anonm[E] function E ?last)</code></p>
            <Bytl>
                vect[int].seq($ + $$$[$$ - 1]) fibonacci = [0 1]
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">seq</code> functional kinetype is a unique ktype, in the sense that it can create an "infinite type" where if the <code className="miniBlock px-1">last</code> argument is not specified, the <code className="miniBlock px-1">function</code> fills every possible value of the initial array, otherwise the function will stop adding elements to the array. But setting a limit will </p><br />

            <p className="fs-5 desc fw-bold">Signed Kinetic Type <code className="miniBlock px-1">num.sn</code></p>
            <Bytl>
                int.sn n = -5 <br />
                ^^ 'n' must be less than 0
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">sn</code> valued kinetype forces a variable to have a sign beside the number (essentially be negative). Even though <code className="miniBlock px-1">+5</code> is a valid way to evaluate positive 5, and while it is technically a signed number (as there is a plus sign), the final value evaluates to just <code className="miniBlock px-1">5</code> which does not have a sign.</p><br />

            <p className="fs-5 desc fw-bold">Unsigned Kinetic Type <code className="miniBlock px-1">num.usn</code></p>
            <Bytl>
                int.usn n = 7 <br />
                ^^ 'n' must be greater than 0
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">usn</code> valued kinetype forces a variable to have no sign beside the number (essentially be greater than or equal to 0). Having <code className="miniBlock px-1">+7</code> will still count as unsigned because the final evaluation is <code className="miniBlock px-1">7</code> which does not have a sign.</p><br />
        </Types>
    )
}