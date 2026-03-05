import { ReactElement, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Cookies from 'js-cookie'
import bytlLogo from '../assets/bytl.png'
import * as Icon from 'react-bootstrap-icons'


export const Topbar = (): ReactElement => {
    const [LSB, setLSB] = useState<string>("dnone"); // LSB: login settings box

    const select = (e: React.MouseEvent): void => {
      const c = e.target as Element;
      c.parentElement?.parentElement?.parentElement?.querySelectorAll('button').forEach(e => e.classList.remove('cur'));
      c?.classList.add('cur');
    };

    const logout = (): void => {
      Cookies.remove("logged");
      window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand">
          <div id="topbar" className="container-fluid">
            <a className="navbar-brand">
              <img src={bytlLogo} className="logo"/>
              &nbsp;<span id="logotext">BYTL</span>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/installation"><button className='nav-link'>Installation</button></Link>
                </li>
                <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/docs"><button className='nav-link'>Documentation</button></Link>
                </li>
                {/* <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/tutorial"><button className='nav-link'>Tutorial</button></Link>
                </li>
                <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/aidev"><button className='nav-link'>AI&nbsp;Dev</button></Link>
                </li> */}
                <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/source"><button className='nav-link'>Source</button></Link>
                </li>
                <li className="nav-item" onClick={select}>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/editor"><button className='nav-link'>Editor</button></Link>
                </li>
                <li className="nav-item">
                  <button onClick={() => window.open("https://github.com/tshpigel/Bytl", "_blank")} 
                    className="nav-link" id="specialGithub" 
                    title="Well not sure how you would get here without the original GitHub but sure">
                    <Icon.Github id="github"/>
                  </button>
                </li>
              </ul>
            </div>
            <span id="toprightstuff">
              <span id='search'>
                <input placeholder="Search" className="ms-3"/>
                <Icon.Search id="searchIcon" className="me-3"/>
              </span>
              
              <span id='account'>
                { !!Cookies.get("logged") ? 
                  <Icon.Gear id='gear' onClick={() => LSB ? setLSB("") : setLSB("dnone")}/> : 
                  <Link to="/user/signup">
                    <Icon.PersonSquare id='psquare'/>
                  </Link>
                }
              </span>
            </span>
          </div>
          <span className={LSB} id="settings">
            <span>{ Cookies.get("logged") }</span>
            <span id='news'><input type="checkbox" checked={true} /><span>Receive Newsletter</span></span>
            <button onClick={logout}>Log Out</button>
          </span>
        </nav>
    )
}