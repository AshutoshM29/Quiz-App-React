import { CategoryCard } from "../components/Category/category-card";
import { Navigation, Footer } from "../components/Components";
import "../stylesheets/homepage.css"

function HomePage() {
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
                key={item.value}
                value={item.value}
                item={item.category}
              />
            );
          })}
      </div>
      <Footer />
    </>
  );
}

export { HomePage };