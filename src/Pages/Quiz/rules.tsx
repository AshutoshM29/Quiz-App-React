import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../Context/quiz-context";
import { Navigation } from "../../components/Components";
import "../../stylesheets/quiz.css"

function Rules() {
  const [display, setDisplay] = useState("flex");
  const {dispatch} = useQuiz()
  const modalDiv = { display: display };

  return (
    <>
    <Navigation />
      <div className="section-rules">
      <div style={modalDiv}>
          <div className="modal-body">
            <div className="modal-header">
              <h1>Rules</h1>
            </div>
            <div className="text-rules">
              <ol className="list">
                <li className="list-rules">
                Questions are of Multiple Choice.
                </li>
                <li className="list-rules">
                  There are 10 questions , you have to select the right answer
                  amoung the given choices.
                </li>
                <li className="list-rules">
                  For each correct answer you will get +5 and for each wrong
                  answer -1.
                </li>
                <li className="list-rules">
                  Answer will be revealed after the last questions.
                </li>
                <li className="list-rules">
                  You are advised to not cheat while playing the quiz.
                </li>
              </ol>
            </div>
            <div className="footer-rules">
            <button
                onClick={() => { setDisplay("none"); }}
                className="btn btn-play"
              >
                <Link to="/Quiz">
                Play <i className="fas fa-play"></i>
                </Link>
              </button>
              <button className="btn btn-quit">
                <Link onClick={()=>dispatch({type:"clear_default"})}  to="/Homepage">
                  Quit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Rules };