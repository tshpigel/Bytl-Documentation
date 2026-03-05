import * as React from 'react'

export const Code = (props: { children?: React.ReactNode }): React.ReactElement => {
    // const ref = React.useRef<HTMLPreElement | null>(null);
    // React.useEffect(() => {
    //     const text = ref.current?.textContent as string;
    //     let textCopy = text;
    //     const highlight: { [r: string]: string } = {
    //         "\\b(num|int|dec|sc|char|arr|vect|coll|seq|uni|bool|val|assoc|res|in|file|proc|alg|fnc|json|ambg|localize|complex|cmacro|([dfgrs]type|context|rel)(?![^\\n]*=))\\b": 
    //             "decl",
    //         "\\b(if|while|for|efor|rn|else|eif|welse|switch|def|sysc|elw|cycle|cont|br|skip|case|regress|next)\\b": 
    //             "keyword",
    //         "((?<![a-zA-Z])\\d+)": 
    //             "numeric",
    //         "\\b(Set|Event|When|Mute|rn|Dtype|Ktype|Args|Nilq|Enable|Ship|Infer|Strict|That|Apply|Alias|Expunge|Soc|Crt|Adj|Serialize|Augment|Coerce)\\b":
    //             "proc",
    //         "(\\=)": "keyword"
    //     };

    //     for(const h in highlight) {
    //         const r = new RegExp(h, 'g');
    //         if(r.test(text))
    //             textCopy = text.replaceAll(r, `<span class="${highlight[h]}">$1</span>`);
    //     }

    //     ref.current!.innerHTML = textCopy;
    // }, []);
    return (
        <pre className='cblock'>
            { props.children }
        </pre>
    )
}