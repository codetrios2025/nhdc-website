import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import BannerImg from '../../assets/images/hospital-slide.webp';
import serviceImg01 from '../../assets/images/services_img01.webp';
import Support from '../Home/Support';
import OurDoctor from '../Home/OurDoctor';
//icon
import { FaCheckCircle, FaBullseye, FaEye, FaHandshake, FaAmbulance } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { BsUmbrellaFill } from "react-icons/bs";


const Services = () =>{
  return(
    <div className={Style.servicesPage}>
      <div className={Style.innerBanner}>
          <img src={BannerImg} alt="Namokar Hospital & Diagnostic Centre" />
      </div>
      <div className={`${Style.mainServices} ${Style.commonSpace}`}>
        <Container>
          <Row>
            <Col>
              <div className={Style.mainContainer}>
                <div className={Style.serviceBox}>
                  <div clasName={Style.icon}></div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>Child Specialist Care</h3>
                    <p>Quality healthcare for every child and family with expert pediatric care, advanced diagnostics, and 24×7 emergency support.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Support />
    </div>
  )
}

export default Services;