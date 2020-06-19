import React, { Component } from 'react'
import axios from 'axios';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: [],
        };
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let baseURL = "http://localhost:3800/api/users/getAllUserInfo";
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            method: 'GET',
            url: baseURL,
        })
            .then(response => {
                this.setState({
                    userDetails: response.data
                })
                console.log("success")
                console.log(this.state.userDetails)
                var len = this.state.userDetails.length;

                console.log(len + "this is the lenth")

            })
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("https://d3timt52sxdbq0.cloudfront.net/wp-content/uploads/2017/04/empoweremployees.jpg")', backgroundSize: "cover", position: "relative", height: "560px" }}>
                <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 200, }}>
                    <br />
                    <h2 style={{ color: "black", fontWeight: 'bold ' }}>User List </h2>

                    <br></br>

                    <table className="table table-dark" style={{ height: 350, width: "100%", overflow: "auto", display: "block", opacity: 0.8 }}>
                        <thead>
                            <tr style={{ fontWeight: 'bold', backgroundColor: '#022c3b', width: 30 }}>
                                <th scope="col" style={{ width: 50 }} >First Name</th>
                                <th scope="col" style={{ paddingLeft: 270 }}>Last Name</th>
                                <th scope="col" style={{ paddingLeft: 270 }}>Age</th>
                                <th scope="col" style={{ paddingLeft: 200 }}>Country</th>
                                <th scope="col" style={{ paddingLeft: 320 }}>Email</th>

                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody style={{}}>
                            {this.state.userDetails.map(user =>
                                <tr style={{}}>
                                    <td style={{}}>{user.firstName}</td>
                                    <td style={{ paddingLeft: 270 }}>{user.lastName}</td>
                                    <td style={{ paddingLeft: 270 }}>{user.age}</td>
                                    <td style={{ paddingLeft: 200 }}>{user.country}</td>
                                    <td style={{ paddingLeft: 200 }}>{user.email}</td>


                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default UserInfo;
