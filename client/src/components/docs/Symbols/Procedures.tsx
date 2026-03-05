import { Bytl } from "../../Bytl"
import Symbols from "./Symbols"
import { HashLink } from 'react-router-hash-link'

export default function Procedures() {
    return (
        <Symbols title='Procedures' id='procedures' sym={['()', '<>', '@*?;;[]', '..$', '{}']}>
            <p className="desc fst-italic">Bytl procedures have a wide range of different symbols that are all used within procedures or are related to them.</p><br />
            <p id="procedures-procblocks" className="fs-5 desc fw-bold">Procedure Blocks</p>
            <Bytl>
                proc p = (<br />
        &nbsp;&nbsp;rn (5) + \(5)
                <br />) <br /><br />

                &gt;&gt; p <br />
                ^^ Prints 10
            </Bytl>
            <p className="desc">Normal parentheses are procedure blocks and are the syntax to define a procedure (just how quotes are the syntax to define a string). The above code shows a procedure essentially returning the evaluation of <code className="miniBlock px-1">5 + 5</code>, but that is not all that occurs. An expression surrounded by parentheses does not solely create precedence, but actually implicitly creates a procedure which returns the given expression, and immediately invokes it. Having a backslash prepend the block will make it an <a href="#">expression block</a> which despite being more characters to type, is slightly more efficient than procedure blocks.</p>
            <br />
            <p id="procedures-argblocks" className="fs-5 desc fw-bold">Argument Blocks</p>
            <Bytl>
                fnc&lt;int x sc unit&gt; countdown = (<br />  
                &nbsp;&nbsp;for x index ( &gt;&gt; x - index - " &lt;unit&gt; left" )
                <br />) <br /><br />
                
                countdown 10 "mississippis"<br />
                ^^ Prints "10 mississippis left" to "1 mississippis left" consecutively
            </Bytl>
            <p className="desc">The angle brackets (<code className="miniBlock px-1">&lt;&gt;</code>) are the placeholders for procedure arguments. Unlike most other languages, the arguments are defined before the variable is named as they are part of the entire <a href="/docs/types#complex">complex</a> type. There are no commas separating the parameters, but instead the parameter name is the separator between parameters as shown above.</p>
            <br />
            <p id="procedures-argmods" className="fs-5 desc fw-bold">Argument Modifiers</p>
            <Bytl>
                proc&lt;int @*ref int newValue&gt; changeInt = (<br /> 
        &nbsp;&nbsp;ref = newValue
                <br />) <br /><br />

                int x = 5  <br />
                &gt;&gt; x <br />
                ^^ Prints 5 <br /><br />

                change x 10 <br />
                &gt;&gt; x <br />
                ^^ Prints 10 <br /><br />

                change 5 10 <br />
                ^^ invalid because 5 is not a variable
            </Bytl>
            <p className="desc">Argument modifiers alter how arguments get passed to procedure. They are present after the type is declared and are conventionally written connected to the parameter name instead of the type as that more clearly separates the parameter from the type. The reference argument modifier <code className="miniBlock px-1">@</code> alters the original value passed if the parameter is reassigned. This is most common using variables as otherwise an arbitrary value will simply change an un-useful memory address in code. Because of this, there is the variable modifier <code className="miniBlock px-1">*</code> which only allows variables to be passed into the chosen parameter and is very commonly combined with the reference modifier as shown above. Additionally, because Bytl is value-based as opposed to memory-based, if this procedure's first argument allowed non-variables, it would actually change the value of <code className="miniBlock px-1">5</code> to <code className="miniBlock px-1">10</code> in the second invocation.</p>
            <Bytl>
                proc.ovld&lt;sc name int ?times&gt; hello = (<br />
        &nbsp;&nbsp;&gt;&gt; "Hello &lt;name&gt;" _ rep times ?: 1 ". " - "."
                <br />) <br /><br />

                proc&lt;char ??characters&gt; hello = (<br />
        &nbsp;&nbsp;&gt;&gt; "Hello &lt;characters _ join&gt;"
                <br />) <br /><br />

                proc&lt;sc ["World"]place&gt; hello = (<br />
        &nbsp;&nbsp;&gt;&gt; "Hello &lt;place&gt;"
                <br />) <br /><br /><br />


                hello "John" 3 <br />
                ^^ Prints: "Hello John. Hello John. Hello John."<br /><br />


                hello 'J' 'a' 'n' 'e' <br />
                ^^ Prints "Hello Jane" <br /><br />

                hello <br /> 
                ^^ Prints "Hello World"
            </Bytl>
            <p className="desc">The optional argument modifier <code className="miniBlock px-1">?</code> does not require an argument to be passed to the given parameter and if ignored, holds the value of <code className="miniBlock px-1">lack</code>.</p>
            <br />
            <p id="procedures-fullctx" className="fs-5 desc fw-bold">Full Context</p>
            <Bytl>
                proc&lt;anonm &gt;
            </Bytl>
            <p className="desc">Full context arguments are similar to <a href=""></a></p>
            <br />
            <p id="procedures-argmods" className="fs-5 desc fw-bold">Anonymous Procedures <code className="miniBlock px-1">anonm</code></p>
            <Bytl>
                proc&lt;anonm &gt;
            </Bytl>
        </Symbols>
    )
}