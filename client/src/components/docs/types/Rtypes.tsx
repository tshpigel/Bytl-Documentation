import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Rtypes() {
    return (
        <Types title="Reference Types" id="rtypes" cformat="rtype">
            <p className='desc fst-italic'>Bytl reference types (not related to the reference operator) are such types that reference primitive types to create a new type, and are also how new types are customly constructed. This means that the implementation is in Bytl as opposed to TypeScript and the exact code can be seen in the <code className="miniBlock px-1">source.bytl</code> file. Reference types are not very abundant compared to other Bytl data types because they are meant more for custom creation as opposed to source implementation.</p>
            <br />
            <p className="desc fw-bold fs-5">Value Reference Type</p>
            <Bytl>
            val string = "the answer to life and everything in the universe"<br />
            val number = 42<br /><br />

            ^^ Both are valid lines of code
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">val</code> data type can be described as an 'any' type because its value can be anything. It is represented as a <a href="#uni">union</a> of every single dtype. The only exception is that a variable assigned with this type, cannot be reassigned with a different parent type. For example, in the above code, <code className="miniBlock px-1">number</code> could be reassigned to <code className="miniBlock px-1">15.7</code> but not <code className="miniBlock px-1">false</code> as that would throw an <code className="miniBlock px-1">IncompatibleType</code> Emitting exception.</p>
            <br />
            <p className="desc fw-bold fs-5">Ambiguous Reference Type</p>
            <Bytl>
            ambg literallyAnything = 'g' <br />
            literallyAnything = 752<br />
            literallyAnything = true<br /><br />

            &gt;&gt; literallyAnything (literallyAnything # hist # vals)<br />
            ^^ Prints true ['g' 752 true]
            </Bytl>
            <p className="desc">Ambiguous variables are very similar to value variables as both data types allow for any value on the right hand side. The additional functionality which ambiguity creates is the ability to have any value be any type, whether it's being reassigned or not <em>and additionally</em> the ability to get a variable's history in value and <a href="#ktypes">ktypes</a>.</p>
            <br />
            <p className="desc fw-bold fs-5">Neural Network Reference Type</p>
            <p className="desc">This reference type is incredibly complex and cannot be explained using general documentation. Information on how to create a neural network can be found <a href="#neurlw">here</a> or in the "AI Dev" tab.</p>
        </Types>
    )
}