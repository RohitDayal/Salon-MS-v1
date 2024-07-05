import React, { useState, useEffect } from "react";
import OverlaySearch from "../components/OverlaySearch";
import SelectedSalonDetail from "../components/SelectedSalonDetail";

const BookingPage = () => {
  const [display, setDisplay] = useState("none");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [salonDetail, setSalonDetail] = useState({});
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/services?message=${encodeURIComponent(
            "from booking page"
          )}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServices(data); // Set the services data from API
        setFilteredServices(data); // Initially, set filtered services to all services
      } catch (error) {
        console.error("Error fetching services:", error);
        // Handle error fetching data
      }
    };
   
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
  };

  // const handleSearch = (e) => {
  //   const { value } = e.target;
  //   setSearchQuery(value);

  //   if (value.trim() === "") {
  //     setShowContent(false);
  //   } else {
  //     setShowContent(true);
  //   }

  //   // Filter services based on search query
  //   const filtered = services.filter((service) =>
  //     service.service_name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setFilteredServices(filtered);
  // };
const handleSearch = (e) => {
  const { value } = e.target;
  setSearchQuery(value);

  if (value.trim() === "") {
    setShowContent(false);
  } else {
    setShowContent(true);
  }

  // Filter services based on search query
  const filtered = services.filter((service) => {
    const searchValue = value.toLowerCase();
    return (
      service.service_name.toLowerCase().includes(searchValue) ||
      service.category_name.toLowerCase().includes(searchValue) ||
      service.price.toString().includes(searchValue) ||
      service.duration.toString().includes(searchValue)
    );
  });
  setFilteredServices(filtered);
};

  return (
    <>
      <div className="container mt-5 px-4 pt-2 shadow" style={{ width: "80%" }}>
        <div className="booking-header">
          <h6 className="text-center">The Saloon</h6>
          <p className="px-2" style={{ fontSize: "12px" }}>
            From manicures to pedicures, facials to body massages, brows to
            lashes and waxing we're here to serve up “Amazing”. We're all about
            spreading the love which means you can now BOOK ONLINE at any Sorbet
            Salon. Do... Read More
          </p>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-8">
            <div className="store-section">
              <p className="fw-bold mb-0">STORE</p>
              <div className="row border border-2 py-2 mx-0">
                <div className="col">
                  <p className="mb-0 fs-14px">{salonDetail?.name}</p>
                </div>
                <div className="col">
                  <p
                    className=" float-end fw-bold mb-0 pointer fs-14px"
                    style={{ color: "#00aeb7" }}
                    onClick={toggleDisplay}
                  >
                    Change Store
                  </p>
                </div>
              </div>
              <p className="fw-bold my-3">SELECT A SERVICE</p>
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="form-control rounded-0 mr-sm-2 custom-focus fs-15px"
                  type="search"
                  placeholder="Search by name, price, duration.."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>
              {showContent ? (
                <div className="service-search-result mt-4">
                  {filteredServices.map((service) => (
                    <div
                      key={service.service_id}
                      className="service-content pointer"
                    >
                      <p
                        className="mb-0 p-2 fs-14px service-category"
                        style={{ backgroundColor: "#F5F7F8" }}
                      >
                        Category:{" "}
                        {service.category_name.charAt(0).toUpperCase() +
                          service.category_name.slice(1)}
                      </p>
                      <div className="row p-2">
                        <div className="col-7">
                          <p className="fw-bold fs-14px mb-0">
                            {service.service_name}
                          </p>
                          <p className="fs-14px">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores, doloremque. Reprehenderit,
                            voluptatum?
                          </p>
                        </div>
                        <div className="col-5">
                          <p className="fs-14px mb-1 fw-bold">
                            Rs{service.price}{" "}
                            <span className="float-end me-5 rounded-circle span-circle"></span>
                          </p>
                          <p className="fs-14px">{service.duration}min</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <SelectedSalonDetail salonId={salonDetail?.salon_id} />
              )}
            </div>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>

      <OverlaySearch
        display={display}
        toggleDisplay={toggleDisplay}
        setSalonDetail={setSalonDetail}
      />
    </>
  );
};

export default BookingPage;
