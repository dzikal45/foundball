import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/navbar.css'
import '../assets/style.css'
import Navbar from '../components/navbar'

const HomeScreen = (props) => {
    const [data, setData] = useState([])
    const [nama, setNama] = useState([])
    const [posisi, setPosisi] = useState([])
    const [age, setAge] = useState([])
    const [league, setLeague] = useState([])

    const { search } = props.match.params
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/Foundball/?nama=${search}`)
            .then((response) => {
                console.log(response.data)
                setNama(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/Foundball/?posisi=${search}`)
            .then((response) => {
                console.log(response.data)
                setPosisi(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/Foundball/?league=${search}`)
            .then((response) => {
                console.log(response.data)
                setLeague(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/Foundball/?age=${search}`)
            .then((response) => {
                console.log(response.data)
                setAge(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/Foundball`)
            .then(response=>{
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [search])
    console.log(search)
    console.log('Home Screen')

    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 col">
                        <div>
                            {search ? (<div>
                                <div> <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {nama.length > 0 ? (
                                        <div> <h1> Hasil Pencarian Pemain dengan nama {search}</h1>
                                            {nama.map((e) => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                                <table class="table table-borderless">
                                                                    <tbody style={{ fontSize:"20px", }}>
                                                                        <tr>
                                                                            <th scope="row">Nama</th>
                                                                            <td>{e.nama}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Posisi</th>
                                                                            <td>{e.posisi}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Klub</th>
                                                                            <td>{e.toClub}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    {posisi.length > 0 ? (
                                        <div> <h1> Hasil Pencarian Pemain Dengan Posisi {search}</h1>
                                            { posisi.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                                <table class="table table-borderless">
                                                                    <tbody style={{ fontSize:"20px", }}>
                                                                        <tr>
                                                                            <th scope="row">Nama</th>
                                                                            <td>{e.nama}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Posisi</th>
                                                                            <td>{e.posisi}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Klub</th>
                                                                            <td>{e.toClub}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    {league.length > 0 ? (
                                        <div> <h1> Hasil Pencarian Pemain dari Liga {search}</h1>
                                            { league.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                                <table class="table table-borderless">
                                                                    <tbody style={{ fontSize:"20px", }}>
                                                                        <tr>
                                                                            <th scope="row">Nama</th>
                                                                            <td>{e.nama}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Posisi</th>
                                                                            <td>{e.posisi}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Klub</th>
                                                                            <td>{e.toClub}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}

                                    {age.length > 0 ? (
                                        <div> <h1> Hasil Pencarian Untuk Pemain Yang Berumur {search} Tahun</h1>
                                            { age.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                                <table class="table table-borderless">
                                                                    <tbody style={{ fontSize:"20px", }}>
                                                                        <tr>
                                                                            <th scope="row">Nama</th>
                                                                            <td>{e.nama}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Posisi</th>
                                                                            <td>{e.posisi}</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <th scope="row">Klub</th>
                                                                            <td>{e.toClub}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}</div></div>) : (<h1>Data Tidak Ditemukan</h1></div>

                            ) : (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {data.map(e => (

                                        <div className="grid mx-2 mt-5">
                                            <div className="grid-item">
                                                <Link to={`/detail/${e.id}`}>
                                                    <div className="card">
                                                        <img className="card-img" src={e.urlFoto} style={{ width: "80%", }} />
                                                        <div className="card-content">
                                                            <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <table class="table table-borderless">
                                                    <tbody style={{ fontSize:"20px", }}>
                                                        <tr>
                                                            <th scope="row">Nama</th>
                                                            <td>{e.nama}</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">Posisi</th>
                                                            <td>{e.posisi}</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">Klub</th>
                                                            <td>{e.toClub}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}</div>

                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
