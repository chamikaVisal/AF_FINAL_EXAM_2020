

import React, { Component } from 'react'
import { MDBBtn } from "mdbreact";
import Logo from '../logo.png'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#37474f", height: 60 }}>
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src={Logo} height="60px" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/addTravelPackage">Add Travel Packages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/PackageInfo">Package Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/userInfo">User Info</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
              </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <a href="http://localhost:3000/userLogin">< MDBBtn color="blue-grey" style={{ padding: 5 }} > Login</MDBBtn></a>


                    <a href="http://localhost:3000/userSignup">< MDBBtn color="blue-grey" style={{ padding: 5 }} >Register</MDBBtn></a>


                </div>
            </nav>
        )
    }
}
export default Navbar;



