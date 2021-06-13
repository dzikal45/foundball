import react, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import { FaSearch } from 'react-icons/fa'
import { CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { BsDash } from 'react-icons/bs'
import { Label } from 'reactstrap';

const Navbar = (props) => {
    const [search, setSearch] = useState(null)
    const [sNama, setSNama] = useState("")
    const [sPosisi, setSPosisi] = useState("")
    const [sAge, setSAge] = useState("")
    const [sLeague, setSLeague] = useState("")

    const {
        className
    } = props
    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    const drop = () => setDropdownOpen(prevState => !prevState)

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        window.location.href = "/HomeScreen?query=" + search
    }

    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) };

    const [nama, setNama] = useState(true);
    const checkboxNama = () => { setNama(!nama) };

    const [posisi, setPosisi] = useState(true);
    const checkboxPosisi = () => { setPosisi(!posisi) };

    const [age, setAge] = useState(true);
    const checkboxAge = () => { setAge(!age) };

    const [league, setLeague] = useState(true);
    const checkboxLeague = () => { setLeague(!league) }

    const onSubmitHandler = () => {
        window.location.href = "/HomeScreen?nama=" + sNama + "&posisi=" + sPosisi + "&league=" + sLeague + "&age=" + sAge 
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
                                        
                                    <button type='submit' className='btn-search ml-4' onClick={searchHandler} style={{ backgroundColor: "white", padding: "7px", borderRadius: "5px" }}>
                                        <div><FaSearch /></div>
                                    </button>

                                    <Button className="btn-more" onClick={toggle} style={{ backgroundColor: "black",  borderRadius: "5px" , marginLeft:"15px"}}>
                                        <i class="fas fa-bars" style={{fontSize:"33px"}}></i>
                                    </Button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Pencarian Detail</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxNama} id="exampleCustomCheckbox1" label="Nama">
                                <Input type="text" name="Nama" id="searchnama" onChange={(e) => setSNama(e.target.value)} value={sNama} placeholder="Nama Pemain" disabled={nama} />
                            </CustomInput>
                        </FormGroup>

                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxLeague} id="exampleCustomCheckbox2" label="League">
                                <Input type="text" name="league" id="searchleague" onChange={(e) => setSLeague(e.target.value)} value={sLeague} placeholder="Nama Liga" disabled={league} />
                            </CustomInput>
                        </FormGroup>

                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxPosisi} id="exampleCustomCheckbox3" label="Posisi">
                                <Label for="exampleSelect"></Label>
                                <Input onChange={(e) => setSPosisi(e.target.value)} value={sPosisi} placeholder="Posisi" disabled={posisi} type="select" name="select" id="exampleSelect">
                                    <option>...</option>
                                    <option>Goalkeeper</option>
                                    <option>Left Back</option>
                                    <option>Right-Back</option>
                                    <option>Centre-Back</option>
                                    <option>Defensive Midfield</option>
                                    <option>Central Midfield</option>
                                    <option>Attacking Midfield</option>
                                    <option>Left Winger</option>
                                    <option>Right Winger</option>
                                    <option>Centre-Forward</option>
                                </Input>
                            </CustomInput>
                        </FormGroup>

                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxAge} id="exampleCustomCheckbox4" label="Age">
                                <div className="d-flex" >
                                <Input type="text" name="Age" id="searchAge" onChange={(e) => setSAge(e.target.value)} value={sAge} placeholder="Range Umur Minimal" disabled={age} />
                                <div><BsDash /></div>
                                <Input type="text" name="Age" id="searchAge" onChange={(e) => setSAge(e.target.value)} value={sAge} placeholder="Range Umur Maksimal" disabled={age} />
                                </div>
                            </CustomInput>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={onSubmitHandler}>SEARCH</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar;