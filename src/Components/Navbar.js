import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className="d-flex">
                    <div className="form-check">
                            <input className="form-check-input bg-success p-2" onChange={props.toggleColorMode} title="Green Dark Mode" type="radio" name="flexRadioDefault" value="#1A4314" id="flexRadioDefault1"/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input bg-primary p-2" onChange={props.toggleColorMode} title="Blue Dark Mode" type="radio" name="flexRadioDefault" value="#003060" id="flexRadioDefault1"/>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input bg-secondary p-2" onChange={props.toggleColorMode} title="Grey Dark Mode" type="radio" name="flexRadioDefault" value="grey" id="flexRadioDefault1"/>
                        </div>
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input mx-2" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'Dark':'Light'} Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Website Name',
    aboutText: 'About Text Here',
    mode: 'light'
}