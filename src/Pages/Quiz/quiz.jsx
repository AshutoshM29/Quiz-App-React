import { Link } from "react-router-dom";
import { Navigation } from "../../components/Components";
import { useQuiz } from "../../Context/quiz-context";

function Quiz() {
  const {
    state: { index, ques,selectedOption,options,

      selected },
    dispatch,

  } = useQuiz();


  function createMarkup(text){
    return {__html : text};
  }


  function optionHandler(i) {
    dispatch({type:"Selected", payload:true})
    dispatch({type:"SelectedOption",payload:i})
    dispatch({type:"ShowResult"})
    if( i ===  ques[index].correct_answer){
      dispatch({type:"AddScore"})

    }else{
      dispatch({type:"SubScore"})

    }
  }

  function handleSelect(i){
    if(selectedOption === i){
      return 'select'
    }
}

  return (
    <>
    <Navigation />
      {ques ? (
        <>          
        <div className="section-quiz">
          <div className="header-rules">
            <h1>
              {ques[index].category}
            </h1>
            <div className="ques-info">
              <h3>Question <span className="current-que">{index + 1}</span> / {ques.length}</h3>
            </div>
          </div>
          <div className="container-ques">
            <p className="text-ques" dangerouslySetInnerHTML={createMarkup(ques[index].question)}></p>
          </div>

          <div className="container-ans">
            {options && options.map((i)=>{
             return(  <button key={i}
               onClick={()=>optionHandler(i)}
               disabled={selected  === true ? true: false}
               className={`btn-ans ${selected === true ? handleSelect(i): ""} `}
             >
               <p dangerouslySetInnerHTML={createMarkup(i)}> 
                             </p>
             </button>
             )
            })}

      </div> 

          <div className="footer-quiz">
            {index === 0 ? (
              <Link onClick={()=> dispatch({type:"clear_default"})
              } className="btn btn-play" to="/HomePage">
                Quit
              </Link>
            ) : (
              <button
                className="btn btn-play"
                onClick={() => dispatch({ type: "PrevQues" })}
              >
                Prev
              </button>
            )}

            {index === ques.length - 1 ? (
              <Link  
              className="btn btn-play" to="/Results">
                Show Results
              </Link>
            ) : (
              <button
                className="btn btn-play"
                onClick={() => {dispatch({ type: "NextQues", payload:ques.length })
              dispatch({type:"Selected",payload:false})
            }}
              >
                Next
              </button>
            )}
          </div>
          </div>
        </>
      ) : (
        <h1 className="section-quiz header-loading">Loading.......</h1>
      )}
    </>
  );
}


export { Quiz };