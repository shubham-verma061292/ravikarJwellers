import React, { Component } from 'react';
import './../css/footer.css'
export class Footer extends Component {
  render() {
    return (
      <div>
        	<footer class="footer-distributed">
			<div class="footer-left">
				<h3><i>Ravikar</i><span>Jwellers</span></h3>
				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>
				<p class="footer-company-name">Ravikar Jwellers &copy; 2017</p>
			</div>
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Vill/Post Maksudpur Dist- Lakhimpur Khiri</span> Uttar Pradesh, India</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>+91-99363 99510</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">ravikarjwellers@gmail.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					Best In the Area.
				</p>
				<div class="footer-icons">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
      </div>
    );
  }
}

export default Footer;