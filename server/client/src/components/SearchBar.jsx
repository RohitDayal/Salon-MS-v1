import React, { useState } from "react";

const SearchBar = () => {
   const data = [
     "Haircut",
     "Hair Coloring",
     "Manicure",
     "Pedicure",
     "Facial",
     "Massage",
     "Waxing",
     "Makeup",
     "Eyebrow Threading",
     "Hair Styling",
     "Nail Art",
     "Body Scrub",
     "Bridal Makeup",
     "Hair Treatment",
     "Spa Services",
     "Beard Trim",
     "Hot Towel Shave",
     "Eyelash Extensions",
     "Brow Tinting",
     "Hair Highlights",
     "Deep Conditioning",
     "Scalp Massage",
     "Brazilian Blowout",
     "Keratin Treatment",
     "Updo Styling",
     "Perm Services",
     "Balayage Color",
     "Root Touch-Up",
     "Olaplex Treatment",
     "Nail Extensions",
     "Gel Manicure",
     "Acrylic Nails",
     "French Manicure",
     "Paraffin Wax",
     "Shellac Nails",
     "Foot Massage",
     "Reflexology Massage",
     "Swedish Massage",
     "Aromatherapy Massage",
     "Thai Massage",
     "Sports Massage",
     "Couples Massage",
     "Prenatal Massage",
     "Lymphatic Drainage",
     "Microdermabrasion",
     "Chemical Peel",
     "Anti-Aging Facial",
     "Acne Treatment",
     "Collagen Facial",
     "LED Light Therapy",
     "Hydrotherapy Bath",
     "Salt Glow Scrub",
     "Detox Body Wrap",
     "Mud Body Mask",
     "Cellulite Treatment",
     "Laser Hair Removal",
     "Electrolysis Hair Removal",
     "IPL Hair Removal",
     "Sugaring Hair Removal",
     "Threading Hair Removal",
     "Bikini Wax",
     "Full Body Wax",
     "Underarm Wax",
     "Leg Wax",
     "Arm Wax",
     "Chest Wax",
     "Back Wax",
     "Eyebrow Wax",
     "Lip Wax",
     "Chin Wax",
     "Face Wax",
     "Custom Facial",
     "Express Facial",
     "Teen Facial",
     "Hydrating Facial",
     "Brightening Facial",
     "Clarifying Facial",
     "Eye Treatment",
     "Lip Treatment",
     "Neck Treatment",
     "Hand Treatment",
     "Foot Treatment",
     "Scalp Treatment",
     "Beard Care",
     "Mustache Trim",
     "Beard Shaping",
     "Beard Coloring",
     "Hair Gloss",
     "Color Correction",
     "Highlights Retouch",
     "Ombre Hair Color",
     "Full Highlights",
     "Partial Highlights",
     "Hair Relaxing",
     "Japanese Straightening",
     "African Hair Braiding",
     "Hair Extensions",
     "Tape-In Extensions",
     "Clip-In Extensions",
     "Sew-In Weave",
   ];


  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter data based on the query
    if (value === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const resultStyle = {
    padding: "6px 15px",
    background: "#f4f4f4",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  };

  const hoverStyle = {
    ...resultStyle,
    background: "#e0e0e0",
  };

  return (
    <div style={{ position: "relative", width: "400px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: "5px",
          margin: "10px 0",
          width: "70%",
          boxSizing: "border-box",
          fontSize: "16px",
          borderRadius: "20px", // Rounded corners
          border: "1px solid #ddd", // Light border
          outline: "none", // Remove outline
        }}
        onFocus={(e) => (e.target.style.border = "1px solid yellow")} // Remove black border on focus
        onBlur={(e) => (e.target.style.border = "1px solid #ddd")} // Light border on blur
      />
      {query && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            position: "absolute",
            top: "45px", // Adjusted top for better placement below rounded input
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "0 0 10px 10px", // Rounded bottom corners for dropdown
            zIndex: 1000,
            maxHeight: "auto",
            overflowY: "auto",
          }}
        >
          {filteredData.map((item, index) => (
            <li
              key={index}
              style={resultStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = hoverStyle.background)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = resultStyle.background)
              }
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
