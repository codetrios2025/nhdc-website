import React from "react";
import HeroBanner from "./HeroBanner";
import Services from "./Services";
import OurVideos from "./OurVideos";
import OurDoctor from "./OurDoctor";
const HomeRoute = ()=>{
  return(
    <>
      <HeroBanner />
      <Services />
      <OurVideos />
      <OurDoctor />
    </>
  )
}

export default HomeRoute;