import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import BannerImg from '../../assets/images/hospital-slide.webp';
import serviceImg01 from '../../assets/images/services_img01.webp';
import Support from '../Home/Support';
import OurDoctor from '../Home/OurDoctor';
//icon
import { FaCheckCircle, FaBullseye, FaEye, FaHandshake, FaAmbulance, FaHeartbeat, FaHeart } from "react-icons/fa";
import { MdOutlineChildCare, MdMedicalServices, MdHealthAndSafety } from "react-icons/md";
import {
  GiLungs,
  GiBabyFace,
  GiMedicines,
} from "react-icons/gi";
import { FaSyringe, FaUserDoctor  } from "react-icons/fa6";
import { PiFirstAidKitFill } from "react-icons/pi";
import { RiParentFill, RiHospitalLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";

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
              <div className={Style.head}>
                <h2>Our Services</h2>
                <p>Specialized care, advanced technology, and compassionate treatment — all under one roof.</p>
              </div>
              <div className={Style.mainContainer}>
                <div className={Style.serviceBox}>
                  <div className={Style.mainIcon}>
                    <span><MdOutlineChildCare /></span>
                  </div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>Child Specialist Care</h3>
                    <p>Comprehensive healthcare services designed for infants, children, and adolescents.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                    <a href="" title="">Learn More</a>
                  </div>
                </div>
                <div className={Style.serviceBox}>
                  <div className={Style.mainIcon}>
                    <span><GiLungs /></span>
                  </div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>Asthma & Allergy Care</h3>
                    <p>Comprehensive healthcare services designed for infants, children, and adolescents.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                    <a href="" title="">Learn More</a>
                  </div>
                </div>
                <div className={Style.serviceBox}>
                  <div className={Style.mainIcon}>
                    <span><FaHeartbeat /></span>
                  </div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>OPD Consultation</h3>
                    <p>Comprehensive healthcare services designed for infants, children, and adolescents.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                    <a href="" title="">Learn More</a>
                  </div>
                </div>
                <div className={Style.serviceBox}>
                  <div className={Style.mainIcon}>
                    <span><MdMedicalServices /></span>
                  </div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>Diagnostics</h3>
                    <p>Comprehensive healthcare services designed for infants, children, and adolescents.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                    <a href="" title="">Learn More</a>
                  </div>
                </div>
                <div className={Style.serviceBox}>
                  <div className={Style.mainIcon}>
                    <span><FaAmbulance /></span>
                  </div>
                  <img src={serviceImg01} alt="Namokar Hospital & Diagnostic Centre" />
                  <div className={Style.content}>
                    <h3>Emergency Care</h3>
                    <p>Comprehensive healthcare services designed for infants, children, and adolescents.</p>
                    <ul className={Style.featureList}>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Child Specialist Care</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Asthma & Allergy Treatment</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> 24×7 Emergency Service</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Advanced Diagnostics</li>
                      <li><span className={Style.icon}><FaCheckCircle /></span> Personalized Patient Care</li>
                    </ul>
                    <a href="" title="">Learn More</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${Style.whyChoose} ${Style.commonSpace}`}>
        <Container>
          <Row>
            <Col>
              <div className={Style.whyChooseContainer}>
                <h2>Why Choose <span>Namokar Hospital?</span></h2>
                <div className={Style.whyChooseElem}>
                  <div className={Style.box}>
                    <div className={Style.icon}><FaUserDoctor  /></div>
                    <h4>Experienced Doctors</h4>
                    <p>Highly qualified pediatricians and healthcare professionals dedicated to quality treatment.</p>
                  </div>
                  <div className={Style.box}>
                    <div className={Style.icon}><MdOutlineChildCare  /></div>
                    <h4>Child-Friendly Environment</h4>
                    <p>A safe, hygienic, and comfortable atmosphere designed especially for children.</p>
                  </div>
                  <div className={Style.box}>
                    <div className={Style.icon}><RiHospitalLine  /></div>
                    <h4>Advanced Facilities</h4>
                    <p>State-of-the-art diagnostic equipment and modern healthcare infrastructure.</p>
                  </div>
                  <div className={Style.box}>
                    <div className={Style.icon}><BsClockHistory  eChildCare /></div>
                    <h4>24×7 Availability</h4>
                    <p>Round-the-clock emergency and medical support whenever you need us.</p>
                  </div>
                  <div className={Style.box}>
                    <div className={Style.icon}><FaHeart  /></div>
                    <h4>Compassionate Care</h4>
                    <p>Personalized healthcare services delivered with empathy, respect, and dedication.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${Style.medicalSec} ${Style.commonSpace}`}>
        <Container>
          <Row>
            <Col>
              <h2>Other Medical Services</h2>
              <ul>
                <li>
                  <div className={Style.icon}><GiBabyFace /></div>
                  <p>Newborn Care</p>
                </li>
                <li>
                  <div className={Style.icon}><FaSyringe /></div>
                  <p>Immunization</p>
                </li>
                <li>
                  <div className={Style.icon}><GiMedicines /></div>
                  <p>Nutritional Guidance</p>
                </li>
                <li>
                  <div className={Style.icon}><MdHealthAndSafety /></div>
                  <p>Health Checkups</p>
                </li>
                <li>
                  <div className={Style.icon}><PiFirstAidKitFill /></div>
                  <p>Minor Procedures</p>
                </li>
                <li>
                  <div className={Style.icon}><GiLungs /></div>
                  <p>Pharmacy Support</p>
                </li>
                <li>
                  <div className={Style.icon}><RiParentFill /></div>
                  <p>Parent Counselling</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Support />
    </div>
  )
}

export default Services;