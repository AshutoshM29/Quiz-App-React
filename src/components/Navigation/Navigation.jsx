import { Link } from 'react-router-dom'
import "./navigation.css"
import Categories from "../../Data/category-list";
import { useQuiz } from "../../Context/quiz-context";
import {
qLogo,
} from '../../assets/images'

function Navigation() {
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
<nav className="nav-header nav-bar">
    <div className="nav-section">
        <div className="nav-section-items">
            <Link to="/LandingPage">
            <img src={qLogo} className="nav-logo" loading="eager" alt="Logo" />
            </Link>
        </div>
        <ul className="nav-bar-links nav-section-items">
            <li className="list-inline-item">
                <a className="link" href="/trending">Trending</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/new">New</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/grooming">For You</a>
            </li>
        </ul>
    </div>
    <div className="nav-section">
        <div className="section-end">
        <label className="search-bar">
            <span className="search-bar-btn" type="submit">
                <i className="fa fa-search"></i>
            </span>
            <input onChange={(e) => {
            dispatch({ type: "search_query", payload: e.target.value });
          }} className="search-bar-input" type="text" placeholder="Search a quiz!" name="search"></input>
        </label>
        <ul className="nav-icons">
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/Signup">
                <span className="nav-icon">
                    <i className="fas fa-user-plus"></i>
                </span>
                <span className="nav-icon-text">
                    Sign Up
                </span>
                </Link>
            </li>
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/">
                <span className="nav-icon">
                    <i className="fas fa-user"></i>
                </span>
                <span className="nav-icon-text">
                    Profile
                </span>
                </Link>
            </li>
        </ul>
    </div>
    </div>
</nav>
)
}

export {Navigation}