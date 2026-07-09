import { Routes, Route } from "react-router-dom";

import LayoutScreen from "../Common/Layout";
import ScrollTop from "../Common/ScrollTop";
import AosRoute from "../Common/AosRoute";
//Home Page
import HomeRoute from "../Home/HomeRoute";
//Pages
import AboutUs from "../Pages/About";
import AboutNew from "../Pages/About-new";
import Services from "../Pages/Service";
import ServiceDetail from "../Pages/ServicesDetail";
import BookAppointment from "../Booking/BookAppointmentPage";
import ServiceNew from "../Pages/Service_my";
import NHDCVideos from "../Pages/Videos";
const AppRoute = () =>{
  return(
    <>
      <ScrollTop />
      <AosRoute />
      <Routes>
        <Route path='/' element={<LayoutScreen />}>
          <Route index element={<HomeRoute />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/about-new' element={<AboutNew />} />
          <Route path='/services' element={<Services />} />
          <Route path='/service-detail' element={<ServiceDetail />} />
          <Route path='/service-new' element={<ServiceNew />} />
          <Route path='/book-appointment' element={<BookAppointment />} />
          <Route path='/videos' element={<NHDCVideos />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute;