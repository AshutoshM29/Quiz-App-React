import { Routes, Route } from "react-router-dom";
import {PageNotFound} from "./Pages/PageNotFound"
import { HomePage } from "./Pages/HomePage";
import { Rules } from "./Pages/Quiz/rules"
import { Quiz } from "./Pages/Quiz/quiz";
import { Results } from "./Pages/Quiz/results";
import { LandingPage } from "./Pages/LandingPage";

export default function URLRoutes() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage/>} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/PageNotFound" element={<PageNotFound />} />
      <Route path="/Rules" element={<Rules />} />
      <Route path="/Quiz" element={<Quiz/>}/>
      <Route path="/Results" element={<Results/>}/>
    </Routes>
  );
}