import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

class AddTravelPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageName: '',
            destination: '',
            days: '',
            cost: '',


            packRes: '',

        };
    }
    updatepkName = event => {
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
    updateDuration = event => {
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
    updateCost = event => {
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


    addNewPackage = (event) => {
        if ((this.state.packageName === "") || (this.state.destination === "") || (this.state.days === "") || (this.state.cost === "")) {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your inputs again!',
                timer: 1500
            })

        }

        event.preventDefault();
        // alert("successfully added")
        let pkBody = JSON.stringify(
            {
                "packageName": this.state.packageName,
                "destination": this.state.destination,
                "days": this.state.days,
                "cost": this.state.cost,

            }
        );
        axios({
            headers: {
                //'Content-Type ': 'application/x-www-form-urlencoded;charset=UTF-8',
                // 'Content-Type': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'POST',
            url: 'http://localhost:3800/api/admins/createPackage',
            data: pkBody,

        })
            .then(response => {
                console.log("Arrived to send request")
                this.setState({
                    packRes: response.data
                })

            })
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Package Added Successfully',
                    showConfirmButton: false,
                    timer: 3500
                })
            })

            .catch((console.log("ISSUES !")))

    }


    render() {
        return (
            <div style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/714/452/950/passport-map-wine-of-greece-magnifier-wallpaper-preview.jpg")', backgroundSize: "cover", position: "relative", height: "560px" }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 25, height: 500, width: 500, justifyContent: 'center', marginLeft: 500 }} >
                    <div className="card-body">
                        <form style={{ marginLeft: 50 }}>
                            <h2 style={{ color: 'black' }}>Add New Travel Package</h2>
                            <br />
                            <div className="form-row">
                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationDefault01">Package Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="package name" required
                                        onChange={this.updatepkName} />
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationDefault02">Destination</label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder="destination" required
                                        onChange={this.updateDestination} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Duration</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="no of days"
                                        onChange={this.updateDuration} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="validationDefault04">Cost</label>
                                    <input type="text" className="form-control" id="validationDefault04" placeholder="Cost" required
                                        onChange={this.updateCost} />
                                </div>

                            </div>

                            <button onClick={this.addNewPackage} className="btn btn-primary" type="submit">Add Package</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddTravelPackage;
