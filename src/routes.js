import { Routes, Route } from "react-router-dom";
import {PageNotFound} from "./Pages/PageNotFound"
import { HomePage } from "./Pages/HomePage";
import { LandingPage } from "./Pages/LandingPage";

export default function URLRoutes() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage/>} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/PageNotFound" element={<PageNotFound />} />
    </Routes>
  );
}