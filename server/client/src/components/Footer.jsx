import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const descriptionStyle = {
    color: "rgb(191, 194, 196)",
    // paddingRight: "120px",
  };

  const socialStyle = {
    marginTop: "20px",
  };

  return (
    <footer id="footer">
      <div className="upperPart">
        <h2>Contact us</h2>
      </div>
      {/* <div className="row">
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
      </div> */}
      <div className="">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 text-light">
            <Link to="/home">
              <h3>
                sa<span style={{ color: "yellow" }}>Loon</span>
              </h3>
            </Link>
            <p style={descriptionStyle} className="mb-0">
              Lonsectetur adipisicing elit. Numlaudantium, animi maiores aliquam
              eos culpa impedit aut eligend
            </p>
            <Link
              to="/"
              style={{ color: "rgb(213, 213, 17)", marginBottom: "10px" }}
            >
              read more
            </Link>

            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control rounded-1 mr-sm-2 custom-focus fs-15px mb-2"
                type="email"
                placeholder="example@gmail.com"
                style={{ maxWidth: "380px" }}
              />
              <button type="submit" className="btn btn-danger rounded-1">
                Subscribe
              </button>
            </form>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h4>Services</h4>
            <Link to="/" className="footerlink d-block">
              Hair Care
            </Link>
            <Link to="/" className="footerlink d-block">
              Nail Services
            </Link>
            <Link to="/" className="footerlink d-block">
              Makeup Services
            </Link>
            <Link to="/" className="footerlink d-block">
              Men's Grooming
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h4>About</h4>
            <Link to="/" className="footerlink d-block">
              Staff
            </Link>
            <Link to="/" className="footerlink d-block">
              Team
            </Link>
            <Link to="/" className="footerlink d-block">
              Careers
            </Link>
            <Link to="/" className="footerlink d-block">
              Blog
            </Link>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h4>Resources</h4>
            <Link to="/" className="footerlink d-block">
              Security
            </Link>
            <Link to="/" className="footerlink d-block">
              Global
            </Link>
            <Link to="/" className="footerlink d-block">
              Chart
            </Link>
            <Link to="/" className="footerlink d-block">
              Privacy
            </Link>
          </div>
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
