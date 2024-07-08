import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const descriptionStyle = {
    color: "rgb(191, 194, 196)",
    paddingRight: "120px",
  };

  const readMoreStyle = {
    textDecoration: "none",
    color: "rgb(213, 213, 17)",
    fontSize: "large",
  };

  const socialStyle = {
    marginTop: "20px",
  };

  return (
    <footer id="footer">
      <div className="upperPart">
        <h2>Contact us</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 text-light">
          <Link to="/home">
            <h3>
              sa<span style={{ color: "yellow" }}>Loon</span>
            </h3>
          </Link>
          <p style={descriptionStyle}>
            Lonsectetur adipisicing elit. Numlaudantium, animi maiores aliquam
            eos culpa impedit aut eligend
          </p>
          <Link to="/home" style={readMoreStyle}>
            read more
          </Link>
          <br />
          <input
            type="email"
            name="rdxdayl35@gmail.com"
            id=""
            placeholder="email@gmail.com"
          />
          <button className="btn btn-success">Send</button>
        </div>
        <div className="col-sm-2">
          <h4>Services</h4>
          <Link to="/" className="footerlink px-0">
            Hair Care
          </Link>
          <Link to="/" className="footerlink px-0">
            Nail Services
          </Link>
          <Link to="/" className="footerlink px-0">
            Makeup Services
          </Link>
          <Link to="/" className="footerlink px-0">
            Men's Grooming
          </Link>
        </div>
        <div className="col-sm-2">
          <h4>About</h4>
          <Link to="/" className="footerlink px-0">
            Staff
          </Link>
          <Link to="/" className="footerlink px-0">
            Team
          </Link>
          <Link to="/" className="footerlink px-0">
            Careers
          </Link>
          <Link to="/" className="footerlink px-0">
            Blog
          </Link>
        </div>
        <div className="col-sm-2">
          <h4>Resources</h4>
          <Link to="/" className="footerlink px-0">
            Security
          </Link>
          <Link to="/" className="footerlink px-0">
            Global
          </Link>
          <Link to="/" className="footerlink px-0">
            Chart
          </Link>
          <Link to="/" className="footerlink px-0">
            Privacy
          </Link>
        </div>
      </div>
      <div className="social pb-0" style={socialStyle}>
        <Link
          to="mailto:rohitrox36@gmail.com"
          target="_blank"
          // rel="noopener noreferrer"
          className="sociallink"
        >
          <i className="fa fa-google"></i>
        </Link>
        <Link
          to="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="sociallink"
        >
          <i className="fa fa-facebook"></i>
        </Link>
        <Link
          to="https://www.instagram.com/roh.itdayal/"
          target="_blank"
          rel="noopener noreferrer"
          className="sociallink"
        >
          <i className="fa fa-instagram"></i>
        </Link>
        <Link
          to="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="sociallink"
        >
          <i className="fa fa-twitter"></i>
        </Link>
        <Link
          to="https://wa.me/+916203769875"
          target="_blank"
          rel="noopener noreferrer"
          className="sociallink"
        >
          <i className="fa fa-whatsapp"></i>
        </Link>
        <p style={socialStyle}>Copyright @saLoon 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
