import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';
import InstaVideo from '../Home/InstaVideo'
import Support from '../Home/Support';
//icon
import { GoArrowRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const OurVideos = () =>{
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = [
  {
    title: "Child Vaccination Guide",
    url: "https://www.instagram.com/p/DaC-GBQJBuU/",
  },
  {
    title: "Asthma Symptoms & Prevention",
    url: "https://www.instagram.com/p/DVREIEZArN3/",
  },{
    title: "Prevention of Seasonal Allergy",
    url: "https://www.instagram.com/p/DZ1whPDJgD_/",
  },{
    title: "ITS/NTS Vaccination Guide",
    url: "https://www.instagram.com/p/DYRZZUZpnp1/",
  },{
    title: "Jaundice in Newborns",
    url: "https://www.instagram.com/p/DW_GN_VAt2b/",
  },{
    title: "Pertussis (Whooping Cough) Vaccination",
    url: "https://www.instagram.com/p/DU78UMBCTRW/",
  },
  {
    title: "Allergy Rhinitis & Asthma ",
    url: "https://www.instagram.com/p/DU0KpmKCe10/",
  },
  {
    title: "BCG Vaccination ",
    url: "https://www.instagram.com/p/DUk9L4zCSmw/",
  },
  {
    title: "Diaper Precautions ",
    url: "https://www.instagram.com/p/DUAp8VPCZxj//",
  },
 
  {
    title: "Newborn Care Tips",
    url: "https://www.instagram.com/p/DZzde87pquI/",
  },
];
// get youtube id
const getYoutubeId = (url) => {
  const regExp =
    /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};
  return(
    <div className={`${Style.videoSec} ${Style.commonSpace}`}>
      <Container>
        <Row>
          <Col>
            <div className={Style.videoContainer}>
              <div className={'watchVideo ' + Style.videoElem}>
                {videos.map((item, index) =>{
                  // const videoId = getYoutubeId(item.url)
                  return(
                    <div className={Style.videoItem} key={index}>
                      {/* <div className={Style.videoFrame}>
                        {activeVideo === videoId ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title={item.title}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        ) : (
                          <>
                          <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={item.title} loading="lazy" />
                          <button onClick={() => setActiveVideo(videoId)} className={'flexCenter ' + Style.playBtn}><FaPlay /></button>
                          </>
                        )}
                      </div> */}
                      <div >
                          <InstaVideo data={item.url}/>
                        </div>
                        <div className={Style.content}>
                        <h3>{item.title}</h3>
                      </div>  
                    </div>
                  )
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurVideos;