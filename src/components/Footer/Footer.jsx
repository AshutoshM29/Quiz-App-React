import React from "react";
import "./footer.css";
function Footer() {
	return (
		<div>
			<footer class="flex-align-center">
    <ul class="social-links list-non-bullet">
        <li class="list-item">
            <a href="https://github.com/AshutoshM29"> <i class="fab fa-github"></i></a></li>
        <li class="list-item">
            <a href="https://twitter.com/Astomi_29?s=08"> <i class="fab fa-twitter"></i></a></li>
        <li class="list-item">
            <a href="https://www.instagram.com/the.astomi/"> <i class="fab fa-instagram"></i></a></li>
        <li class="list-item">
            <a href="https://www.linkedin.com/mwlite/in/ashutosh-mishra-b50423206"><i class="fab fa-linkedin"></i></a></li>

    </ul>
    <div class="with-love">Made with <i class="fas fa-heart"></i> by : Ashutosh</div>


  </footer>
		</div>
	);
}

export { Footer };