import "./footer.css";
function Footer() {
return (
<div>
    <footer className="flex-align-center">
        <ul className="social-links list-non-bullet">
            <li className="list-item">
                <a href="https://github.com/AshutoshM29">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="list-item">
                <a href="https://twitter.com/Astomi_29?s=08">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            <li className="list-item">
                <a href="https://www.instagram.com/the.astomi/">
                    <i className="fab fa-instagram"></i>
                </a>
            </li>
            <li className="list-item">
                <a href="https://www.linkedin.com/mwlite/in/ashutosh-mishra-b50423206">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
        <div className="with-love">Made with <i className="fas fa-heart"></i> by : Ashutosh Mishra</div>
    </footer>
</div>
);
}

export { Footer };