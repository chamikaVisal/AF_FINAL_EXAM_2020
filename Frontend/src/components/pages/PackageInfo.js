import React, { Component } from 'react'
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import { wait } from '@testing-library/react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MdLocationOn } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
class PackageInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packDetails: [],

            searchKey: "",
            searchResult: "",


            currentPkgName: "",

            showModal: false,

            packageName: '',
            destination: '',
            days: '',
            cost: '',


            pkgRes: '',

            upPackageName: '',
            upDestination: '',
            upDays: '',
            upCost: '',

            currentPkgID: '',
            refresh: false



        };
    }
    componentDidMount() {
        this.loadData();
    }


    loadData = () => {


        let baseURL = "http://localhost:3800/api/admins/getAllPackages";
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },


            method: 'GET',
            url: baseURL,


        })
            .then(response => {
                this.setState({
                    packDetails: response.data
                })
                console.log("success")
                console.log(this.state.packDetails)
                var len = this.state.packDetails.length;

                console.log(len + "this is the lenth")

            })
        //setting the auto refresh time as every 40 secs
        //.then(setInterval(this.loadData, 40000))


    }


    deletePackage = (_id) => {
        console.log("arrived to delete")
        console.log(_id + " this is id")

        let baseURL = "http://localhost:3800/api/admins/deletePackage/" + _id;
        console.log("2nd ok")

        axios({


            method: 'DELETE',
            url: baseURL,


        })

            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Package deleted successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })



                }




            }).then(this.doFrefresh)

        //    window.location.reload(false)

        // .then(setTimeout(() => { console.log("World!"); }, 5000))
        //  .then(window.location.reload(true), 4000)
        //setting the auto refresh time as every 40 secs
        //.then(setInterval(this.loadData, 40000))


    }
    doFrefresh() {
        sleep(2000);
        window.location.reload(false)
    }
    captureInput = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            searchKey: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.searchKey);
        });

        console.log("New state DIRECTLY after setState:", this.state.searchKey);
        console.log("New state DIRECTLY after setState:", this.state.searchKey);
    }

    searchPackage = (event) => {


        event.preventDefault();
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'GET',
            url: 'http://localhost:3800/api/admins/getbyPackageName/' + this.state.searchKey,
        })
            .then(response => {
                console.log("Arrived to send request")
                if (response.status === 200) {

                    this.setState({
                        searchResult: response.data
                    })
                    if (this.state.searchResult.data === null) {
                        Swal.fire({
                            position: 'middle',
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No results found!',
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Travel Package Found',
                            showConfirmButton: false,
                            timer: 1500
                        })


                        console.log(this.state.searchResult.data.packageName)
                        this.setState({
                            currentPkgName: this.state.searchResult.data.packageName
                        })
                        console.log("this is package name  =Found=" + this.state.currentPkgName)
                    }

                }

            })
            .catch((console.log("ISSUES !")))

    }
    updatePackageName = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            packageName: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.packageName);
        });

        console.log("New state DIRECTLY after setState:", this.state.packageName);

    }

    updateDestination = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            destination: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.destination);
        });

        console.log("New state DIRECTLY after setState:", this.state.destination);
        console.log("New state DIRECTLY after setState:", this.state.destination);
    }
    updatedays = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            days: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.days);
        });

        console.log("New state DIRECTLY after setState:", this.state.days);
        console.log("New state DIRECTLY after setState:", this.state.days);
    }
    updatecost = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            cost: parseInt(event.target.value)
        }, () => {
            console.log("New state in ASYNC callback:", this.state.cost);
        });

        console.log("New state DIRECTLY after setState:", this.state.cost);
        console.log("New state DIRECTLY after setState:", this.state.cost);
    }

    go = (packageName, destination, days, cost) => {
        this.setState({
            upPackageName: packageName,
            upDestination: destination,
            upDays: days,
            upCost: cost,

        })
        console.log(this.state.upPackageName + " this is the name to show first")

    }

    updatePakagedeatils = (_id) => {

        //event.preventDefault();
        // alert("successfully added")
        if (this.state.packageName === "" ||
            this.state.destination === "" ||
            this.state.days === "" ||
            this.state.cost === "") {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your Inputs!',
                timer: 1500
            })
        }
        else {
            let pkgbody = JSON.stringify(
                {
                    "packageName": this.state.packageName,
                    "destination": this.state.destination,
                    "days": this.state.days,
                    "cost": this.state.cost

                }
            );
            axios({
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },

                method: 'PUT',
                url: 'http://localhost:3800/api/admins/updatePackage/' + _id,
                data: pkgbody,

            })
                .then(response => {
                    console.log("Arrived to send request")
                    this.setState({
                        pkgRes: response.data
                    })
                })
                .then(() => {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Package Updated Successfully',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    this.setState({
                        showModal: false
                    })
                })

                .catch((console.log("ISSUES !")))


        }


    }


    render() {

        return (
            <div style={{ backgroundImage: 'url("https://i.inews.co.uk/content/uploads/2020/05/holiday.jpg")', backgroundSize: "cover", position: "relative", height: "800px" }}>
                <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 200, }}>
                    <br />
                    <h2 style={{ color: "black", justifyContent: 'center', alignItems: 'center' }}>Package List </h2>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Package Name" aria-label="Search" onChange={this.captureInput} required />
                        <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={this.searchPackage}>Search</button>
                    </form>
                    <br></br>

                    <table className="table table-light" style={{ height: 600, width: "100%", overflow: "auto", display: "block", opacity: 0.8 }}>


                        <thead>

                        </thead>
                        <tbody style={{ opacity: 1 }}>
                            {this.state.packDetails.map(pkg =>

                                <tr style={{ backgroundColor: this.state.currentPkgName === pkg.packageName ? '#22aeb5' : '' }} >

                                    {/* MODA for update package-------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Modal isOpen={this.state.showModal}
                                        style={{
                                            overlay: {
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                            },
                                            content: {
                                                position: 'absolute',
                                                top: '80px',
                                                left: '540px',
                                                right: '540px',
                                                bottom: '100px',
                                                border: '4px solid #ccc',
                                                background: '#fff',
                                                overflow: 'auto',
                                                // WebkitOverflowScrolling: 'touch',
                                                borderRadius: '30px',
                                                outline: '5px',
                                                padding: '20px'
                                            }
                                        }}
                                    >
                                        <GiCancel style={{ marginLeft: 520 }} size={30} onClick={() => this.setState({ showModal: false })} />
                                        <form style={{ marginBottom: 100, marginLeft: 100 }}>
                                            <br />
                                            <br />
                                            <h2 style={{ color: 'black' }}>Update Package Details</h2>
                                            <br />
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <label htmlFor="validationDefault01">Package Name</label>
                                                    <input type="text" className="form-control" id="validationDefault01" placeholder={this.state.upPackageName} required
                                                        onChange={this.updatePackageName} />
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label htmlFor="validationDefault02">Destination</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upDestination} required
                                                        onChange={this.updateDestination} />
                                                </div>
                                            </div>
                                            {/* <div className="form-row">
                                                <div className="form-group col-md-8">
                                                    <label htmlFor="validationDefault04">Days</label>
                                                    <input type="email" className="form-control" id="validationDefault01" placeholder={this.state.upDays}
                                                        onChange={this.updatedays} />
                                                </div>
                                            </div> */}
                                            <div className="form-row">
                                                <div className="form-group col-md-8">
                                                    <label htmlFor="validationDefault02">Days</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upDays} required
                                                        onChange={this.updatedays} />
                                                </div>
                                            </div>


                                            <div className="form-row">
                                                <div className="form-group col-md-8">
                                                    <label htmlFor="validationDefault04">Cost</label>
                                                    <input type="text" className="form-control" id="validationDefault04" placeholder={this.state.upCost}
                                                        onChange={this.updatecost} />
                                                </div>

                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <button onClick={() => this.updatePakagedeatils(this.state.currentPkgID)} className="btn btn-primary" type="submit" >Update</button>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <button onClick={() => this.setState({ showModal: false })} className="btn btn-primary" >Close</button>
                                                </div>
                                            </div>

                                        </form>
                                    </Modal>
                                    {/* MODAL-------------------------------------------------------------------------------------------------------------------------------- */}
                                    <td style={{}}><MDBCol>
                                        <MDBCard style={{ width: "22rem" }}>
                                            <MDBCardImage className="img-fluid" src="https://marketingland.com/wp-content/ml-loads/2016/05/travel-search-suitcasebeach-ss-1920.png" waves />
                                            <MDBCardBody>
                                                <MDBCardTitle>{pkg.packageName}</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card&apos;s content.
          </MDBCardText>
                                                <MDBBtn href="https://www.google.com/">View more</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    </td>
                                    <td style={{ paddingLeft: 140, marginTop: 10 }}> <MdLocationOn size={20} /> {pkg.destination} <br /><br /><MdDateRange size={20} /> {pkg.days} Days <br /><br /><AiFillDollarCircle size={20} />  {pkg.cost}
                                        <br /><br /> <h2>Description</h2> <br /><br /> <h5>sample description</h5> </td>
                                    <td style={{ paddingLeft: 140 }}></td>
                                    <td style={{ paddingLeft: 140 }}></td>
                                    <td style={{ paddingLeft: 140 }}></td>
                                    <td style={{ paddingLeft: 100 }}> <button type="button" className="btn btn-secondary" onClick={() => {
                                        this.go(pkg.packageName, pkg.destination, pkg.days, pkg.cost)
                                        this.setState({
                                            currentPkgID: pkg._id
                                        })

                                        this.setState({ showModal: true });
                                    }}>Update</button></td>

                                    <td><button type="button" onClick={() => this.deletePackage(pkg._id)} className="btn btn-light">Delete</button></td>
                                    <hr />

                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PackageInfo;