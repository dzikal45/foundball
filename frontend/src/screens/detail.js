import React, { useState, useEffect } from 'react'
import '../assets/style.css'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import Navbar from '../components/navbar'
import { Col } from 'reactstrap'
import axios from "axios"

const Detail = (props) => {
    const [data, setData] = useState(false)
    const { id } = props.match.params
    
    useEffect(()=>{
        axios
            .get(`http://localhost:5000/api/Foundball/${id}`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return (
        <div>
            <Navbar />
            {
                data ?
                    <div className="container pt-5">
                        <Col sm="12" md={{ size:6, offset:3 }}>
                            <h1 style={{ textAlign: "center" }}>
                                <b>{data.title}</b>
                            </h1><br></br>
                        </Col>

                        <Col sm="12" md={{ size:6, offset:3 }}>
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <img style={{ width: "350px", height: "350px", borderRadius: "20px", boxShadow: "20px" }} class="card-img img-fluid" src={data.urlFoto} alt="Foto Pemain" />
                                </div>
                            </div>
                        </Col>

                        <Col sm="12" md= {{ size:6, offset:3 }}>
                            <div className="row mt-5">
                                <table class="table table-borderless">
                                    <tbody style={{ fontSize:"20px", }}>
                                        <tr>
                                            <th scope="row">Nama</th>
                                            <td>{data.nama}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Posisi</th>
                                            <td>{data.posisi}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Age</th>
                                            <td>{data.age}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">From</th>
                                            <td>{data.fromClub}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">To</th>
                                            <td>{data.toClub}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Season</th>
                                            <td>{data.season}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Fee</th>
                                            <td>{data.fee}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">League</th>
                                            <td>{data.league}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </div> : null
            }
        </div>
    )
}

export default Detail