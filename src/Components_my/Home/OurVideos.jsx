import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Global.module.css';

//icon
import { GoArrowRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

const OurVideos = () =>{
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = [
  {
    title: "Child Vaccination Guide",
    url: "https://www.youtube.com/watch?v=t9xnJRzy6hI",
  },
  {
    title: "Asthma Symptoms & Prevention",
    url: "https://www.youtube.com/watch?v=CdyvYAXFzsM",
  },
  {
    title: "Seasonal Allergy Care Asthma Symptoms & Prevention",
    url: "https://www.youtube.com/watch?v=cuIYCD67vW0",
  },
  {
    title: "Newborn Care Tips",
    url: "https://www.youtube.com/watch?v=OFfYB_edm0w",
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
              <div className={Style.videoHead}>
                <div>
                  <h2>Watch Our Videos on <span>YouTube</span></h2>
                  <p>Stay informed with expert medical guidance, child healthcare advice, and asthma awareness programs</p>
                </div>
                <a href="" className={Style.secondryBtn} aria-label="Call Hospital">View All Videos</a>
              </div>
              <div className={Style.videoElem}>
                {videos.map((item, index) =>{
                  const videoId = getYoutubeId(item.url)
                  return(
                    <div className={Style.videoItem} key={videoId}>
                      <div className={Style.videoFrame}>
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