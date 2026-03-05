import { Bytl } from "../../Bytl"
import Symbols from "./Symbols"

export default function Comments() {
    return (
        <Symbols title='Comments' id='comments' sym={['^^', '`']}>
            <p className="desc fst-italic">Comments are an excellent way to document code and is highly recommended for Bytl programs specifically due to its less readable nature and confusing syntax. Comments are not solely useful for others to view, but they are also way to keep track of written code.</p><br />
            <p className="fs-5 desc fw-bold">Single Line Comments</p>
            <Bytl>
                alg&lt;num ??numbers&gt; add = (<br />
                &nbsp;&nbsp;&gt;&gt; [numbers] _ sum <br />
                ) <br />
                ^^ 'add' algorithm sums all numbers given as arguments
            </Bytl>
            <p className="desc">This example shows single line comments in use as two caret characters (<code className="miniBlock px-1">^^</code>) and it is describing the procedure above it. Because the symbol for these comments are carets, they indicate referencing code above the carets (as the symbol is 'pointing upward'). It is not invalid to place comments to the sides of lines of code, simply unconventional.</p>
            <Bytl>
                &gt;&gt; 5 ^^ Prints 5 (valid, but unconventional) <br /><br />

                ^^ Prints 5 (valid and conventional)
            </Bytl>
            <br />
            <p className="fs-5 desc fw-bold">Multi Line Comments</p>
            <Bytl>
                `<br />
                &nbsp;This code will loop through a user-inputted  <br />
                &nbsp;number vector (grocery prices in CAD) and print <br />
                &nbsp;each price in USD and then the total sum in USD.<br />
                ` <br /><br />

                num.immute CADtoUSDconversion = 0.75689654<br />
                ^^ as of July 11th, 2023 <br />
                in[vect[num]] groceriesCAD = "Put grocery prices here" <br />
                cycle groceriesCAD price index (<br />
                &nbsp;&nbsp;&gt;&gt; "Grocery #&lt;index + 1&gt; = $&lt;price * CADtoUSDconversion&gt; USD" <br />
                ) <br /><br />

                num sumCAD = groceriesCAD _ sum <br />
                num sumUSD = sumCAD * CADtoUSDconversion <br />
                &gt;&gt; "Total cost in USD:" - sumUSD
            </Bytl>
            <p className="desc">Multi-line commenting can be more useful than single line commenting in some cases as sometimes it is more beneficial to explain more within the comment which is either more tedious to write with the double caret (if there are many lines) or less readable (one long single line comment requiring sidescrolling).</p>
        </Symbols>
    )
}