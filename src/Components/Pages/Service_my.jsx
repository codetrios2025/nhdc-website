import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import BannerImg from '../../assets/images/hospital-slide.webp';
import serviceImg01 from '../../assets/images/services_img01.webp';
import Support from '../Home/Support';
import OurDoctor from '../Home/OurDoctor';
import childImg from "../../assets/images/1.png";
import asthmaImg from "../../assets/images/2.png";
import newbornImg from "../../assets/images/3.png";
import vaccineImg from "../../assets/images/4.png";
import emergencyImg from "../../assets/images/5.png";
import diagnosticImg from "../../assets/images/6.png";
import { FaCheckCircle, FaBullseye, FaEye, FaHandshake, FaAmbulance } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { MdEmergency } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { BsUmbrellaFill } from "react-icons/bs";


const services = [
  {
    title: "Child Specialist Care",
    image: childImg,
    text:
      "Comprehensive healthcare for newborns, infants, children and adolescents with a focus on prevention, diagnosis and treatment.",
    items: [
      "Routine Child Check-ups",
      "Fever & Infection Management",
      "Nutrition Guidance",
      "Growth & Development Assessment",
      "Preventive Healthcare",
    ],
  },

  {
    title: "Asthma & Allergy Clinic",
    image: asthmaImg,
    text:
      "Personalized care for children with asthma, allergies and respiratory conditions using modern diagnostic techniques.",
    items: [
      "Asthma Management",
      "Allergy Consultation",
      "Skin Prick Test (SPT)",
      "ImmunoCAP Blood Test",
      "Spirometry & FOT",
    ],
  },

  {
    title: "Newborn & Infant Care",
    image: newbornImg,
    text:
      "Specialized care for newborns and infants with regular health assessments and parental guidance.",
    items: [
      "Newborn Examination",
      "Breastfeeding Guidance",
      "Growth Monitoring",
      "Parent Counselling",
    ],
  },

  {
    title: "Vaccination & Immunization",
    image: vaccineImg,
    text:
      "Complete vaccination services following the National Immunization Schedule.",
    items: [
      "Routine Vaccination",
      "Vaccination Reminder",
      "Child Health Record",
    ],
  },

  {
    title: "Emergency Pediatric Care",
    image: emergencyImg,
    text:
      "Prompt and compassionate emergency medical care for infants and children.",
    items: [
      "Emergency Consultation",
      "Rapid Assessment",
      "Referral Support",
    ],
  },

  {
    title: "Advanced Diagnostic Services",
    image: diagnosticImg,
    text:
      "Advanced diagnostic facilities available under one roof for accurate and timely diagnosis.",
    items: [
      "Spirometry",
      "Forced Oscillation Technique (FOT)",
      "Skin Prick Test",
      "ImmunoCAP",
      "EEG",
      "Sonography",
    ],
  },
];

const Services = () =>{
  return(
   <div className={Style.servicesPage}>
    <div className={Style.innerBanner}><img src={BannerImg} alt="Services"/>
      <div className={Style.bannerContent}>
        <h1>Our Medical Services</h1>
        <p>Comprehensive pediatric healthcare, asthma & allergy care, preventive medicine and advanced diagnostic services for children and families.</p>
      </div>
    </div>
    <div className={`${Style.mainServices} ${Style.commonSpace}`}>
      <Container>
       <Row>
  {services.map((s, i) => (
    <Col lg={12} key={i} className="mb-5">
      <Row
        className={`align-items-center ${
          i % 2 !== 0 ? "flex-lg-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <Col lg={6}>
          <div className={Style.serviceImg}>
            <img src={s.image} alt={s.title} className="img-fluid rounded-4" />
          </div>
        </Col>

        {/* Content */}
        <Col lg={6}>
          <div className={Style.serviceContent}>
            <h2>{s.title}</h2>

            <p>{s.text}</p>

            <ul className={Style.featureList}>
              {s.items.map((item, index) => (
                <li key={index}>
                  <span className={Style.icon}>
                    <FaCheckCircle />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

              {/* Optional Button */}
            {/* <Link to="/contact" className={Style.primeryBtn}>
                Book Appointment
            </Link> */}

          </div>
        </Col>
      </Row>
    </Col>
  ))}
</Row>
         
          </Container>
          </div>
          <Support/></div>
  )
}

export default Services;