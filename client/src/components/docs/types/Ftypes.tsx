import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Ftypes() {
    return (
        <Types title="Functional Types" id="ftypes" cformat="ftype">
            <p className="desc fst-italic">Functional types are the opposite of reference types as these are not declarable on a variable, instead only containing methods and constants to use. Ftypes are used as an organizational tool and usually contain many sub-relatives to further classify the type. This section will show simple examples using methods and constants from each type, while the full source code implementation is available <a href="/source#math">here</a>.</p><br />
            <p className="fs-5 desc fw-bold">Math Functional Type</p>
            <Bytl>
                dec pi = math # pi <br />
                &gt;&gt; pi <br />
                ^^ 3.141592653<br /><br />

                dec sqrt4 = math _ sqrt 4 <br />
                &gt;&gt; sqrt4<br />
                ^^ 2.0
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">math</code> functional type holds both common mathematical constants and useful mathematical functions that are mostly in the main context, but a few sections are categorized into sub-relatives such as <code className="miniBlock px-1">trig</code> (trigonometry), <code className="miniBlock px-1">phys</code> (physics), and <code className="miniBlock px-1">chem</code> (chemistry).</p>
            <br />
            <p className="fs-5 desc fw-bold">Random Functional Type</p>
            <Bytl>
                int randIndex = rnd 0 9 <br />
                vect[char].seq($ + 1 'j') aToJ = ['a'] <br />
                &gt;&gt; aToJ[randIndex] <br />
                ^^ can print any letter from a-j
            </Bytl>
            <p className="desc">The random type holds methods for randomizing different types of values. The code above shows a constructor-like usage of the <code className="miniBlock px-1">rnd</code> ftype which defaults to returning a random integer, inclusive of the specified arguments. This constructor behavior is only included in certain relatives and is syntactic sugar for <code className="miniBlock px-1">relative _ relative</code>. This is the one functional type that does not contain any sub-relatives where every method and constant is inside the main relative scope.</p>
            <br />
            <p className="fs-5 desc fw-bold">Time Functional Type</p>
            <Bytl>
                int.immute numSecondsInYear = 60 * 60 * 24 * 365 <br />
                ^^ 31536000 <br /><br />

                int epochTimeInSeconds = time _ posix <br />
                dec epochTimeInYears = epochTimeinSeconds / numSecondsInYear <br />
                &gt;&gt; epochTimeInYears <br />
                ^^ { new Date(2010, 6, 26).getTime() / 1000 / 31536000 }
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">time</code> ftype is the third and last functional type that deals with date and time management; hence its name. Though it can also manage runtime of the program as follows:</p>
            <Bytl>
                for i 5 (<br />
        &nbsp;&nbsp;time : runt _ wait 1000 <br />
        &nbsp;&nbsp;&gt;&gt; i <br />
                ) <br />
                ^^ takes 5 seconds to run code
            </Bytl>
            <p className="desc"><code className="miniBlock px-1">time</code> has only one subtype, that being <code className="miniBlock px-1">time : runt</code> which is the accessor to all the runtime effects as shown above. In this case the <code className="miniBlock px-1">wait</code> method pauses the program for a specified time in milliseconds.</p>
        </Types>
    )
}