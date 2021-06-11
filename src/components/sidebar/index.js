import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <ul>
                <li>
                    <Link className="sidebar-item" to="/">Página inicial</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/camisetas">Camisetas</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/calcas">Calças</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/sapatos">Sapatos</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/">Contato</Link>
                </li>
            </ul>
        </div>
    );
};