import { Component } from "react";
import './hero.css'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 12497000,
      inp: 1
    }
  }

  macObject = [
    {
      id: 1,
      title: "MacBook Air 13-inch",
      ram: 8,
      med: [
        {
          active: true,
          xotira: 256,
          price: 12497000,
          skidca: 14621000,
        },
        {
          active: false,
          xotira: 512,
          price: 15066000,
          skidca: 17627500,
        },
      ],
    },
    {
      id: 2,
      title: "MacBook Air 13-inch",
      ram: 16,
      med: [
        {
          active: true,
          xotira: 256,
          price: 16935000,
          skidca: 19813500,
        },
        {
          active: false,
          xotira: 512,
          price: 19270500,
          skidca: 22546500,
        },
        {
          active: false,
          xotira: 1024,
          price: 20438500,
          skidca: 23913000,
        },
      ],
    },
  ]

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
                <ul className="left__list"></ul>
                <button className="left__modalBtn"><i className='bx bx-fullscreen'></i></button>
              </div>
              <div className="left__slider lslid">
                <ul className="lslid__list"></ul>
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
                  </div>
                  <div className="right__pamet-box">
                    <h4 className="btns__title">Xotira Hajmi</h4>
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
                  <button className="right__rem-btn" id="remCount" onClick={this.remFun}>-</button>
                  <p className="right__count">{this.state.inp}</p>
                  <button className="right__add-btn" id="addCount" onClick={this.addFunc}>+</button>
                </div>

                <div className="right__price">
                  <p className="right__price" id="price1">{this.state.count} so'm</p>
                  <p className="right__price2" id="price2">14621000 so'm</p>
                </div>

                <div className="right__submit-box">
                  <button className="right__submit" type="submit">Savatchaga qo'shish</button>
                  <button className="right__sub2" type="submit">Savatchaga qo'shish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero