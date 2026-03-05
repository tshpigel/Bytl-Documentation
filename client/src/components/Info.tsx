import * as React from 'react'



export const Info = (props: { children?: React.ReactNode }): React.ReactElement => {
    return (
        <pre className='cblock'>
            { props.children }
        </pre>
    )
}