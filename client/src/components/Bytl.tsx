import * as React from 'react'
import { syntaxB, syntaxT } from './syntax';

export const Bytl = (props: { edit?: boolean, ts?: boolean, children?: React.ReactNode }): React.ReactElement => {
    const syntax = props.ts ? syntaxT : syntaxB;
    const toText = (html: string) => {
        return html.replace(/<\/span>|<span class="[a-zA-Z]+">/g, '');
    };
    const r = React.useRef<HTMLPreElement | null>(null);
    const er = React.useRef<HTMLDivElement | null>(null);
    function sxhg(ref: React.MutableRefObject<HTMLPreElement | HTMLDivElement | null>) {
        const text = toText(ref.current?.innerHTML.replace(/<br>/g, '\n') as string);
        let textCopy = text;
        
        for(const s in syntax) {
            const r = new RegExp(s, 'g');
            if(r.test(text))
                textCopy = textCopy.replace(r, `<span class="${syntax[s]}">$1</span>`);
        }
        ref.current!.innerHTML = textCopy;
    }
    if(!props.edit)
        React.useEffect(() => { sxhg(r) }, []);

    function isxhg() {
        sxhg(er);
    }

    function repl() {
        console.log(er.current!.innerHTML);
        er.current!.innerHTML.replace(/<div>(.*)<\/div>/g, '<br>$2');
    }

    return props.edit ? (
        <div ref={er} onKeyDown={repl} contentEditable suppressContentEditableWarning>
            { props.children }
        </div>
    ) : (
        <pre ref={r} className='cblock'>
            { props.children }
        </pre>
    )
}