export default function ControlFlow(props: { title: string, id: string, keyword: string, children: React.ReactNode }) {
    return (
        <>
            <h3 id={ props.id }>{ props.title }&nbsp;—&nbsp;<code>{ props.keyword }</code></h3>
            <hr />
            { props.children }
            <br /><br />
        </>
    )
}