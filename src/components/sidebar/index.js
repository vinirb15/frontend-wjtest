import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <ul>
                <li>
                    <Link className="sidebar-item" to="#">Página inicial</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="#">Camisetas</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="#">Calças</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="#">Sapatos</Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="#">Contato</Link>
                </li>
            </ul>
        </div>
    );
};