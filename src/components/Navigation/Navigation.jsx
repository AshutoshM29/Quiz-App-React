import { Link } from 'react-router-dom'
import "./navigation.css"
import {
qLogo,
} from '../../assets/images'

function Navigation() {
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
                <Link className="link" href="/trending">Trending</Link>
            </li>
            <li className="list-inline-item">
                <Link className="link" href="/new">New</Link>
            </li>
            <li className="list-inline-item">
                <Link className="link" href="/grooming">For You</Link>
            </li>
        </ul>
    </div>
    <div className="nav-section">
        <div className="section-end">
        <label className="search-bar">
            <span className="search-bar-btn" type="submit">
                <i className="fa fa-search"></i>
            </span>
            <input className="search-bar-input" type="text" placeholder="Search a quiz!" name="search"></input>
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