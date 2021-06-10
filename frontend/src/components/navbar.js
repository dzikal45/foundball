import react, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    const [search, setSearch] = useState(null)

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <nav
                className="navbar navbar-desktop navbar-expand"
                style={{ zIndex: "2" }}
            >
                <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className=" navbar-nav d-flex align-items-start">
                        <li className="nav-item">
                            <Link className="navbar-brand ml-5 mt-3" to="/">
                                <img src="https://i.ibb.co/z7PcVs3/F-und-Ball.png" alt="logo" />
                            </Link>
                        </li>

                        <li className="nav-item search-custom w-100" style={{ marginLeft: "15%",marginRight: "20%" }}>
                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group has-search">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Player"
                                        value={search}
                                        onChange={inputHandler}
                                        style={{ borderRadius: "5px", fontSize: "15px", padding: "20px", paddingLeft: "1%" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        />
                                        <Link to={`/${search}`}>
                                            <button type="submit" className="btn-search ml-4" style={{ backgroundColor: "white", padding:"7px", borderRadius:"5px" }}>
                                                <div><FaSearch /></div>
                                            </button>
                                        </Link>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;