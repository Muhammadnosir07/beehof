import React, { useState } from 'react'
import './Header.scss'
import { data } from '../../data/data'
import mac from '../../assets/img/mac.png'
import promax from '../../assets/img/13pro.png'

function Header() {
  const arr = [1,2,3,4,5]
  const [Desigin, setDesigin] = useState(4)
  const [Power, setPower] = useState(2)
  const [Display, setDisplay] = useState(4)
  const [Camera, setCamera] = useState(5)
  const [Answer, setAnswer] = useState(5)
  const [Portability, setPortability] = useState(4)

  return (
    <div className='header_div'>
        <div>
            <div className="container">
                  <div className='header'>
                        <h2 className='header_title'>Лучший выбор</h2>
                        <ul className='header_list'>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                            <li>
                                <img src={mac} alt="" />
                                <h3>Ноутбуки</h3>
                            </li>
                        </ul>
                        <div className='header_btn'>
                        <button>Дизайн</button>
                        <button>Портативность</button>
                        <button>Камера</button>
                        <button>Ответ</button>
                        <button>Дисплей</button>
                        <button>Батарея</button>
                        </div>
                        <div className='cards_wrap'>
                        <div className='cards'>
                            <h4>Портативные колонки </h4>
                            <div className='swip_card'>
                            <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                            <i class="icon1 bi-heart"></i>
                            <i class="icon bi bi-bar-chart-line"></i>
                            </div>
                            <div className='swipper'>
                            <img src={promax} alt="" />
                            <div className='cards_spanWrapper'>
                            <div className='cards_span'>
                              <p>Дизайн</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Батарея</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Дисплей</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Камера</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Ответ</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Портативность</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            </div>
                            </div>
                          </div>
                          <div className='cards'>
                            <h4>Портативные колонки </h4>
                            <div className='swip_card'>
                            <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                            <i class="icon1 bi-heart"></i>
                            <i class="icon bi bi-bar-chart-line"></i>
                            </div>
                            <div className='swipper'>
                            <img src={promax} alt="" />
                            <div className='cards_spanWrapper'>
                            <div className='cards_span'>
                              <p>Дизайн</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Батарея</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Дисплей</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Камера</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Ответ</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Портативность</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            </div>
                            </div>
                          </div>
                          <div className='cards'>
                            <h4>Портативные колонки </h4>
                            <div className='swip_card'>
                            <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                            <i class="icon1 bi-heart"></i>
                            <i class="icon bi bi-bar-chart-line"></i>
                            </div>
                            <div className='swipper'>
                            <img src={promax} alt="" />
                            <div className='cards_spanWrapper'>
                            <div className='cards_span'>
                              <p>Дизайн</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Батарея</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Дисплей</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Камера</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Ответ</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Портативность</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            </div>
                            </div>
                          </div>
                          <div className='cards'>
                            <h4>Портативные колонки </h4>
                            <div className='swip_card'>
                            <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                            <i class="icon1 bi-heart"></i>
                            <i class="icon bi bi-bar-chart-line"></i>
                            </div>
                            <div className='swipper'>
                            <img src={promax} alt="" />
                            <div className='cards_spanWrapper'>
                            <div className='cards_span'>
                              <p>Дизайн</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Батарея</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Дисплей</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Камера</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Ответ</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            <div className='cards_span'>
                              <p>Портативность</p>
                              <div>
                                {
                                  arr?.map((item, index)=>(
                                    <span className={Desigin >= index+1 ? 'active': null}></span>
                                  ))
                                }
                              </div>
                            </div>
                            </div>
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
            <div className='header_inner'></div>
        </div>
    </div>
  )
}

export default Header