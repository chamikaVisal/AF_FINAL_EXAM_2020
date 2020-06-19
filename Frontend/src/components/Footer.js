import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { MDBBtn } from "mdbreact";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Footer() {
    return (
        <div className="main-footer " style={{ backgroundColor: "#37474f" }}>
            <div className="container">
                <div className="row">
                    {/* col 1 */}
                    <div className="col-md-4 col-sm-6 " style={{ color: 'white', marginTop: 10 }}>
                        <h4>Who we are</h4>
                        <ul className="list-unstyled">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </ul>

                    </div>

                    {/* col 3 */}
                    <div className="col-md-4 col-sm-6 " style={{ color: 'white', marginTop: 10 }}>
                        <h4>We are on</h4>
                        <ul className="list-unstyled">
                            <a style={{ color: "white" }} href="https://www.facebook.com/">  <li><FaFacebookSquare style={{ marginRight: 15 }} />facebook</li></a>

                            <li><FaTwitterSquare style={{ marginRight: 15 }} />Twitter</li>
                            <li><FaGooglePlus style={{ marginRight: 15 }} />Google Plus</li>
                            <li><FaLinkedin style={{ marginRight: 15 }} />Linkedin</li>
                        </ul>

                    </div>
                    {/* col 4 */}

                    <div className="col-md-4 col-sm-6 " style={{ color: 'white', marginTop: 10 }}>
                        <h4>Admin section</h4>
                        <ul className="list-unstyled">
                            <a href="http://localhost:3000/adminLogin">< MDBBtn color="blue-grey" style={{ padding: 5 }} > <TiUser size={30} />Admin Login</MDBBtn></a>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;


