import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import './styles.css';

export default function Header() {
    const [mobileSearch, setMobileSearch] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [mobileSize, setMobileSize] = useState(false)
    const [displayed, setDisplayed] = useState(false)
    const [results, setResults] = useState("");

    useEffect(() => {
        if (window.innerWidth <= 320) {
            setMobileSize(true)
        }
    }, [])

    const options = [
        "sapatos",
        "tenis",
        "ca",
        "calcas",
        "calças",
        "camisetas",
        "camisas",
    ]

    function onSearching(e) {
        setResults(e.toLowerCase())
    }


    function searchIn() {
        if (results === "") {
            return
        }
        if (options.find(tree => tree.startsWith(results)) === "ca") {
            return (
                <div style={{ display: displayed ? '' : 'none' }} className="card">
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/camisetas" className="card-body">Camisetas</Link>
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/calcas" className="card-body">Calças</Link>
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "camisetas" || options.find(tree => tree.startsWith(results)) === "camisas") {
            return (
                <div style={{ display: displayed ? '' : 'none' }} className="card">
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/camisetas" className="card-body">Camisetas</Link>
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/camisetas" className="card-body">Camisas</Link>
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "calcas" || options.find(tree => tree.startsWith(results)) === "calças") {
            return (
                <div style={{ display: displayed ? '' : 'none' }} className="card">
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/calcas" className="card-body">Calças</Link>
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "tenis" || options.find(tree => tree.startsWith(results)) === "sapatos") {
            return (
                <div style={{ display: displayed ? '' : 'none' }} className="card">
                    <Link onClick={() => setDisplayed(displayed ? false : true)} to="/sapatos" className="card-body">Sapatos</Link>
                </div>
            )
        }
        else {
            return (
                <div style={{ display: displayed ? '' : 'none' }} className="card">
                    <Link onClick={() => setDisplayed(displayed ? false : true)} className="card-body">Sem resultados</Link>
                </div>
            )
        }
    }

    return (
        <header>
            <div className="topnav">
                <p><b>Acesse sua Conta</b> ou <b>Cadastre-se</b></p>
            </div>
            <div className="midnav">
                <button className="mobileHeader" onClick={() => setMobileMenu(mobileMenu ? false : true)} style={{ backgroundColor: 'transparent', border: '0' }} type="submit"><FiMenu size={30} color='var(--grey)' /></button>
                <img src="/assets/logo.png" alt="" />
                <button className="mobileHeader" onClick={() => setMobileSearch(mobileSearch ? false : true)} style={{ backgroundColor: 'transparent', border: '0' }} type="submit"><FiSearch size={30} color='var(--bg-color)' /></button>
                <div className="search-container">
                    <input onChange={e => onSearching(e.target.value)} style={mobileSize ? { display: mobileSearch ? '' : 'none' } : {}} type="text" placeholder="Search.." name="search" />
                    <button style={mobileSize ? { display: mobileSearch ? '' : 'none' } : {}} onClick={() => setDisplayed(displayed ? false : true)}>BUSCAR</button>
                    {
                        searchIn()
                    }
                </div>

            </div>
            <div className="bottomnav" style={mobileSize ? { width: mobileMenu ? '50%' : '0%', display: mobileMenu ? '' : 'none' } : {}}>
                <ul>
                    <li>
                        <Link className="text-uppercase" to="/"><b>Página inicial</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="/camisetas"><b>Camisetas</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="/calcas"><b>Calças</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="/sapatos"><b>Sapatos</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="/"><b>Contato</b></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}