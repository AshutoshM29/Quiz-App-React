import { Link } from 'react-router-dom'
import "../stylesheets/landing-page.css"
import { heroLogo } from "../assets/images"

function LandingPage() {
return (
    <>
    <main>
        <img className="img-hero" src={heroLogo} alt="" />
        <div className="section-hero">
        <h1>Quizingoo</h1>
        <h2>Playing and creating quizzes <br/> has never been more easy & fun with <br/>
          <span>Quizingoo!!</span>
        </h2>

        <Link
            className='btn btn-launch btn-primary-solid'
            to="/Homepage">
              Browse Quizzes
            <i className="fas fa-arrow-circle-right"></i>
        </Link>
        </div>
    </main>
    </>
  );
}

export { LandingPage };