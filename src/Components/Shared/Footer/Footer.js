import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const noNamed = [
       
        { name: "Laboni-Beach, Rood#02.", link: "//google.com/map" },
        { name: "Cox's Bazar, Chittagong, Bangladash", link: "//google.com/map" },
        

    ]
    const Company = [
        { name: "About ", link: "/about" },
        { name: "Project", link: "/Project" },
        { name: "Our Team", link: "/Our Team" },
        { name: "Terms Conditions", link: "/Terms Conditions" },
        { name: "Submit Listing", link: "/Submit Listing" },

    ]
    const QuickLinks = [
        { name: "Quick Links", link: "/Quick Links" },
        { name: "Rentais", link: "/Rentais" },
        { name: "Sales", link: "/Sales" },
        { name: "Contact", link: "/Contact" },
        { name: "Our Blog", link: "/Our Blog" },
    ]
    const AboutUs = [
        { name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, mollitia.', link: "/lorem" },
      
    ]
    
    return (
        <footer className="footer-area clear-both footer-bg">
            <div className="container pt-3">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Company" menuItems={Company} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={QuickLinks} />
                    <FooterCol key={4} menuTitle="About us" menuItems={AboutUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//youTube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                        <div className="mt-3">
                            <h6 className=" text-white">Call now</h6>
                            <button className="btn btn-primary text-white">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;