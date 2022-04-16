import { CategoryCard } from "./Category/category-card";
import Categories from "../Data/category-list";
import { useQuiz } from "../Context/quiz-context";
import { Navigation, Footer } from "../components/Components";
import "../stylesheets/homepage.css"

function HomePage() {
  let categoryList = Categories;

  const {
    state: { search_query },
    dispatch,
    fetchQues,
  } = useQuiz();

  if (search_query) {
    categoryList = Categories.filter((item) =>
      item.category.toLowerCase().includes(search_query)
    );
  }

  return (
    <>
    <Navigation />
      <div className="section-top">
        <h1 className="head-top">Quizingoo</h1>

        <h2 className="desc-top">Select a Category!</h2>
      </div>
      <div className="container-card">
        {categoryList &&
          categoryList.map((item) => {
            return (
              <CategoryCard
                key = {item.value}
                value = {item.value}
                item = {item.category}
                img = {item.image}
              />
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export { HomePage };