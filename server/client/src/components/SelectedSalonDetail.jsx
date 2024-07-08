// // // Used inside BookingPage component

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateTimeComp from "./DateTimeComp";

const SelectedSalonDetail = ({ salonId }) => {
  const [salonData, setSalonData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [showCategories, setShowCategories] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchSalonData = async () => {
      try {
        const response = await fetch(`/api/salon/data/${salonId}`);
        const data = await response.json();
        setSalonData(data);
        console.log(data);

        // Extract unique categories from data
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category_name)),
        ];
        setCategories(uniqueCategories);

        // Set default selected category
        if (uniqueCategories.length > 0) {
          setSelectedCategory(uniqueCategories[1]);
          setActiveCategory(uniqueCategories[1]);
          setSelectedService(null);
          setSelectedColor("");
        }
      } catch (error) {
        console.error("Error fetching salon data:", error);
      }
    };

    fetchSalonData();
  }, [salonId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
    setSelectedService(null);
  };

  const filteredServices = salonData.filter(
    (service) => service.category_name === selectedCategory
  );

  const handleSelectedService = (service) => {
    setShowCategories(false);
    setSelectedService(service);
    setSelectedColor("#00aeb7");
  };

  return (
    <>
      {showCategories ? (
        <div className="selected-salon-detail mt-4 border border-1">
          <div className="row mx-0">
            {categories.map((category) => (
              <div
                key={category}
                className="col-12 col-md-3 col-sm-6 px-0 border border-dark border-1"
              >
                <Link
                  className={`text-center d-block p-10px l-space service-category ${
                    activeCategory === category ? "active-category" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-2">
          {selectedService && (
            <div className="row p-2 service-content pointer mx-0">
              <div className="col-7">
                <p className="fw-bold fs-14px mb-0">
                  {selectedService.service_name}
                </p>
                <p className="fs-14px">{selectedService.description}</p>
              </div>
              <div className="col-5">
                <p className="fs-14px mb-1 fw-bold">
                  Rs{selectedService.price}{" "}
                  <span
                    className="float-end me-5 rounded-circle span-circle"
                    style={{ backgroundColor: selectedColor }}
                  ></span>
                </p>
                <p className="fs-14px">{selectedService.duration}min</p>
              </div>
            </div>
          )}
        </div>
      )}

      {showCategories ? (
        <div className="mt-2">
          {filteredServices.map((service) => (
            <div
              key={service.service_id}
              className="row p-2 service-content pointer mx-0"
              onClick={() => handleSelectedService(service)}
            >
              <div className="col-7">
                <p className="fw-bold fs-14px mb-0">{service.service_name}</p>
                <p className="fs-14px">{service.description}</p>
              </div>
              <div className="col-5">
                <p className="fs-14px mb-1 fw-bold">
                  Rs{service.price}{" "}
                  <span
                    className="float-end me-5 rounded-circle span-circle"
                    style={{ backgroundColor: selectedColor }}
                  ></span>
                </p>
                <p className="fs-14px">{service.duration}min</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <DateTimeComp
            salonId={salonId}
            salonData={salonData}
            selectedService={selectedService}
          />
        </div>
      )}
    </>
  );
};

export default SelectedSalonDetail;
