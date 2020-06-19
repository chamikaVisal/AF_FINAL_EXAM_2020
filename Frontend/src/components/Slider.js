import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import React from 'react'
function Slider() {
    return (
        <div style={{
            // backgroundImage: 'url("https://image.freepik.com/free-photo/watercolor-splash-background_23-2148175602.jpg")',
            // backgroundSize: "cover", position: "relative",
        }}>
            <br />
            <br />
            <div className="card-deck" style={{ marginLeft: 100, marginRight: 100, marginBottom: -80 }}>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://i1.sndcdn.com/artworks-000579618092-e3wy8f-t500x500.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Explore</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/addTravelPackage"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://www.citybaseapartments.com/blog/wp-content/uploads/2017/05/Travelling-in-the-UK_iStock-516944521-medium.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body" style={{ height: 200 }}>
                        <h5 className="card-title">Travel Packages</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://betteraviationjobs.com/wp-content/uploads/2020/01/Etihad-Airways-Cabin-Crew-1.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Our partners</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <a href="https://www.etihad.com/en-lk/"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
export default Slider;

