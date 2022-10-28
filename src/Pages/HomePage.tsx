import { CategoryCard } from "./Category/categoryCard";
import Categories from "../Data/category-list";
import { useQuiz } from "../Context/quiz-context";
import { Navigation, Footer } from "../components/Components";
import "../stylesheets/homepage.css"

function HomePage() {
  let categoryList = Categories;

  const {
    state: { search_query },
    dispatch,
  } = useQuiz();

  if (search_query) {
    categoryList = Categories.filter((item) =>
      item.category.toLowerCase().includes(search_query.toLowerCase())
    );
  }

  return (
    <>
    <Navigation />
      <div className="section-top">
      <h1 className="head-top">Quizingoo</h1>
      <h2 className="desc-top">Select a Category!</h2>
      <label className="search-bar">
        <span className="search-bar-btn">
          <i className="fa fa-search"></i>
        </span>
        <input
          onChange={(e) => {
            dispatch({ type: "search_query", payload: e.target.value });
          }}
          type="text"
          placeholder="Search A quiz"
          className="search-bar-input"
        />
      </label>
      </div>

      <div className="container-card">
        {categoryList.length !== 0 ?
          categoryList.map((item) => {
            return (
              <CategoryCard
                key = {item.value}
                value = {item.value}
                item = {item.category}
                img = {item.image}
              />
            );
          }):
          (
            <div>
              <h1 className="desc-top">No quizes found :(</h1>
            </div>
          )
        }
      </div>
      <Footer />
    </>
  );
}

export { HomePage };