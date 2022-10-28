import { reducerFunction } from "./reducerFunction";
import { QuizReducer,QuizAction } from "./reducerFunction.types";

const initialState : QuizReducer = {
  index: 1,
  search_query: "",
  ques: undefined,
  score: 0,
  selectedOption: "",
  selected: false,
  options: undefined,
  RandomOptionsArray: [],
  SelectedOptionArray: [],
};

beforeEach(() => {
  return initialState;
});

describe("testing reducer function", () => {

  test("CASE_NEXT_QUES", () => {
    const goToNext:QuizAction = {
      type: "NextQues",
      payload: 10,
    };

    let state = reducerFunction(initialState, goToNext);

    expect(state.index).toBe(2)
  });

  test("CASE_ADD_SCORE", () => {
    const addScore:QuizAction = {
      type: "AddScore",
    };

    let state = reducerFunction(initialState, addScore);

    expect(state.score).toBe(5)

  });

  test("CASE_SUB_SCORE", () => {
    const subScore:QuizAction = {
      type: "SubScore",
    };

    let state = reducerFunction(initialState, subScore);

    expect(state.score).toBe(-1)

  });

  test("CASE_SEARCH_QUERY", () => {
    const search_query:QuizAction = {
      type: "search_query",
      payload: "general knowledge",
    };
    let state = reducerFunction(initialState, search_query);
    expect(state.search_query).toBe("general knowledge")

  });

  test("CASE_SELECTED_OPTION", () => {
    const SelectedOption:QuizAction = {
      type: "SelectedOption",
      payload: ["option1"],
    };
    let state = reducerFunction(initialState, SelectedOption);
    expect(state.selectedOption).toContain('option1');
  });

  test("CASE_SELECTED", () => {
    const Selected:QuizAction = {
      type: "Selected",
      payload: true,
    };
    let state = reducerFunction(initialState, Selected);
    expect(state.selected).toBeTruthy()
    
  });

  test("CASE_QUESTION", () => {
    const Question:QuizAction = {
      type: "Question",
      payload: [],
    };
    let state = reducerFunction(initialState, Question);
    expect(state).toEqual({
      ...initialState,
      ques: [],
    });
  });

  test("CASE_Clear_default", () => {
    const clearDefault:QuizAction = {
      type: "clear_default",
    };

    let state = reducerFunction(initialState, clearDefault);
    expect(state).toEqual({
      index: 0,
      search_query: "",
      ques: undefined,
      score: 0,
      selectedOption: "",
      selected: false,
      options: undefined,
      RandomOptionsArray: [],
      SelectedOptionArray: [],
    });
  });

  test("CASE_Default", () => {
    const defaultState:any = {
      type: "",
    };
    let state = reducerFunction(initialState, defaultState);
    expect(state).toBe(initialState);
  });
});