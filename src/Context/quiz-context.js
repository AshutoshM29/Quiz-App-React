import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
  } from "react";
  import { reducerFunction } from "../Reducer/reducerFunction";
  import { fetchQues } from "../Services/fetchQues";
  
  const QuizContext = createContext();
  
  const QuizProvider = ({ children }) => {
	const [loader, setLoader] = useState(true);
  	const [category, setCategory] = useState(9);
  	const [apiError, setApiError] = useState(false);
  
	const initialState = {
	  index: 0,
	  search_query: "",
	  ques: undefined,
	  score: 0,
	  selectedOption: "",
	  selected: false,
	  options: undefined,
	  RandomOptionsArray: [],
	  SelectedOptionArray: [],
	};
  
	const [state, dispatch] = useReducer(reducerFunction, initialState);
  
	useEffect(() => {
	  setLoader(true);
	  const loadData = async () => {
		const res = await fetchQues(category);
		if (res) {
		  if (res.response_code === 0) {
			dispatch({ type: "Question", payload: res.results });
		  } else {
			setApiError("Something went wrong");
		  }
		}
		setLoader(false);
	  };
	  loadData();
	}, [category]);
  
	useEffect(() => {
	  {
		state.ques &&
		  dispatch({
			type: "option",
			payload: [
			  state.ques[state.index]?.correct_answer,
			  ...state.ques[state.index]?.incorrect_answers,
			],
		  });
	  }
	}, [state.ques, state.index]);
  
	return (
	  <QuizContext.Provider
		value={{
		  state,
		  dispatch,
		  apiError,
		  loader,
		  setCategory,
		}}
	  >
		{children}
	  </QuizContext.Provider>
	);
  };
  
  const useQuiz = () => useContext(QuizContext);
  
  export { QuizProvider, useQuiz };