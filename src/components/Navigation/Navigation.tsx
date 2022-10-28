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
            <Link to="*">
            <img src={qLogo} className="nav-logo" loading="eager" alt="Logo" />
            </Link>
        </div>
        <ul className="nav-bar-links nav-section-items">
            <li className="list-inline-item">
                <Link className="link" to="/Homepage">
                Trending
                </Link>
            </li>
            <li className="list-inline-item">
                <Link className="link" to="/Homepage">
                New
                </Link>
            </li>
            <li className="list-inline-item">
                <Link className="link" to="/Homepage">
                For You
                </Link>
            </li>
        </ul>
    </div>
    <div className="nav-section">
        <div className="section-end">
            <ul className="nav-icons">
                <li className="list-inline-icons">
                    <Link className="nav-icon-link" to="*">
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