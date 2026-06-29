import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink  } from "react-router-dom";
import Style from './Header.module.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import Logo from '../../../assets/images/nhdc-logo.png'
const Header = () => {
  return(
    <header role="banner">
      <div className={Style.topHead}>
        <Container>
          <Row>
            <Col>
              <address>
                <ul>
                  <li>
                    <a href="mailto:namokarhospitaldeoli.com"  aria-label="Email Namokar Hospital">
                      <div className={Style.icon}><MdMail /></div> namokarhospitaldeoli.com</a>     
                  </li>
                  <li>
                    <a href="tel:+91 0000000000" >
                      <div className={Style.icon}><BiSolidPhoneCall /></div>
                      <p><span>24*7 Emergency</span> +01 00000 00000</p>
                    </a>
                  </li>
                  <li>
                    <button type="button" className={Style.bookBtn} aria-label="Book Appointment">Book Appointment</button>
                  </li>
                </ul>
              </address>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Style.mainHeader}>
        <Container>
          <Row>
            <Col>
              <div className={'flexCenter ' + Style.navBar}>
                <div className={Style.logo}>
                  <a href="/" aria-label="Namokar Hospital Home">
                    <img src={Logo} alt="Namokar Hospital Home" />
                  </a>
                </div>
                <nav aria-label="Primary Navigation">
                  <ul className="flexCenter">
                    <li><NavLink to="/" title="Home">Home</NavLink></li>
                    <li><NavLink to="/" title="About Us">About Us</NavLink></li>
                    <li><NavLink to="/" title="Services">Services</NavLink></li>
                    <li><NavLink to="/" title="news">News</NavLink></li>
                    <li><NavLink to="/" title="Health Tips">Health Tips</NavLink></li>
                    <li><NavLink to="/" title="Videos">Videos</NavLink></li>
                    <li><NavLink to="/" title="Contact Us">Contact Us</NavLink></li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  )
}

export default Header;