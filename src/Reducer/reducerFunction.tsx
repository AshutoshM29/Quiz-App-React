import { QuizReducer,QuizAction } from "./reducerFunction.types";

export function reducerFunction(state:QuizReducer, action:QuizAction) {
  switch (action.type) {
    case "NextQues":
      return {
        ...state,
        index:
          state.index === action.payload - 1 ? state.index : state.index + 1,
      };

    case "search_query":
      return { ...state, search_query: action.payload };

    case "Question":
      return { ...state, ques: action.payload };

    case "AddScore":
      return { ...state, score: state.score + 5 };
    case "SubScore":
      return { ...state, score: state.score - 1 };

    case "SelectedOption":
      return { ...state, selectedOption: action.payload };
        case "Selected":
        return { ...state, selected: action.payload };
        case "option":
        return {
        ...state,
        options: action.payload.sort(() => Math.random() - 0.5),
      };

    case "ShowResult":
      return {
        ...state,
        RandomOptionsArray: state.options
          ? [...state.RandomOptionsArray, state.options]
          : [...state.RandomOptionsArray],
        SelectedOptionArray: state.selectedOption
          ? [...state.SelectedOptionArray, state.selectedOption]
          : [...state.SelectedOptionArray],
      };

    case "clear_default":
      return {
        ...state,
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
    default:
      return state;
  }
}