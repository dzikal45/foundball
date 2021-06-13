import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/navbar.css'
import '../assets/style.css'
import Navbar from '../components/navbar'
import ReactPaginate from 'react-paginate';
import queryString from 'query-string'

const HomeScreen = (props) => {
    const { search } = props.match.params
    const [data, setData] = useState([])
    const [find, setFind] = useState([])
    const [page, setPage] = useState(0);
    let path = props.location.search;
    let params = queryString.parse(path);

    const playersPerPage = 8;
    const pagesVisited = page * playersPerPage;

    const pageCount = Math.ceil(data.length / playersPerPage);
    const pageCount2 = Math.ceil(find.length / playersPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    };
    
    useEffect(() => {
        if(params.query != null){
            axios
                .get(`http://localhost:5000/api/search?search=${params.query}`)
                .then((response)=> {
                    setFind(response.data.data)
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            axios
                .get(`http://localhost:5000/api/Foundball/?nama=${params.nama}&posisi=${params.posisi}&league=${params.league}&age=${params.age}`)
                .then((response)=> {
                    setData(response.data.data)
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [search])

    console.log(search)
    console.log('Home Screen')

    return (
        <div>
            <Navbar />
            <div className='container pt-5'>
                <div className='col-lg-12 col'>
                    <div>
                        <h1>Hasil Pencarian : </h1>
                        { params.query ?
                            <div>
                                { find.length !== 0 ?
                                (
                                    <div>
                                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                            <div className="row w-100 mb-4 mt-4">
                                                {find
                                                    .slice(pagesVisited, pagesVisited+playersPerPage)
                                                    .map(e => (
                                                        <div>
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
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <ReactPaginate
                                                previousLabel={"Previous"}
                                                nextLabel={"Next"}
                                                pageCount={pageCount2}
                                                onPageChange={changePage}
                                                containerClassName={"paginationBttns"}
                                                previousLinkClassName={"previousBttn"}
                                                nextLinkClassName={"nextBttn"}
                                                disabledClassName={"paginationDisabled"}
                                                activeClassName={"paginationActive"}
                                            />
                                        </div>
                                    </div>
                                ) : (<h1>Data tidak ditemukan</h1>)}
                            </div>

                            : (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {
                                        data
                                            .slice(pagesVisited, pagesVisited+playersPerPage)
                                            .map(e=> (
                                                <div className="grid mx-2 mt-5">
                                                    <Link to={`/detail/${e.id}`}>
                                                        <img className="card-img" src={e.urlFoto} style={{ width: "80%", }} />
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
                                                    </Link>
                                                </div>
                                            ))
                                    }
                                    <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            pageCount={pageCount}
                                            onPageChange={changePage}
                                            containerClassName={"paginationBttns"}
                                            previousLinkClassName={"previousBttn"}
                                            nextLinkClassName={"nextBttn"}
                                            disabledClassName={"paginationDisabled"}
                                            activeClassName={"paginationActive"}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
