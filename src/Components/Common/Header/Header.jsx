import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink  } from "react-router-dom";
import Style from './Header.module.css';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import Logo from '../../../assets/images/nhdc-logo.png'
import { FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import BookingForm from "../../Booking/BookingForm";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [booking, setBooking] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
  const bookingHandler = ()=>{
    setBooking(true)
  }
  const closeBooking = ()=>{
    setBooking(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <>
    <header role="banner" className={`header ${isScrolled ? Style.headerFix : ""}`}>
      <div className={Style.topHead}>
        <Container>
          <Row>
            <Col>
              <address>
                <ul>
                  <li>
                    <a href="mailto:namokarhospitaldeoli.com"  aria-label="Email Namokar Hospital">
                      <div className={Style.icon}><IoIosMail /></div> namokarhospitaldeoli.com</a>     
                  </li>
                  <li>
                    <a href="tel:+91 0000000000" >
                      <div className={Style.icon}><FaHeadset /></div>
                      <p><span>24*7 Emergency</span> +91 98291 43239</p>
                    </a>
                  </li>
                  <li>
                    <button onClick={bookingHandler} type="button" className={Style.bookBtn} aria-label="Book Appointment">
                      <span className={Style.icon}><IoCalendarOutline /></span> Book Appointment</button>
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
                 <button className={Style.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                  {menuOpen ? <IoClose /> : <CiMenuBurger />}
                </button>
                <nav aria-label="Primary Navigation" className={`${Style.navMenu} ${menuOpen ? Style.showMenu : ""}`}>
                  <ul className="flexCenter">
                    <li><NavLink onClick={closeMenu} to="/" title="Home">Home</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/about" title="About Us">About Us</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/services" title="Services">Services</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/news" title="news">News</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/videos" title="Videos">Videos</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/book-appointment" title="Contact Us">Contact Us</NavLink></li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
    {booking &&
      <div className={Style.bookingOverLay}>
        <div className={Style.bookingPop}>
          <BookingForm close={closeBooking} />
        </div>
      </div>
    }
    </>
  )
}

export default Header;