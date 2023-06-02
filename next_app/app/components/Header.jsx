"use client"
import Link from "next/link";
import {useState} from "react";


const Header=()=> {

    const[count,setCount]=useState(0)

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link  className="nav-link active" href="/">Home</Link>
                        <Link  className="nav-link" href="/about">About</Link>
                        <Link  className="nav-link" href="/about/team">our Team</Link>
                    </div>
                </div>
            </div>
        </nav>
        </>

}

export default Header;