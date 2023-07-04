import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "#e95598" }} href="/"><b>{"<Wear-MyShirt/>"}</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    T-Shirts
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Sleeveless</a></li>
                                    <li><a className="dropdown-item" href="/">Half Sleeves</a></li>
                                    <li><a className="dropdown-item" href="/">Full Sleeves</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">New Arrivals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Summer Stuff</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Winter Stuff</a>
                            </li>

                        </ul>

                        <a style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success mx-1" href="/" role="button">Login</a>
                        <a style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success mx-2" href="/" role="button">SignUp</a>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar