import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import innerBanner from '../../assets/images/asthma.webp';

const ServiceDetail = () =>{
  return(
    <div className={Style.ServiceDetailPage}>
      <div className={Style.servicesBanner}>
        <img src={innerBanner} />
      </div>
    </div>
  )
}


export default ServiceDetail;
