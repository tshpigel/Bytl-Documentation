import { Bytl } from "../../Bytl"
import Methods from "./Methods"
import { HashLink } from 'react-router-hash-link'

export default function String() {
    return (
        <Methods title="String Methods" id="sc" cformat="sc">
            <p className="desc fst-italic">String methods are </p><br />
            <p className="fs-5 desc fw-bold">ASCII String Method <code className="miniBlock px-1">alg[vect[int]] sc_ascii</code></p>
            <Bytl>
                sc h = "Hello World!" <br />
                char c = 'c' <br /><br />

                &gt;&gt; h _ ascii c _ ascii <br />
                ^^ Prints [72 101 108 108 111 32 87 111 114 108 100 33] [99]
            </Bytl>
            <p className="desc">The ASCII string method takes any type of string, and returns a vector of each character's ascii code as integers.</p>
            <br />
            <p className="fs-5 desc fw-bold">Index Of String Method <code className="miniBlock px-1">alg[int,vect[int]]&lt;sc,rgx match int [1]total&gt; sc_index</code></p>
            <Bytl>
                sc h = "Helllo World!" <br />
                &gt;&gt; \(h _ index 'e') \(h _ index "ll") <br />
                ^^ Prints 1 2 <br /><br />

                &gt;&gt; \(h _ index r{"{ [A-Z] }"} 2) \(h _ index 'l' -2) \(h _ index "ll") <br />
                ^^ Prints [0 7] [2 8] [2] <br />
                ^^ the last example does not overlap the "lll" as 2 "ll"s because it matches sequentially
            </Bytl>
            <p className="desc">The index of string method requires either a string (including its <code className="miniBlock px-1">char</code> <HashLink smooth to="/docs/types#subtypes-string">subtype</HashLink>) or <HashLink smooth to="/docs/types#stypes-regex">regex</HashLink> argument to return its found index within the initial string. If a regex argument is given, the index returned is the first occurence that the regex matches within the string. That is all if the <code className="miniBlock px-1">total</code> (second) argument is unspecified, or kept at a magnitude of 1, otherwise an integer <HashLink smooth to="/docs/types#subtypes-array">vector</HashLink> will be returned. Specifying a positive total greater than 1 will return a vector of the maximum indices specified from left to right (overlapping matches will not count as shown in the example, instead use the <HashLink smooth to="#string-occur">occur</HashLink> string method) while specifying a negative total will run equivalent functionality, but on a reversed string.</p>
            <br />
            <p className="fs-5 desc fw-bold">Has String Method <code className="miniBlock px-1">alg[bool]&lt;sc,rgx checker&gt; sc_has</code></p>
            <Bytl>
                sc h = "Hello World!" <br />
                &gt;&gt; \(h _ has "world") \(h _ has '!') <br />
                ^^ Prints false true <br /><br />

                &gt;&gt; h _ has r{"{ \\s }"} <br />
                ^^ Prints true
            </Bytl>
            <p className="desc">The has string method checks if the original string either has a given substring, or the given regex has a match within the string.</p>
            <br />
            <p className="fs-5 desc fw-bold">Lowercase String Method <code className="miniBlock px-1">alg[sc]&lt;bool [false]shift&gt; sc_lcase</code></p>
            <Bytl>
                sc h = "HELLO WORLD!" <br />
                &gt;&gt; \(h _ lcase) \(h _ lcase true) <br />
                ^^ Prints "hello world!" "hello world1" <br /><br />


                sc annoying = "tHiS wAs AnNoYiNg To TyPe" <br />
                &gt;&gt; annoying _ lcase <br />
                ^^ Prints "this was annoying to type"
            </Bytl>
            <p className="desc">The lowercase string method returns a conversion of every capital character in a string to its lowercase version by default. If the <code className="miniBlock px-1">shift</code> argument is invoked as <code className="miniBlock px-1">true</code> then characters that would normally require the 'shift' key to type on a keyboard will be "unshifted" (e.g. the string <code className="miniBlock px-1">"!@#$%"</code> would turn into <code className="miniBlock px-1">"12345"</code>).</p>
            <br />
            <p className="fs-5 desc fw-bold">Length String Method <code className="miniBlock px-1">alg[int.usn] sc_len</code></p>
            <Bytl>
                sc h = "Hello World!" <br />
                &gt;&gt; h _ len <br />
                ^^ Prints 12
            </Bytl>
            <p className="desc">The length string method returns the the number of characters in a string.</p>
            <br />
            <p className="fs-5 desc fw-bold">Occurrence String Method <code className="miniBlock px-1">alg[assoc.order[@sc int]]&lt;sc,rgx checker&gt; sc_occur</code></p>
            <Bytl>
                stuff
            </Bytl>
            <br />
            <p className="fs-5 desc fw-bold">Repeat String Method <code className="miniBlock px-1">alg[sc]&lt;int.usn times sc ['']separator&gt; sc_rep</code></p>
            <Bytl>
                sc s = "abc" <br />
                &gt;&gt; s _ rep 5 "," <br />
                ^^ Prints "abc,abc,abc,abc,abc"
            </Bytl>
            <p className="desc">The repeat string method returns a combination of the original string repeated <code className="miniBlock px-1">times</code> times separated by an optional <code className="miniBlock px-1">separator</code>.</p>
            <br />
            <p className="fs-5 desc fw-bold">Split String Method <code className="miniBlock px-1">alg[vect[sc]]&lt;sc,rgx separator&gt; sc_split</code></p>
            <Bytl></Bytl>
            <p className="desc">The split string method</p>
        </Methods>
    )
}