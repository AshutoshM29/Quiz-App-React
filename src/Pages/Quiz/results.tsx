import { useQuiz } from "../../Context/quiz-context";
import { Link } from "react-router-dom";
import { Footer, Navigation } from "../../components/Components";

function Results() {
  const {
    state: { ques, score, RandomOptionsArray, selected, SelectedOptionArray },
    dispatch,
  } = useQuiz();

  function createMarkup(text) {
    return { __html: text };
  }

  function handleSelect(option, i) {
    if (
      SelectedOptionArray[i] === option &&
      SelectedOptionArray[i] === ques[i].correct_answer
    ) {
      return "correct";
    } else if (
      SelectedOptionArray[i] === option &&
      SelectedOptionArray[i] !== ques[i].correct_answer
    ) {
      return "wrong";
    } else if (option === ques[i].correct_answer) {
      return "correct";
    }
  }
  return (
    <>
    <Navigation />
    <div className="section-result">
        <h1 className="">Results</h1>
        <div className="section-head">
          <h3>Score <span className="current-que">{score}</span> / {ques.length * 5}</h3>
          <Link
            onClick={() => dispatch({ type: "clear_default" })}
            className="link"
            to="/HomePage"
          >
            <h3 className="link-again">Take Another Quiz <i className="fas fa-redo"></i></h3>
          </Link>
        </div>
      <div className="container">
        {ques
          ? ques.map((item, i) => {
              return (
                <>
                  <div className="section-ques">
                    <p
                      key={item}
                      className="text-ques"
                      dangerouslySetInnerHTML={createMarkup(item.question)}
                    ></p>
                  <div className="container-ans">
                    {RandomOptionsArray &&
                      RandomOptionsArray[i].map((option) => {
                        return (
                          <button
                            key={option}
                            className={`btn-ans ${
                              selected === true ? handleSelect(option, i) : ""
                            } `}
                          >
                            <p
                              className="text-center text-normal"
                              dangerouslySetInnerHTML={createMarkup(option)}
                            ></p>
                          </button>
                        );
                      })}
                  </div>
                  </div>
                </>
              );
            })
          : " "}
      </div>
      </div>
      <Footer />
    </>
  );
}

export { Results };