import React, { useState, useEffect } from 'react'
import '../assets/navbar.css'
import '../assets/style.css'
import '../assets/paginate.css'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import axios from "axios"
import queryString from 'query-string'
import ReactPaginate from 'react-paginate';

const Page = (props) => {
    const [ data, setData ] = useState([])
    const [ page, setPage ] = useState(0)
    
    const playersPerPage = 8
    const pagesVisited = page * playersPerPage

    const pageCount2 = Math.ceil(data.length / playersPerPage)

    const changePage = ({ selected }) => {
        setPage(selected)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/api/Foundball`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-lg-12 col'>
                        <div>
                            <h1>Hasil Pencarian</h1>
                            {
                                <div>
                                    <div>
                                        <div className='result-card flex-wrap d-flex justify-content-center w-100'>
                                            <div className="row w-100 mb-4 mt-4">
                                                {data
                                                    .slice(pagesVisited, pagesVisited+playersPerPage)
                                                    .map( e => (
                                                        <div>
                                                            <div className='grid mx-2 mt-5'>
                                                                <div className='grid-item'>
                                                                    <Link to={`/detail/${e.id}`}>
                                                                        <div className='card'>
                                                                            <img className='card-img' src={e.urlFoto} style= {{ width: '80%' }} />
                                                                            <div className='card-content'>
                                                                                <h1 className='card-header' style={{ textAlign: 'center' }}>{e.title}</h1>
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
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Page
