import { ReactElement, ReactNode } from 'react'

export const Sidebar = (props: { children?: ReactNode }): ReactElement => {
    return (
        <div className='vh-100 sidebar'>
            { props.children }
            <br /><br />
        </div>
    )
}