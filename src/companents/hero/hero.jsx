import { Component } from "react";
import './hero.css'
// import RamBtns from './RamBtns.jsx';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      objram: {
        ram: 8,
        xotira: 256,
        price: 12497000,
        skidca: 14621000,
        inp: 1,
      }
    }
  }

  ram8_256_Func = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 256,
        price: 12497000,
        skidca: 14621000,
        inp: 1,
      }
    })
  }

  ram8_512_Func = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 512,
        price: 15066000,
        skidca: 17627500,
        inp: 1,
      }
    })
  }

  ram16_256_Func = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 256,
        price: 16935000,
        skidca: 19813500,
        inp: 1,
      }
    })
  }

  ram16_512_Func = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 512,
        price: 19270500,
        skidca: 22546500,
        inp: 1,
      }
    })
  }

  ram16_1024_Func = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 1024,
        price: 20438500,
        skidca: 23913000,
        inp: 1,
      }
    })
  }

  ram8_256_addFunc = () => {
    this.setState({
      objram: {
        ram: 8,
        xotira: 256,
        price: this.state.objram.price + 12497000,
        skidca: this.state.objram.skidca + 14621000,
        inp: this.state.objram.inp + 1,
      }
    })
  }

  ram8_256_remFunc = () => {
    if (this.state.objram.inp > 1) {
      this.setState({
        objram: {
          ram: 8,
          xotira: 256,
          price: this.state.objram.price - 12497000,
          skidca: this.state.objram.skidca - 14621000,
          inp: this.state.objram.inp - 1,
        }
      })
    }
  }

  remFun = () => {
    if (this.state.count >= 12497000) {
      this.setState({ count: this.state.count - 12497000 })
      this.setState({ inp: this.state.inp - 1 })
    }
  }

  addFunc = () => {
    this.setState({ count: this.state.count + 12497000 })
    this.setState({ inp: this.state.inp + 1 })
  }

  render() {
    return (
      <section className="mac">
        <div className="mac__header header">
          <div className="container">
            <div className="header__inner">
              <div className="header__logo">
                <a className="header__logo-link" href="#">MacBro</a>
              </div>

              <nav className="header__nav">
                <ul className="header__list">
                  <li className="header__item">
                    <a className="header__link" href="#">Mac</a>
                  </li>
                  <li className="header__item">
                    <a className="header__link" href="#">iPhone</a>
                  </li>
                  <li className="header__item">
                    <a className="header__link" href="#">iPad</a>
                  </li>
                  <li className="header__item">
                    <a className="header__link" href="#">Watch</a>
                  </li>
                  <li className="header__item">
                    <a className="header__link" href="#">AirPods</a>
                  </li>
                </ul>
              </nav>

              <div className="header__add-box">
                <button className="add__btn"><i className='bx bx-cart-add'></i></button>
                <button className="add__search"><i className='bx bx-search-alt-2'></i></button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mac__inner">
            <div className="mac__left left">
              <div className="left__box">
                <ul className="left__list">
                  <li className="left__item">
                    <div class="left__img-box">
                      <img className="left__mac-img" src="https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1" alt="img" />
                    </div>
                  </li>
                  <li className="left__item">
                    <div class="left__img-box">
                      <img className="left__mac-img" src="https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca" alt="img" />
                    </div>
                  </li>
                  <li className="left__item">
                    <div class="left__img-box">
                      <img className="left__mac-img" src="https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12" alt="img" />
                    </div>
                  </li>
                  <li className="left__item">
                    <div class="left__img-box">
                      <img className="left__mac-img" src="https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf" alt="img" />
                    </div>
                  </li>
                  <li className="left__item">
                    <div class="left__img-box">
                      <img className="left__mac-img" src="https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3" alt="img" />
                    </div>
                  </li>
                </ul>
                <button className="left__modalBtn"><i className='bx bx-fullscreen'></i></button>
              </div>
              <div className="left__slider lslid">
                <ul className="lslid__list">
                  <li className="lslid__item">
                    <div class="lslid__img">
                      <img className="slider--imgs" src="https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1" alt="img" />
                    </div>
                  </li>
                  <li className="lslid__item">
                    <div class="lslid__img">
                      <img className="slider--imgs" src="https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca" alt="img" />
                    </div>
                  </li>
                  <li className="lslid__item">
                    <div class="lslid__img">
                      <img className="slider--imgs" src="https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12" alt="img" />
                    </div>
                  </li>
                  <li className="lslid__item">
                    <div class="lslid__img">
                      <img className="slider--imgs" src="https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf" alt="img" />
                    </div>
                  </li>
                  <li className="lslid__item">
                    <div class="lslid__img">
                      <img className="slider--imgs" src="https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3" alt="img" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mac__right right">
              <div className="mac__right-box">
                <div className="right__top">
                  <h2 className="right__title" id="title">MacBook Air 13-inch
                    <span className="right__title-span">M1<span id="titram">/8</span><span id="titxot">/256</span>
                      <span id="titCol">Gold</span></span>
                  </h2>
                  <button className="right__top-btn"><i className='bx bx-exit'></i></button>
                </div>
                <div className="right__btn-box">
                  <div className="right__ram-box">
                    <h4 className="btns__title">Ram</h4>
                    <button className="right__ram-btn" onClick={this.ram8_256_Func}>8GB</button>
                    <button className="right__ram-btn" onClick={this.ram16_512_Func}>16GB</button>
                    {/* <RamBtns fun={this.ram8_Func} /> */}
                  </div>
                  <div className="right__pamet-box">
                    <h4 className="btns__title">Xotira Hajmi</h4>
                    <button className="right__pamet-btn" onClick={this.ram8_256_Func}>256GB</button>
                    <button className="right__pamet-btn" onClick={this.ram8_512_Func}>512GB</button>
                    <button className="right__pamet-btn" onClick={this.ram16_1024_Func}>1024GB</button>
                  </div>
                  <div className="right__pamet-box">
                    <h4 className="btns__title">Ranglar</h4>
                    <button className="right__color-btn color-btn-act" id="goldBtn"><span className="mac-colors1"></span> TILLA
                      RANG</button>
                    <button className="right__color-btn" id="silverBtn"><span className="mac-colors2"></span> KUMUSH RANG</button>
                    <button className="right__color-btn" id="spaceGray"><span className="mac-colors3"></span> KOSMIK
                      KULRANG</button>
                  </div>
                </div>

                <div className="right__add-rem-box">
                  <button className="right__rem-btn" id="remCount" onClick={this.ram8_256_remFunc}>-</button>
                  <p className="right__count">{this.state.objram.inp}</p>
                  <button className="right__add-btn" id="addCount" onClick={this.ram8_256_addFunc}>+</button>
                </div>

                <div className="right__price">
                  <p className="right__price" id="price1">{this.state.objram.price} so'm</p>
                  <p className="right__price2" id="price2">{this.state.objram.skidca} so'm</p>
                </div>

                <div className="right__submit-box">
                  <button className="right__submit" type="submit">Savatchaga qo'shish</button>
                  <button className="right__sub2" type="submit">Savatchaga qo'shish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Hero;