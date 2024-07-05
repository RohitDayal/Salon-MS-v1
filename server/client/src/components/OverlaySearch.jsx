import React, { useEffect, useState, useRef } from "react";

const OverlaySearch = (props) => {
  const inputRef = useRef(null); // Create a ref using the useRef hook

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element when the component mounts
    }
  }, [props.display]);

  const [salonData, setSalonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSalons, setFilteredSalons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/salon/all");
        if (!response.ok) {
          throw new Error("Failed to fetch salon data");
        }
        const data = await response.json();
        setSalonData(data); // Assuming data is an array of salon objects
        setFilteredSalons(data); // Initialize filtered salons with all data
        props.setSalonDetail(data[0]);
      } catch (error) {
        console.error("Error fetching salon data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs once on component mount

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    if (value.trim() === "") {
      setFilteredSalons(salonData); // Show all salons when search query is empty
    } else {
      const filtered = salonData.filter((salon) => {
        const searchValue = value.toLowerCase();
        return (
          salon.name.toLowerCase().includes(searchValue) ||
          salon.address.toLowerCase().includes(searchValue) ||
          salon.city.toLowerCase().includes(searchValue) ||
          salon.state.toLowerCase().includes(searchValue) ||
          salon.zip.toLowerCase().includes(searchValue)
        );
      });
      setFilteredSalons(filtered);
    }
  };
  //initially set data to display on selected salon
  const handleSalonDetail = (salon) => {
    // console.log(salon);
    props.setSalonDetail(salon);
    props.toggleDisplay();
  };

  return (
    <>
      <div id="overlay" style={{ display: props.display }}>
        <div id="overlay-content" className="shadow">
          <div className="container p-0">
            <h6
              className="p-4 text-light"
              style={{ backgroundColor: "#00AFB8" }}
            >
              Please select a Store to continue
              <span
                className="float-end fs-3 px-2"
                onClick={props.toggleDisplay}
              >
                x
              </span>
            </h6>

            <div>
              <form
                className="form-inline my-2 px-4 my-lg-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  ref={inputRef}
                  className="form-control rounded-0 mr-sm-2 custom-focus fs-14px"
                  type="search"
                  placeholder="Change.."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>

              <div className="salon-store-list pt-2">
                {filteredSalons.map((salon) => (
                  <div
                    key={salon.id}
                    className="salon-detail ps-4 py-2"
                    value={salon.name}
                    onClick={() => handleSalonDetail(salon)} // Pass salon directly
                  >
                    <p className="fw-bold">{salon.name}</p>
                    <p className="fw-bold ps-4">Address:</p>
                    <div className="ps-5">
                      <p>{salon.address}</p>
                      <p>{salon.city}</p>
                      <p>{salon.zip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlaySearch;
