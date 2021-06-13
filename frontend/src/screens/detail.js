import React, { useState, useEffect } from 'react'
import '../assets/style.css'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import Navbar from '../components/navbar'
import { Col } from 'reactstrap'
import axios from "axios"

const Detail = (props) => {
    const [posisi, setPosisi] = useState([])
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
        axios
            .get(`http://localhost:5000/api/recommendation/?posisi=${data.posisi}`)
            .then(response => {
                setPosisi(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id, data.posisi])

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

                        <h2 style={{ marginTop: "100px" }}>Transfer dengan posisi yang sama</h2>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="result-card flex-wrap d-flex justify-content-center w-100" style={{ marginTop: "100px", marginBottom:"50px" }}>
                                    {
                                        posisi.map(e => (
                                            e.id !== data.id ?
                                            <div className='grid-item'>
                                                <Link to={`/detail/${e.id}`} >
                                                    <div className="card">
                                                        <img className="card-img" src={e.urlFoto} style={{ width: "80%", }} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                        </div>
                                                        <tbody style={{ fontSize:"20px", }}>
                                                            <tr>
                                                                <th scope="row">Nama</th>
                                                                <td>{e.nama}</td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">Klub</th>
                                                                <td>{e.toClub}</td>
                                                            </tr>
                                                        </tbody>
                                                        
                                                    </div>
                                                </Link>
                                            </div>
                                            : null
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Detail