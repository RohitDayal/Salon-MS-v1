import React, { useState, useEffect, useContext } from "react";
import { statesOfIndia } from "../Data/data";
import ReqAddService from "../components/ReqAddService";
import { UserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const CreateSalon = () => {
  const token = localStorage.getItem("token");
  const { userInfo } = useContext(UserContext);
  const [beautyServices, setBeautyServices] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  const [initialState, setInitialState] = useState(null);
  const [formData, setFormData] = useState({
    salonName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    acceptTC: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!token || !userInfo) {
      toast.error("Please log in first!", {
        position: "bottom-right",
      });
      navigate("/login", { state: { from: location } });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `/api/services?message=${encodeURIComponent(
            "from create salon page"
          )}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Organize data into the desired object structure
        const services = data.reduce((acc, service) => {
          const { category_name, service_name, service_id } = service;

          if (!acc[category_name]) {
            acc[category_name] = [];
          }

          acc[category_name].push({ service_name, service_id });

          return acc;
        }, {});

        // Log or set state here
        console.log(services); // Log the desired object structure
        const initialSelectedServices = services
          ? Object.keys(services).reduce((acc, category) => {
              acc[category] = [];
              return acc;
            }, {})
          : {};
        setSelectedServices(initialSelectedServices);
        setInitialState(initialSelectedServices);
        setBeautyServices(services); // Set state to trigger UI update if needed
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error gracefully, e.g., show an error message on UI
      }
    };

    fetchServices();
  }, []);

  const handleCheckboxChange = (category, subCategory) => {
    setSelectedServices((prevState) => {
      const updatedCategory = prevState[category]?.includes(
        subCategory.service_id
      )
        ? prevState[category].filter((item) => item !== subCategory.service_id)
        : [...prevState[category], subCategory.service_id];

      return { ...prevState, [category]: updatedCategory };
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionData = {
      ...formData,
      userId: userInfo.UserID,
      services: selectedServices,
    };
    // Send the data to the backend
    fetch("/create-saloon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setSelectedServices(initialState);

        setFormData({
          salonName: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          acceptTC: false,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container mt-3 p-0">
        <h4 className="add-store-heading bg-info text-light p-3 rounded">
          Add your store here...
        </h4>
        <div className="row m-0">
          <div
            className="col-12 col-md-2 scroll-service"
            style={{ backgroundColor: "white" }}
          >
            <h6 className="text-info ps-2">Please select services</h6>
            {beautyServices &&
              Object.keys(beautyServices).map((category) => (
                <div key={category} className="ps-4">
                  <p
                    style={{ backgroundColor: "#F5F5F5" }}
                    className="m-0 p-1 border-bottom border-1 text-primary pointer"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + category}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </p>
                  <div id={category} className="collapse">
                    {beautyServices[category].map((subCategory, index) => (
                      <div key={index} className="form-check">
                        <input
                          type="checkbox"
                          value={subCategory.service_id}
                          checked={selectedServices[category]?.includes(
                            subCategory.service_id
                          )}
                          className="form-check-input"
                          id={subCategory.service_id}
                          onChange={() =>
                            handleCheckboxChange(category, subCategory)
                          }
                        />
                        <label
                          className="form-check-label fw-light"
                          htmlFor={subCategory.service_id}
                        >
                          {subCategory.service_name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className=" p-5 border border-primary">
                <h4 className="text-center text-primary mb-4">
                  <span className="border-bottom border-primary fw-bold border-2">
                    Fill The Details
                  </span>
                </h4>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="salonName">Saloon Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="salonName"
                      name="salonName"
                      placeholder="Salon name.."
                      value={formData.salonName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="1234 Main St"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="form-group col-md-5">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <label htmlFor="state">State</label>
                    <select
                      id="state"
                      name="state"
                      className="form-control"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose...</option>
                      {statesOfIndia.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group col-md-4">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="acceptTC"
                      name="acceptTC"
                      required
                      checked={formData.acceptTC}
                      onChange={handleInputChange}
                    />
                    <label
                      className="form-check-label fw-light text-primary"
                      htmlFor="acceptTC"
                    >
                      Accept T&C
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-4 p-3 ps-5">
            <ReqAddService />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSalon;
