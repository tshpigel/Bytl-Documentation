import { Bytl } from "../../Bytl"
import ControlFlow from "./ControlFlow"
import { HashLink } from 'react-router-hash-link'

export default function Conditions() {
    return (
        <ControlFlow title="Conditionals" id="if" keyword="if eif else sysc switch case">
            <p className="desc fst-italic">Conditionals are used to run code only if a certain constraint is true. There are different types of conditionals that are each useful for more specific uses, however, any problem with conditionals can be solved solely with if statements and without switch or sysc, these alternatives can simply make the process easier.</p><br />
            <p className="fs-5 desc fw-bold">If Statements <code className="miniBlock px-1">if</code> <code className="miniBlock px-1">eif</code> <code className="miniBlock px-1">else</code></p>
            <Bytl>
                fnc&lt;int x num a num b&gt; bet2 (<br/>
                &nbsp;&nbsp;if x &gt; b (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; "&lt;x&gt; is in fact greater than &lt;b&gt;"<br />
                &nbsp;&nbsp;) \\ eif x &gt; a (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; "&lt;x&gt; is between &lt;a&gt; and &lt;b&gt;"<br />
                &nbsp;&nbsp;) \\ eif x == a | x == b (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; "&lt;x&gt; is on the edge"<br />
                &nbsp;&nbsp;) \\ else (<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; "&lt;x&gt; is not between &lt;a&gt; and &lt;b&gt;"<br />
                &nbsp;&nbsp;) <br />
                )
            </Bytl>
            <p className="desc">If statements are used to run code, only if a condition is true (<code className="miniBlock px-1">eif</code> stands for 'else-if'). Additionally, they work sequentially, meaning if the first condition is false, it will check the next eif or else in the if statement list. Only using if statements and not using any else-if statements will not function the same way because else-if statements are within the same block as the initial if statement meaning when the first if or else-if condition is true, then all the else-if statements that follow will be ignored.</p><br />

            <p className="fs-5 desc fw-bold">Switch Statements <code className="miniBlock px-1">switch</code> <code className="miniBlock px-1">case</code></p>
            <Bytl>
                
            </Bytl>
            <p className="desc"></p><br />
        </ControlFlow>
    )
}