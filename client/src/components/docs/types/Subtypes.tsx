import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Subtypes() {
    return (
        <Types title="Subtypes (General)" id="subtypes">
            <p className="desc fst-italic">Subtypes are types that can be present in any type and represents a more specific classification or restriction for a certain type. Some subtypes defined in this section are of parent types which are yet to be introduced but will be linked accordingly. The explicit syntax for subtypes goes as follows <code className="miniBlock px-1">parent : sub</code>. This is only necessary if the parent type is a <a href="#gtypes">ghost</a> or <a href="#relcreate">custom</a> type as these types have no global precedence as opposed to every other type which can be implicitly identified globally.</p><br />
            <p className="fs-5 desc fw-bold">Number Subtypes</p>
            <Bytl>
                num a = 5 <br />
                num b = 23.552 <br />
                int c = 5 <br />
                dec d = 23.552 <br />
                ^^ All valid code <br /><br />

                int e = 3.0 <br />
                num f = 4 <br />
                ^^ All invalid code
            </Bytl>
            <p className="desc" id="subtypes-string"><code className="miniBlock px-1">int</code> (integer) and <code className="miniBlock px-1">dec</code> (decimal) are the only two subtypes of the number type. An integer cannot contain a period while a decimal must. Even if the final decimal value is equal to an integer, because the value explicitly contains a decimal, it cannot be an integer.</p><br />
            <p className="desc fw-bold fs-5">String Subtype</p>
            <Bytl>
            sc a = "hello world"<br />
            sc b = "q"<br />
            char c = 'q'
            </Bytl>
            <p className="desc">The character data type is the only odd exception to subtypes because this is the one case where the parent type (string) cannot hold the same value as the subtype (character) due to the difference in quotes. The values can <em>technically</em> be the same, although single quotes indicate a character while double quotes signify a set of characters.</p><br />
            <p className="desc fw-bold fs-5">Array Subtypes</p>
            <Bytl>
                `Vectors` <br />
                vect numbers = [1 2 3 4 5] <br />
                vect[sc] names = ["Jack" "Jill" "John" "Jane"] <br />
                vect[dec bool] values = [3.2 true 4.6 7.2] <br /><br />

                `Collections` <br />
                coll anything = [7 "hello world" 'a' false &lt;4 4&gt;] <br />
                coll[sc] aString = ["hello" 1 2 false] <br />
                coll[dec bool] moreValues = [1.1325 'v'] <br />
                moreValues[0] = false <br /><br />

                `Unions` <br />
                uni[ambg] isASpecificValue = [1 '3' r{"{ \\d+_* }"}] <br />
                if '3' isASpecificValue ( <br />
                &nbsp;&nbsp;&gt;&gt; "'3' is a specific value"
                <br />)
            </Bytl>
            <p className="desc">There are three array subtypes which all allow <a href="#etypes">encapsulated types</a> and each subtype yields a unique array function. For vectors, if no encapsulated type is specified, every element within the vector must be of the same parent type. If one encapsulated is specified every element in the vector must be of that encapsulated type, not parent type. Lastly, if multiple encapsulated types are specified, at least one element must be present in the vector for each encapsulated type specified.
            Collections are the most lenient type of array as if no encapsulated type is specified, any value is allowed for each element. If one or more encapsulated types are specified, then at least one element in the collection must have any of the encapsulated types present, but other types unspecified are additionally allowed. 
            Lastly, unions are a special type of array as they are functional. Specifically, unions mimic the <code className="miniBlock px-1">arr_has</code> method</p>
        </Types>
    )
}