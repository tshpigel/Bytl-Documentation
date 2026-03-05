export default function Symbols(props: { title: string, id: string, sym: string[], children: React.ReactNode }) {
    return (
        <>
            <h3 id={ props.id }>{ props.title }&nbsp;—&nbsp;<code>{ props.sym.join('\t\t') }</code></h3>
            <hr />
            { props.children }
            <br /><br />
        </>
    )
}