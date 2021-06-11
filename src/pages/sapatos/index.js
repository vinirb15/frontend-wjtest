import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../mock-api/V1/categories/3';

import './styles.css';
export default function Products() {
  const [obj, setObj] = useState([{
    filter: [{ color: "" }],
    id: 0,
    image: "",
    name: "",
    path: "",
    price: 0,
    sku: "",
  }])
  const [filter, setFilter] = useState(false)
  const [objFilter, setObjFilter] = useState([{}])

  useEffect(() => {
    handleLoad()
  }, [])

  async function handleLoad() {
    await fetch(api)
      .then(r => r.text())
      .then(text => {
        setObj(JSON.parse(text).items)
        console.log(JSON.parse(text).items)
      });
  }

  async function Filter(color, color2) {
    handleLoad()
    setTimeout(() => {
      setFilter(true)
      setObjFilter(obj.filter((asd) => { return asd.filter[0].color === color || asd.filter[0].color === color2 }))
    }, 200)
  }


  return (
    <>
      <h5 className="mt-3 mb-3 pl-5">Página inicial > <b style={{ color: "var(--bg-color)" }}>Sapatos</b></h5>
      <div className="body-content">
        <div className="filter">
          <h5>Categorias</h5>
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
          <br />
          <div>
            <h5>Cores</h5>
            <button onClick={() => setFilter(false)}>Todos</button>
            <br />
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'black' }} onClick={() => Filter('Preto', 'Preta')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'orange' }} onClick={() => Filter('Laranja')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'yellow' }} onClick={() => Filter('Amarela')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'gray' }} onClick={() => Filter('Cinza')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'blue' }} onClick={() => Filter('Azul')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'pink' }} onClick={() => Filter('Rosa')}></button>
            <button className="border-0 ml-1 btn btn-primary" style={{ padding: '10px', backgroundColor: 'beige' }} onClick={() => Filter('Bege')}></button>
          </div>
        </div>
        <div className="products-content">
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {(filter ? objFilter : obj).map(product => (
              <div className="col">
                <div className="card h-100">
                  <img src={`${product.image}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="d-flex justify-content-center card-title">{product.name}</h5>
                    <p className="d-flex justify-content-center card-text">R${product.price}</p>
                  </div>
                  <div className="card-footer">
                    <button className="d-flex justify-content-center btn btn-primary" type="button"><b>COMPRAR</b></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}