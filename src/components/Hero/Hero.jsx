import React from 'react'
import './Hero.scss'
import iphone from '../../assets/img/iphone11.png'

function Hero() {
  return (
    <div className='div'>
      <div className="container">
        <div className='hero'>
          <div className='hero_left'>
            <h3><span>1.8 млн</span> товаров в <span>2272</span> магазинах <br /> найди, сравни, выберай!</h3>
            <button>Перейти к категориям  </button>
          </div>
          <div className='hero_right'>
              <h3><span>Топ-10</span> смартфонов <br />2023 года</h3>
              <button>Смотреть</button>
              <img src={iphone} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero