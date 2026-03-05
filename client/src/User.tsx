import { useState } from 'react';
import './User.css'
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'
import Cookies from 'js-cookie'

interface UserProps {
    signup?: boolean
}

function User(props: UserProps) {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [check, setCheck] = useState<JSX.Element>(<></>);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    function successDelay(link: string) {
        setCheck(<>&nbsp;<Icon.CheckLg id='check'/></>);

        setTimeout(() => {
            navigate(link);
            setCheck(<></>);
        }, 1000);
    }

    function signup(e: React.MouseEvent): void {
        e.preventDefault();
        console.log(email, pass);
        fetch("http://localhost:2000/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, pass })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.success);
            if(data.success) {
                successDelay("/user/login");
            } else {

                setError("This e-mail is already in use");
            }
        })
        .catch(e => console.error('An error occured', e));
    }

    function login(e: React.MouseEvent): void {
        e.preventDefault();
        console.log(email, pass);
        fetch("http://localhost:2000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, pass })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'data');
            if(data.success) {
                Cookies.set("logged", email);
                console.log("success", data);
                successDelay("/docs");
            } else {
                setError("Incorrect e-mail or password");
            }
        })
        .catch(e => console.error('An error occured', e));
    }

    function signupJSX(): JSX.Element {
        return <>
            <input id='email' name='email' type="email" 
                placeholder='e-mail' value={email} onChange={e => setEmail(e.target.value)}/>
            <span className='u1span'>
                <input type="password" name="pass" id="pass" 
                placeholder='password (optional)' value={pass} onChange={e => setPass(e.target.value)}/>
                {/* <Icon.QuestionSquareFill onMouseEnter={explainPass} id='qmark'/> */}
            </span>
            <Link className='nostyle' to="/user/login" onClick={signup}><button className='reg'>Register{ check }</button></Link>
            { error ? <span className='error'>{ error }</span> : "" }
            <span className='u2span'>Already Registered? <Link to="/user/login">Log In</Link></span>
        </>
    } function loginJSX(): JSX.Element {
        return <>
            <input id='email' name='email' type="email" 
                placeholder='e-mail' value={email} onChange={e => setEmail(e.target.value)}/>
            <span className='u1span'>
                <input type="password" name="pass" id="pass" 
                placeholder='password (optional)' value={pass} onChange={e => setPass(e.target.value)}/>
                {/* <Icon.QuestionSquareFill onMouseEnter={explainPass} id='qmark'/> */}
            </span>
            <Link className='nostyle' to="/docs" onClick={login}><button className='reg'>Log In{ check }</button></Link>
            { error ? <span className='error'>{ error }</span> : "" }
            <span className='u2span'>Don't have an account? <Link to="/user/signup">Sign Up</Link></span>
        </>
    }

    return (
        <div className="User">
            <div id="container">
                <div id="sub">
                    { props.signup ? signupJSX() : loginJSX() }
                </div>
            </div>
        </div>
    )
}

export default User