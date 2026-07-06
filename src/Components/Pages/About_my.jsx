import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import BannerImg from '../../assets/images/hospital-slide.webp';
import serviceImg01 from '../../assets/images/services_img01.webp';
import Support from '../Home/Support';
import OurDoctor from './AboutOurDoctor';
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


const AboutUs = () =>{
  return(
    <div className={Style.aboutPage}>
      <div className={Style.innerBanner}>
          <img src={BannerImg} alt="Namokar Hospital & Diagnostic Centre" />
          <div className={Style.bannerContent}>
    <Container>
      <h1>About Namokar Hospital & Diagnostic Centre</h1>

      <p>
        Committed to delivering compassionate pediatric healthcare,
        advanced diagnostics, and trusted medical services with
        excellence for over 25+ years.
      </p>
    </Container>
  </div>
      </div>
      <OurDoctor />
      <div className={`${Style.whoWe} ${Style.commonSpace}`}>
            <Container>
              <Row>
                <Col md={6}>
                  <div className={Style.content}>
                    <h2>Our Story</h2>

                    <p>
                      Namokar Hospital & Diagnostic Centre was established with a simple
                      vision—to provide trusted, ethical, and accessible healthcare for
                      children and families in Deoli and nearby communities. Since its
                      inception, the hospital has been committed to delivering medical care
                      that combines clinical expertise with compassion.
                    </p>

                    <p>
                      Under the leadership of <strong>Dr. Rajesh Jain</strong>, the hospital
                      has grown into a healthcare centre where every patient is treated with
                      respect, transparency, and personalized attention. We believe that
                      successful treatment begins with understanding each patient's unique
                      needs and building lasting relationships with families.
                    </p>

                    <p>
                      Our focus is not only on treating illness but also on promoting
                      healthy childhood development through preventive healthcare, timely
                      diagnosis, and continuous medical guidance. Every step we take is
                      driven by our commitment to improving the quality of life for the
                      community we serve.
                    </p>

                    <ul>
                      <li>
                        <span className={Style.icon}><FaCheckCircle /></span>
                        Ethical and transparent medical practice
                      </li>

                      <li>
                        <span className={Style.icon}><FaCheckCircle /></span>
                        Personalized attention for every patient and family
                      </li>

                      <li>
                        <span className={Style.icon}><FaCheckCircle /></span>
                        A patient-first approach built on trust and compassion
                      </li>

                      <li>
                        <span className={Style.icon}><FaCheckCircle /></span>
                        Commitment to continuous improvement and quality healthcare
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={Style.highLights}>

                    
                    <div className={Style.box}>
                      <div className={Style.icon}>
                        <MdFamilyRestroom />
                      </div>

                      <div className={Style.content}>
                        <h3>10,000+ <span>Happy Patients</span></h3>

                        <p>
                          Thousands of children and families have trusted NHDC for quality
                          healthcare.
                        </p>
                      </div>
                    </div>
                    <div className={Style.box}>
                      <div className={Style.icon}>
                        <MdFamilyRestroom />
                      </div>

                      <div className={Style.content}>
                        <h3>Family-Centered Care</h3>

                        <p>
                          We work closely with parents and caregivers, encouraging open
                          communication throughout every stage of treatment.
                        </p>
                      </div>
                    </div>

                    <div className={Style.box}>
                      <div className={Style.icon}>
                        <FaUserDoctor />
                      </div>

                      <div className={Style.content}>
                        <h3>Clinical Excellence</h3>

                        <p>
                          We combine medical knowledge, modern technology, and continuous
                          learning to deliver high-quality healthcare services.
                        </p>
                      </div>
                    </div>

                    <div className={Style.box}>
                      <div className={Style.icon}>
                        <MdEmergency />
                      </div>

                      <div className={Style.content}>
                        <h3>Community Trust</h3>

                        <p>
                          Built on years of dedication, honesty, and compassionate care,
                          we are proud to be a trusted healthcare partner for families in
                          Deoli and the surrounding region.
                        </p>
                      </div>
                    </div>

                  </div>
                </Col>
              </Row>
            </Container>
      </div>
      <div className={`${Style.missionSec} ${Style.commonSpace}`}>
      <Container>
          <Row>
            <Col>
              <div className={Style.missionContainer}>

                {/* Mission */}
                <div className={Style.box}>
                  <div className={Style.icon}>
                    <FaBullseye />
                  </div>

                  <div className={Style.content}>
                    <h3>Our Mission</h3>

                    <p>
                      To create a healthcare environment where every child and family
                      receives compassionate, ethical, and personalized medical care.
                      We are committed to building lifelong relationships based on
                      trust, clinical excellence, and respect while continuously
                      improving the quality of healthcare in our community.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className={Style.box}>
                  <div className={Style.icon}>
                    <FaEye />
                  </div>

                  <div className={Style.content}>
                    <h3>Our Vision</h3>

                    <p>
                      To be recognized as one of the most trusted healthcare
                      institutions in Rajasthan by delivering patient-centered care,
                      embracing medical innovation, and setting new standards of
                      excellence in child health and family wellness.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className={Style.box}>
                  <div className={Style.icon}>
                    <IoDiamond />
                  </div>

                  <div className={Style.content}>
                    <h3>Our Core Values</h3>

                    <ul>
                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Compassion and empathy in every patient interaction.
                      </li>

                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Honesty, integrity, and transparency in medical practice.
                      </li>

                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Respect for every child, parent, and healthcare professional.
                      </li>

                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Continuous learning and adoption of modern medical advancements.
                      </li>

                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Commitment to patient safety, quality care, and ethical standards.
                      </li>

                      <li>
                        <span className={Style.icon}>
                          <FaCheckCircle />
                        </span>
                        Building lasting trust through responsible and reliable healthcare.
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${Style.whyUs} ${Style.commonSpace}`}>
       <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <div className={Style.content}>
              <h2>Why Families Trust Namokar Hospital?</h2>

              <p>
                At Namokar Hospital & Diagnostic Centre, we believe healthcare is
                built on trust, compassion, and clinical excellence. Our commitment
                goes beyond treatment—we strive to provide every child and family
                with a comfortable, transparent, and supportive healthcare
                experience.
              </p>

              <ul>
                <li>
                  <div className={Style.icon}>
                    <MdChildCare />
                  </div>

                  <div>
                    <h5>Child-Friendly Environment</h5>
                    <p>
                      A welcoming atmosphere designed to make children feel safe,
                      comfortable, and cared for during every visit.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={Style.icon}>
                    <FaPeopleGroup />
                  </div>

                  <div>
                    <h5>Personalized Patient Care</h5>
                    <p>
                      Every child receives individual attention with treatment plans
                      tailored to their specific healthcare needs.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={Style.icon}>
                    <ImLab />
                  </div>

                  <div>
                    <h5>Reliable Diagnosis</h5>
                    <p>
                      Modern diagnostic facilities help support timely and informed
                      clinical decisions for better patient care.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={Style.icon}>
                    <FaAmbulance />
                  </div>

                  <div>
                    <h5>Accessible Healthcare</h5>
                    <p>
                      Convenient consultation, responsive support, and dedicated care
                      for families in Deoli and nearby communities.
                    </p>
                  </div>
                </li>

                <li>
                  <div className={Style.icon}>
                    <BsUmbrellaFill />
                  </div>

                  <div>
                    <h5>Long-Term Health Partnership</h5>
                    <p>
                      We believe in building lasting relationships by supporting every
                      stage of a child's healthy growth and development.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={5}>
            <figure>
              <img
                src={serviceImg01}
                alt="Namokar Hospital & Diagnostic Centre"
              />
            </figure>
          </Col>
        </Row>
      </Container>
      </div>
      <Support />
    </div>
  )
}

export default AboutUs;