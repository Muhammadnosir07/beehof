import React from 'react'
import logo from '../../assets/img/behoof.png'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='nav_div'>
      <div className="container">
          <nav className='nav'>
          <div className='nav_left'>
            <img src={logo} alt="" />
            <h2>Behoof</h2>
            <h3>Лучшие цены <br />в интернет-магазинах </h3>
          </div>
          <div className='nav_right'>
            <select>
              <option value="">Каталог товаров</option>
              <option value="">компания</option>
              <option value="">о кампании</option>
            </select>
            <input type="text" placeholder='Поиск товаров'/>
            <button><i class="bi bi-heart"></i></button>
            <button><i class="bi bi-bar-chart"></i></button>
            <button><i class="bi bi-person"></i></button>
          </div>
          </nav>
      </div>
    </div>
  )
}

export default Navbar