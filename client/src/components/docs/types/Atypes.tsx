import { Bytl } from "../../Bytl"
import Types from "./Types"
import { HashLink } from 'react-router-hash-link'

export default function Atypes() {
    return (
        <Types title="Accessory Types" id="atypes" cformat="atype">
            <p className="desc fst-italic">Accessory types access both the system and source code. They are more miscellaneous compared to other dtypes due to dealing with more abstract values of code. This includes file management, command line arguments (user input), Bytl exceptions, and JSON data.</p><br />
            <p className="fs-5 desc fw-bold">Resource Accessory Type</p>
            <Bytl>
                res textFile = p{"{"} ../directory/file.txt  {"}"} <br />
                sc numOfLines = (textFile _ read) _ split "\n" _ len
            </Bytl>
            <p className="desc">The <code className="miniBlock px-1">res</code> type represents all backend management within Bytl programs, dealing with streams, input and output, and local storage. The Resource type acts in a more organizational way than a literal value way as its value defaults to a value of type <code className="miniBlock px-1">stream</code> while the other types are subtypes of the <code className="miniBlock px-1">res : oper</code> type which is not assignable and therefore a <HashLink smooth to="#gtypes">ghost</HashLink> type. These subtypes are the input (<code className="miniBlock px-1">in</code>) and local storage (<code className="miniBlock px-1">localize</code>) operators.</p>
            <br />
            <p className="fs-5 desc fw-bold">Exception Accessory Type</p>
            <Bytl>
                exc customException = idfk
            </Bytl>
        </Types>
    )
}