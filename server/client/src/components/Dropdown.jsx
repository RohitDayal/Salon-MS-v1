import React from 'react'
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <>
      <div className="dropdown-content rounded-3">
        <div className="row p-5">
          <div className="col-12 col-md-3 col-sm-6">
            <h2 className="text-primary">Haircare</h2>
            <p className="text-danger drop-fs">
              Get THAT feeling! Skincare and beauty treatments to make you feel
              amazing.
            </p>
          </div>
          <div className="col-12 col-md-3 col-sm-6">
            <Link to="/" className="mb-2 drop-fs" id="hover">
              Treatment Menu
            </Link>
            <Link to="/book" className="mb-2 drop-fs" id="hover">
              Book Online
            </Link>
            <Link to="/" className="mb-2 drop-fs" id="hover">
              Products
            </Link>
            <Link to="/book" className="mb-2 drop-fs" id="hover">
              Find a Salon
            </Link>
            <Link to="/create-salon" className="mb-2 drop-fs" id="hover">
              Create Salon
            </Link>
          </div>
          <div className="col-12 col-md-3 col-sm-6">
            <div className="dropdown-img">
              <img src="/assets/gallery/hair_01-2-400x500.jpg" alt="hair-oil" />
            </div>
            <p className="mt-3 mb-2 fw-bold">Best Seller</p>
            <p className="my-0 text-primary">Blowouts</p>
          </div>
          <div className="col-12 col-md-3 col-sm-6">
            <div className="dropdown-img">
              <img src="/assets/images/hair-oil.png" alt="hair-oil" />
            </div>
            <p className="mt-3 mb-2 fw-bold"> Featured</p>
            <p className="my-0 text-primary"> Moroccan Oil treatment</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown