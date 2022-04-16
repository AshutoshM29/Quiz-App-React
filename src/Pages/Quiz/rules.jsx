import { Link } from "react-router-dom";
import { Navigation } from "../../components/Components";
import "../../stylesheets/quiz.css"
function Rules(props) {
  return (
    <>
    <Navigation />
          <div className="section-rules">
            <div className="header-rules">
              <h1>Rules</h1>
            </div>
            <div className="text-rules">
              <ol className="list">
                <li className="list-rules">
                  There are 10 questions , you have to select the right answer
                  among the given choices.
                </li>
                <li className="list-rules">
                  For each correct answer you will get +5 and for each wrong
                  answer -1.
                </li>
                <li className="list-rules">
                  Answer will be revealed after attempting all the questions.
                </li>
                <li className="list-rules">
                  You are advised to not cheat while playing the quiz.
                </li>
                <li className="list-rules">
                Questions are of Multiple Choice.
                </li>
              </ol>
            </div>
            <div className="footer-rules">
              <Link to="/Quiz"
                className="btn btn-play"
              >
                Play <i class="fas fa-play"></i>
              </Link>
                <Link className="btn btn-quit" to="/HomePage">
                  Quit
                </Link>
            </div>
          </div>
    </>
  );
}

export { Rules };