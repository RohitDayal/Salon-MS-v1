import React, { useState } from 'react';

const ReqAddService = () => {
  const [category, setCategory] = useState('');
  const [serviceName, setServiceName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Req Data", { category, serviceName });
    // Here you can send the selectedServices object to your backend
  };

  return (
    <div>
      <h4 className="text-success">Request to add service</h4>
      <div className="mb-3 d-flex justify-content-center">
        <img
          className="img-fluid"
          src="/assets/images/welcome.jpg"
          alt="hair-oil"
        />
      </div>
      <form className="ps-5" onSubmit={handleSubmit}>
        <div>
          <div className="form-group col-md-8">
            <label htmlFor="service-Category">Category</label>
            <select
              id="service-Category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="Hair">Hair</option>
              <option value="Nail">Nail</option>
              <option value="Body">Body</option>
              <option value="Neck">Neck</option>
              <option value="Feet">Feet</option>
            </select>
          </div>
          <div className="form-group col-md-8">
            <label htmlFor="service-name">Service Name</label>
            <input
              type="text"
              className="form-control"
              id="service-name"
              placeholder="Service name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-success">
            Request
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReqAddService;
