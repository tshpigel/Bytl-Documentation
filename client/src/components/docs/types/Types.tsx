export default function Types(props: { title: string, id: string, cformat?: string, children: React.ReactNode }) {
    return (
        <>
            <h3 id={ props.id }>{ props.title }&nbsp;{ props.cformat ? '—' : '' }&nbsp;<code>{ props.cformat }</code></h3>
            <hr />
            { props.children }
            <br /><br />
        </>
    )
}