import { Routes, Route } from "react-router-dom";

import LayoutScreen from "../Common/Layout";
import ScrollTop from "../Common/ScrollTop";
import AosRoute from "../Common/AosRoute";
//Home Page
import HomeRoute from "../Home/HomeRoute";
const AppRoute = () =>{
  return(
    <>
      <ScrollTop />
      <AosRoute />
      <Routes>
        <Route path='/' element={<LayoutScreen />}>
          <Route index element={<HomeRoute />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute;