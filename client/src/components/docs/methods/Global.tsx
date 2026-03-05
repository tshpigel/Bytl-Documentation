import { Bytl } from "../../Bytl"
import Methods from "./Methods"
import { HashLink } from 'react-router-hash-link'

export default function Global() {
    return (
        <Methods title="Global Methods" id="glob" cformat="glob">
            <p className="desc fst-italic">Global methods are accessible at any context level as they are implicitly called using <code className="miniBlock px-1">glob</code>. They are also implemented in TypeScript as opposed to Bytl as the actions these procedures do are either not possible with pure Bytl, or much easier in TypeScript. Global procedures specifically are conventionally capitalized.</p><br />
            <p className="fs-5 desc fw-bold">Adjust Relative Global Method <code className="miniBlock px-1">fnc&lt;val @;;r val c&gt; Adj</code></p>
            <Bytl>
            :: r <br />
        &nbsp;&nbsp;# five 5 ambg <br />
            :: <br />
            ^^ Prints :: # five 5 :: <br /><br />


            Adj \(glob : r # five) "five" <br /><br />

            &gt;&gt; r <br />
            ^^ Prints :: # five "five" ::
            </Bytl>
            <p className="desc">The global adjusting function allows for created relatives to have altered properties using the <HashLink smooth to="/docs/symbols#accessing">relative accessing</HashLink> expression from the <HashLink smooth to="/docs/symbols#procedures-argmods">reference</HashLink> operator. The first argument must be in <HashLink smooth to="/docs/relatives#context">full context</HashLink> form and a relative expression and the second argument is the value to change the property to. This works on all types of properties including sub-relatives, constants, and methods.</p>
            <br />
            <p className="fs-5 desc fw-bold">Alias Variable Global Method <code className="miniBlock px-1">fnc.lhs(val *v)&lt;sc{"{$$$ _ len > 0}"} ??aliases&gt; Alias</code></p>
            <Bytl>
                alg&lt;int a int b&gt; multiply = ( rn a * b ) <br />
                multiply Alias "times" "productOf" <br /><br />

                &gt;&gt; multiply 5 4 <br />
                &gt;&gt; times 5 4 <br />
                &gt;&gt; productOf 5 4 <br /><br />

                ^^ All three invocations print 20
            </Bytl>
            <p className="desc">The global aliasing function essentially lets one value be accessible by multiple different names specified by strings (that are <HashLink smooth to="/docs/symbols#accessing">interpolated</HashLink> onto <code className="miniBlock px-1">glob</code>). This lets code exist more readably if a different name for it is more grammatically useful in a different context.</p>
            <br />
            <p className="fs-5 desc fw-bold">Argumentate Procedure Global Method <code className="miniBlock px-1">alg[coll[val]] Args</code></p>
            <Bytl>
                proc[vect[sc]]&lt;ambg a val ??vars&gt; typesOf = (<br /> 
        &nbsp;&nbsp;rn Args _ map Dtype $
                <br />) <br /><br />

                typesOf 5 "hi" false <br />
                ^^ Prints ["num" "sc" "bool"]
            </Bytl>
            <p className="desc">The procedural arguments algorithm returns every passed in argument in a procedure invocation as a collection of values of the types specified in the parameters. In the above example, when <code className="miniBlock px-1">typesOf</code> is called, every argument passed into the invocation maps into its respective data type returned by the global <HashLink smooth to="/docs/methods#glob-dtype"><code className="miniBlock px-1">Dtype</code></HashLink> method.</p>
            <br />
            <p className="fs-5 desc fw-bold">Augment Type Global Method <code className="miniBlock px-1">alg[vect[sc]]&lt;dtype d&gt; Augment</code></p>
            <Bytl>

            </Bytl>
            <p className="desc">The augmenting type global algorithm</p>
            <br />
            <p className="fs-5 desc fw-bold">Code Exit 0 Global Method <code className="miniBlock px-1">fnc.immute C0</code></p>
            <Bytl>
                int i = 0 <br />
                for i \(math # inf) (<br />
        &nbsp;&nbsp;if i &lt; 20 (&gt;&gt; i++) <br />
        &nbsp;&nbsp;else C0
                <br />) <br /><br />

                ^^ Prints 1-20 and then stops the program
            </Bytl>
            <p className="desc">The global code-exit (0) function simply kills the running program when invoked. It can be a useful tool for debugging and can save the inconvenience of commenting out the code past when the program should end.</p>
            <br />
            <p className="fs-5 desc fw-bold">Coerce Value Global Method <code className="miniBlock px-1">fnc.lhs(val v)&lt;complex c&gt; Coerce</code></p>
            <Bytl>
                num x = 52 <br />
                &gt;&gt; Dtype x Ktype x <br />
                ^^ Prints "num" [] <br /><br />
                

                x Coerce dec.cannil.usn.immute <br />
                &gt;&gt; Dtype x Ktype x <br />
                ^^ Prints "dec" ["cannil" "usn" "immute"]
            </Bytl>
            <p className="desc">The coerce value global function allows for any value to be checked against any complex type and converted into it. This does not solely work on variables (hence the lack of the <HashLink smooth to="/docs/symbols#procedures-argmods">variable modifier</HashLink>) as the function will still error if the complex type does not match the value, simply variables will be converted as additional functionality.</p>
            <br />
            <p id="glob-dtype" className="fs-5 desc fw-bold">Datatype Check Global Method <code className="miniBlock px-1">alg[sc]&lt;val v&gt; Dtype</code></p>
            <Bytl>
                val x = 10 <br />
                coll c = [1 "string" false &lt;lack&gt; nil lack x] <br />
                &gt;&gt; c _ map Dtype $ <br />
                ^^ Prints ["num" "sc" "bool" "assoc" "nil" "lack" "val"]
            </Bytl>
            <p className="desc">The datatype checker global algorithm returns a value's parent datatype by default, but if a variable is passed, then the most recent specific type of that variable will be returned. This method will return the <code className="miniBlock px-1">nil</code> and <code className="miniBlock px-1">lack</code> values normally as shown in the above example.</p>
            <br />
            <p id="glob-enable" className="fs-5 desc fw-bold">Enable Module Global Method <code className="miniBlock px-1">fnc.immute&lt;context,special:path module&gt; Enable</code></p>
            <p className="desc">The enabling module global method </p>
            <br />
            <p id="glob-enable" className="fs-5 desc fw-bold">Eventify Variable Global Method <code className="miniBlock px-1">fnc.immute&lt;context,special:path module&gt; Enable</code></p>
            <br />
            <p id="glob-enable" className="fs-5 desc fw-bold">Kinetype Checker Global Method <code className="miniBlock px-1">alg[vect[sc].uniq]&lt;val *v&gt; Ktype</code></p>
            <Bytl>
                int.immute.cannil i = 5 <br />
                proc&lt;vect.?uniq.!immute v&gt; p = (<br />
        &nbsp;&nbsp;rn Ktype v
                <br />) <br /><br />

                &gt;&gt; Ktype i <br />
                ^^ Prints ["immute" "cannil"] <br />
                &gt;&gt; p [1 2 3] <br />
                ^^ Prints ["?uniq" "!immute"]
            </Bytl>
            <p className="desc">The kinetic type checker global method returns a unique string vector of every <HashLink smooth to="/docs/types#ktypes">ktype</HashLink> applied on a variable. For procedural arguments containing ktypes, the <HashLink smooth to="/docs/types#ktypes-mods">ktype modifier</HashLink> will also be present in the string if the argument has one.</p>
        </Methods>
    )
}