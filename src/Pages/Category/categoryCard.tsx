import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/quiz-context";
import { CategoryCardProps } from "./categoryCard.types";
import "../../stylesheets/homepage.css"

function CategoryCard({ img, value, item }: CategoryCardProps) {
  const navigateTo = useNavigate();
  const { apiError, setCategory } = useQuiz();

  function navigateToQuiz() {
    setCategory(value)
    if (apiError) {
      navigateTo("*")
    } else {
      navigateTo("/Rules")
    }
  }
  return (
    <>
      <div className="card card-vertical">
        <div className="card-head">
          <img
            className="card-vertical-img"
            src={img}
            alt="category img"
          />
        </div>
        <div className="card-body text-center color-primary">
          <h3> {item} </h3>
          <div className="card-vertical-footer">
            <button onClick={navigateToQuiz} className="btn btn-primary-solid">
              Play Now
            </button>
            <button title="Add to favotites" className="btn-tom">
              <i className="fa fa-heart-o"></i>
            </button>
            <button title="Share" className="btn-tom">
              <i className="fa fa-share-alt"></i>
            </button>
            <button title="More options" className="btn-tom">
              <i className="fa fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export { CategoryCard };