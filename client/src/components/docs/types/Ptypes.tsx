import { Bytl } from '../../Bytl'
import Types from './Types'
import { HashLink } from 'react-router-hash-link'

export default function Ptypes() {
    return (
        <Types title='Primitive Types' cformat='ptype' id='ptypes'>
            <p className='desc fst-italic'>Bytl primitives represent the original types that make up the language. They are not created using Bytl itself as opposed to other types shown later, but instead, the implementation is solely in TypeScript. This section will show the <strong>parent</strong> primitive types; primitive subtypes may be referenced, but will be explained in greater detail later in this chapter.</p>
            <br />
            <p className='desc fw-bold fs-5'>Number Primitive Type</p>
            <Bytl>
                num number = 5 <br />
                ^^ Creates a number named 'number' with a value of 5 <br />
                &gt;&gt; number <br />
                ^^ Prints 5 <br />
            </Bytl>
            <p className="desc">A number type can represent both integers and decimals. The <code className='miniBlock px-1'>int</code> ptype would replace <code className='miniBlock px-1'>num</code> for integers while <code className='miniBlock px-1'>dec</code> applies to decimals.</p>
            <br />
            <p className="desc fw-bold fs-5">String of Characters Primitive Type</p>
            <Bytl>
            sc string = "Hello World!" <br />
            ^^ Creates a string of characters named 'string' with a value of "Hello World!" <br />
            &gt;&gt; string <br />
            ^^ Prints "Hello World!" <br />
            </Bytl>
            <p className="desc">String types must use double quotes otherwise they will throw a <code className="miniBlock px-1">SingleQuotedString</code> Lexing Exception. Single quotes are reserved for character values (the <code className='miniBlock px-1'>char</code> ptype). And if a character is declared with double quotes, then a <code className="miniBlock px-1">DoubleQuotedCharacter</code> Lexing Exception will be thrown.</p>
            <br />
            <p className="desc fw-bold fs-5">Boolean Primitive Type</p>
            <Bytl>
                `Creates booleans with respective values` <br /><br />

                bool trueValue = true <br />
                bool truthyValue = truthy <br />
                bool falseValue = false <br />
                bool falsyValue = falsy <br /><br />

                &gt;&gt; trueValue truthyValue falseValue falsyValue <br />
                ^^ Prints true truthy false falsy
            </Bytl>
            <p className='desc'>The values presented in the code represent every type of boolean where <code className="miniBlock px-1">true</code> and <code className="miniBlock px-1">false</code> are the binary values, and <code className="miniBlock px-1">truthy</code> and <code className="miniBlock px-1">falsy</code> are used to compare values like so:</p>
            <Bytl>
                if "a string" truthy ( <br />
                    &nbsp;&nbsp;&gt;&gt; "This code will print this text!" <br />
                )
            </Bytl>
            <p className="desc"><code className="miniBlock px-1">falsy</code> is a value <a href="#ptypeuni">union</a> of the following values: <code className="miniBlock px-1">0</code>, <code className="miniBlock px-1">false</code>, <code className="miniBlock px-1">''</code>, <code className="miniBlock px-1">""</code>, <code className="miniBlock px-1">[]</code>, <code className="miniBlock px-1">nil</code>, and <code className="miniBlock px-1">lack</code>. <code className="miniBlock px-1">truthy</code> is the exact opposite because it represents an inverse union meaning any value that is not <code className="miniBlock px-1">falsy</code> is <code className="miniBlock px-1">truthy</code>.</p>
            <br />
            <p className="desc fw-bold fs-5">Array Primitive Type</p>
            <Bytl>
            arr array = [1 2 3 4 5] <br />
            ^^ Creates an array named 'array' containing 5 number elements <br />
            &gt;&gt; array[0] array[-1] <br />
            ^^ Indexes the array to the first and last element respectively (prints 1 5) <br /><br />

            arr[char] characters = ['a' 'b' 'c'] <br />
            ^^ A minimum of 1 character value must be present in the array
            </Bytl>
            <p className="desc">By default, if an <HashLink smooth to="#etypes">encapsulated</HashLink> type is specified in either the parent <code className="miniBlock px-1">arr</code> type or the <code className="miniBlock px-1">coll</code> (collection) subtype, only 1 element with the same type as the encapsulated type must be present in the array (the number of encapsulated types is irrelevant). If every element needs to be of the same type, the variable would need to be a <a href="#subtypes-vect">vector</a> instead of a regular array or collection. If an array is indexed out of its boundaries (either negatively or positively), an <code className="miniBlock px-1">UnreachableIndex</code> Parsing Exception will be thrown.</p>
            <br />
            <p className="desc fw-bold fs-5">Association Primitive Type</p>
            <Bytl>
                `Creates an association between numbers as words, and the numbers themselves <br />
                The strings are the keys (denoted by the '@'), and the integers are the values <br />
                (denoted by the lack of an '@')` <br /><br />

                assoc[@sc int] association = &lt; <br />
                &nbsp;&nbsp;"one" 1<br />
                &nbsp;&nbsp;"two" 2<br />
                &nbsp;&nbsp;"three" 3<br />
                &nbsp;&nbsp;"four" 4<br />
                &nbsp;&nbsp;"five" 5<br />
                &gt;<br /><br />

                &gt;&gt; association "two"<br />
                ^^ Prints 2
            </Bytl>
            <p className="desc">Associations are relationships between any combination of consistent values where at least 1 key must be specified (using the at-symbol before a type). In most programming languages, this can be achieved with a hashmap or some similar structure. But in Bytl, a 'key-value pair' isn't the limit of functionality; there can be as many keys and as many values as possible. By default, keying an association will return a collection of every value unless the <code className="miniBlock px-1">{"INCLUDEACCS"}</code> (include accessors) modifier is present.</p>
            <Bytl>
            `Creates an association with two keys and one value where the value is optional` <br /><br />

            assoc[@int @bool char?] alphabet = &lt; <br />
            &nbsp;&nbsp;1 true 'a'<br />
            &nbsp;&nbsp;24 true 'x'<br />
            &nbsp;&nbsp;0 false lack<br />
            &nbsp;&nbsp;100 true<br />
            &nbsp;&nbsp;37 true 'K'<br />
            &gt;
            </Bytl>
            <p className="desc">This code shows an optional value in use (optional keys are valid as well). If a value is meant to be ignored, such in this case then the <code className="miniBlock px-1">lack</code> value acts as a placeholder. Although a <HashLink smooth to="#complex">value filter</HashLink> could be used on the integer key or the <code className="miniBlock px-1">cannil</code> <HashLink smooth to="#ktypes">ktypes</HashLink> could be applied to the character value, that may not always be viable and using kinetypes will result in more convolution. </p>
            <br />
            <p className="desc fw-bold fs-5">Procedure Primitive Type</p>
            <Bytl>
                `Creates a procedure that will return the number 5` <br /><br />

                proc five = ( <br />
                &nbsp;&nbsp;rn 5 <br />
                ) <br /><br />

                &gt;&gt; five <br />
                ^^ Calls the procedure 'five' and prints 5
            </Bytl>
            <p className="desc">Procedures are a way to shorten, simplify, and organize code by putting all of the code within a block (parentheses). They work just like any other variable and calling a procedure is as simple as referencing it. Although, this isn't the limit to procedures as arguments can also be added.</p>
            <Bytl>
            `Creates a procedure with two number arguments which sum gets printed on invocation`<br /><br />

            proc&lt;num a num b&gt; add = ( <br />
            &nbsp;&nbsp;&gt;&gt; a + b<br />
            )<br />
            add 5 10<br />
            ^^ Prints 15<br /><br /><br />


            `Creates a procedure with a specified amount, an optional checker, and any number of elements`<br /><br />

            proc&lt;int.usn amount bool ?optional val.cannil ??elements&gt; test = (<br />
                &nbsp;&nbsp;if optional &amp; elements _ len == amount (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt; Args[2,]<br />
                    &nbsp;&nbsp;) else &gt;&gt; "Amounts don't match"<br />
            )<br />
            test 3 true (3 "string" nil)<br />
            ^^ Prints 3 "string" nil
            </Bytl>
            <p className="desc">This is a lot of additional functionality, but there isn't actually that much to uncover. First of all, there is the functionality of optional and infinite arguments which is shown with the single and double question marks. Optional values and <HashLink smooth to="/docs/symbols#procedures-argmods">infargs</HashLink> must be replaced with <code className="miniBlock px-1">lack</code> if they are chosen not to be used when a non-lack value recedes. Lastly, there are two more parameter modifiers to introduce; that being the <HashLink smooth to="/docs/symbols#procedures-argmods">reference</HashLink> and <HashLink smooth to="/docs/symbols#procedures-argmods">variable</HashLink> operators. </p>
            <Bytl>
            int x = 5 <br />
            int y = 7<br />
            proc&lt;int @ref val *var&gt; add = (<br />
            &nbsp;&nbsp;ref += var<br />
            )<br /><br />

            add x y<br />
            &gt;&gt; x<br />
            ^^ Prints 12
            </Bytl>
            <p className="desc">The reference operator creates a reference to the argument passed and the expressionless operator disallows an expression to be passed as an argument (normally implying a variable). Procedures also have two subtypes, that being algorithms (<code className="miniBlock px-1">alg</code>), which must return a value, and functions (<code className="miniBlock px-1">fnc</code>), which cannot.</p>
        </Types>
    )
}