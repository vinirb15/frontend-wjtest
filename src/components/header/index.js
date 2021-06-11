import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu } from 'react-icons/fi';
import './styles.css';

export default function Header() {
    const [mobileSearch, setMobileSearch] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <header>
            <div className="topnav">
                <p><b>Acesse sua Conta</b> ou <b>Cadastre-se</b></p>
            </div>
            <div className="midnav">
                <button className="mobileHeader" onClick={() => setMobileMenu(mobileMenu ? false : true)} style={{ backgroundColor: 'transparent', border: '0' }} type="submit"><FiMenu size={30} color='var(--grey)' /></button>
                <img src="/assets/logo.png" alt="" srcset="" />
                <button className="mobileHeader" onClick={() => setMobileSearch(mobileSearch ? false : true)} style={{ backgroundColor: 'transparent', border: '0' }} type="submit"><FiSearch size={30} color='var(--bg-color)' /></button>
                <div class="search-container">
                    <input style={{ display: mobileSearch ? '' : 'none' }} type="text" placeholder="Search.." name="search" />
                    <button type="submit">BUSCAR</button>
                </div>

            </div>
            <div className="bottomnav" style={{ width: mobileMenu ? '50%' : '0%', display: mobileMenu ? '' : 'none' }}>
                <ul>
                    <li>
                        <Link className="text-uppercase" to="#"><b>Página inicial</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="#"><b>Camisetas</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="#"><b>Calças</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="#"><b>Sapatos</b></Link>
                    </li>
                    <li>
                        <Link className="text-uppercase" to="#"><b>Contato</b></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}