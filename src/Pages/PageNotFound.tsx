import {useQuiz} from "../Context/quiz-context"
import "../stylesheets/quiz.css"
import { Navigation } from "../components/Components";

function PageNotFound() {
  const {apiError} = useQuiz()
  return (
    <>
    <Navigation />
      <div className="section-quiz">
        <h1>
          {
            apiError === true ? "Something went wrong! try again" : "ERROR: 404 - Page Not Found"
          }
          </h1>
      </div>
    </>
  );
}

export { PageNotFound };