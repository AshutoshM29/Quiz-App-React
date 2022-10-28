import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "./Pages/PageNotFound"
import { LandingPage } from "./Pages/LandingPage";
import { HomePage } from "./Pages/HomePage";
import { Rules } from "./Pages/Quiz/rules"
import {Quiz} from "./Pages/Quiz/quiz";
import { Results } from "./Pages/Quiz/results";

export default function URLRoutes() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
      <Route path="/Homepage" element={<HomePage />} />
      <Route path="/Rules" element={<Rules/>}/>
      <Route path="/Quiz" element={<Quiz/>}/>
      <Route path="/Results" element={<Results/>}/>
      <Route path="/PageNotFound" element={<PageNotFound />} />
    </Routes>
  );
}