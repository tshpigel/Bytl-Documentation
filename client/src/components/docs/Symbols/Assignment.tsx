import { Bytl } from "../../Bytl"
import Symbols from "./Symbols"

export default function Assignment() {
    return (
        <Symbols title='Assignment' id='assignment' sym={['=', '[]', '.!?', '()', '{}']}>
            <p className="desc fst-italic">These are all the different symbols concerning the types in variable assignment.</p><br />
            <p className="fs-5 desc fw-bold">Simple Assignment</p>
            <Bytl>
                int x = 4 <br />
                x = 5
            </Bytl>
            <p className="desc">The equal sign is the symbol used to assign a variable to a value. If the <code className="miniBlock px-1">immute</code> <a href="/docs/types#ktypes">ktype</a> is not present, then the variable is able to be reassigned using the same symbol.</p>
            <br />
            <p className="fs-5 desc fw-bold">Encapsulating Types</p>
            <Bytl>
                vect[int] a = [1 2 3 4 5] <br />
                &gt;&gt; a
            </Bytl>
            <p className="desc"><a href="/docs/types#etypes">Encapsulating types</a> are a classification of types that have the ability to create sub types within the main type using square brackets as shown in the example. The code above works because the vector <code className="miniBlock px-1">a</code> has an encapsulated type of <code className="miniBlock px-1">int</code> and is solely comprised of integers which satisfies the conditions of this specific etype.</p>
            <br />
            <p className="fs-5 desc fw-bold">Kinetic Type Chain</p>
            <Bytl>
                int.cannil.usn i = 76 <br />
                ^^ 'i' can be nil and must not have a sign
            </Bytl>
            <p className="desc">In this example, two <a href="/docs/types#ktypes">ktypes</a> are being chained on the <code className="miniBlock px-1">i</code> variable which applies both ktypes to the variable. If a ktype is applied to either an encapsulated type or a procedural argument, then the value that will represent either the encapsulated type or the argument must have that ktype.</p>
            <br />
            <p className="fs-5 desc fw-bold">Kinetic Type Arguments</p>
            <Bytl>
                arr.md(2) a = [[1 2 3]]
            </Bytl>
            <p className="desc">Some ktypes have passable arguments to amplify the mutation of a variable and these are called functional ktypes. Calling these functional ktypes uses normal parentheses.</p>
            <br />
            <p className="fs-5 desc fw-bold">Kinetic Type Modifiers</p>
            <Bytl>
                proc[arr.?md]&lt;int.!immute @i int [0]depth&gt; depthToArr = (<br />
                &nbsp;&nbsp;i *= depth <br />
                &nbsp;&nbsp;&gt;&gt; rn [i] _ deepen depth
                <br />)
            </Bytl>
            <p className="desc">There are two kinetic type modifiers: the 'anti' modifier <code className="miniBlock px-1">.!</code> and the 'optional' modifier <code className="miniBlock px-1">.?</code>. Both of these modifiers are only applicable in either procedural arguments or return types as that is where the condition for them is checked. The anti modifier disallows the chosen ktype to be applied on the passed in value/variable, as in this case, only a mutable variable is allowed to be passed to properly reassign. The optional ktype modifier does not serve any functional purpose as ktypes in arguments are inherently optional if unspecified but this 'modifier' acts as an explicit way to show the value being represented. The above code shows how the return value may be multi-dimensionl or not, depending on the second argument of a proc call. Lastly, both modifiers can be used together like so <code className="miniBlock px-1">.!?ktype</code> and if the optional modifier is used, then any methods that the ktype would have do not apply to the variable as it does not have that ktype with certainty.</p>
            <br />
            <p className="fs-5 desc fw-bold">Value Filters</p>
            <Bytl>
                arr{"{$ _ len <= 5}"} a = [] <br />
                while !except (<br />
                &nbsp;&nbsp;a += a _ len + 1
                <br />)<br /><br />
                
                &gt;&gt; a <br />
                ^^ Prints [1 2 3 4 5]
            </Bytl>
            <p className="desc"><a href="/docs/types#complex">Value filters</a> allow variables to be automatically instead of manually conditioned. In this example, an initially empty array has a value filter that defines how its length must be less than or equal to 5. That condition is checked for every time the variable is altered and if the filter is not satisfied and the condition is broken, then an exception will be thrown.</p>
        </Symbols> 
    )
}