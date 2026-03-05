import { Bytl } from "../../Bytl"
import Types from "./Types"

export default function Complex() {
    return (
        <Types title="Complex Types" id="complex">
            <p className="desc">Complex types are a naming convention to describe any combination of types, creating a final type more complex than a sole parent or sub type.</p><br />

            <p className="fs-5 desc fw-bold">Value Filters</p>
            <Bytl>
                int{"{"}$ &gt; 5{"}"} x = 3 <br />
                ^^ throws 'value filter' exception
            </Bytl>
            <p className="desc">Value filters are not types, but instead, a way to conditionalize variables based on a filter provided within curly brackets. They work by setting a condition to a variable and checking if the variable satisfies the condition on every assignment, otherwise throwing an <code className="miniBlock px-1">UnsatisfiedValueFilter</code> Runtime exception. In this case 'x' is checked for the condition that it must be greater than 5; if it is not on any assignment (including reassignment), then an exception is thrown. The 'complete' way to write a value filter would be to set a named parameter with anonymous procedure code as follows</p>
            <Bytl>
                int{"{"}p .. p &gt; 5{"}"} x = 3
            </Bytl>
            <p className="desc">But even though this method is a more explicit way to create vfilters, they are more convoluted and less simple to understand than solely using a dollar sign to represent the single parameter.</p>
        </Types>
    )
}