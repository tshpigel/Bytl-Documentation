import { ReactElement, ReactNode } from 'react'

export const Content = (props: { children?: ReactNode }): ReactElement => {
    return (
        <div className='container h-100 position-absolute content'>
            { props.children }
        </div>
    )
}