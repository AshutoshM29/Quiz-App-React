import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/quiz-context";
import "../../stylesheets/homepage.css"

function CategoryCard(props) {
  const navigateTo = useNavigate();
  const { dispatch, fetchQues, apiError } = useQuiz();

  function navigateToRules() {
    fetchQues(props.value);
    if(apiError){
      navigateTo("*")
    }else{
      navigateTo("/Rules")
    }
  }
  return (
    <>
      <div className="card card-vertical">
        <div className="card-head">
          <img
            className="card-vertical-img"
            src={props.img}
            alt="category image"
          />
        </div>
        <div className="card-body text-center color-primary">
          <h3> {props.item} </h3>
          <div className="card-vertical-footer">
            <button onClick={navigateToRules} className="btn btn-primary-solid">
              Play Now
            </button>
            <button title="Add to favotites" class="btn-tom"><i class="fa fa-heart-o"></i></button>
            <button title="Share" class="btn-tom"><i class="fa fa-share-alt"></i></button>
            <button title="More options" class="btn-tom"><i class="fa fa-ellipsis-v"></i></button>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export { CategoryCard };