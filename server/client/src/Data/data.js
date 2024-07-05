// states.js

const statesOfIndia = [
  { name: "Andhra Pradesh", capital: "Amaravati" },
  { name: "Arunachal Pradesh", capital: "Itanagar" },
  { name: "Assam", capital: "Dispur" },
  { name: "Bihar", capital: "Patna" },
  { name: "Chhattisgarh", capital: "Raipur" },
  { name: "Goa", capital: "Panaji" },
  { name: "Gujarat", capital: "Gandhinagar" },
  { name: "Haryana", capital: "Chandigarh" },
  { name: "Himachal Pradesh", capital: "Shimla" },
  { name: "Jharkhand", capital: "Ranchi" },
  { name: "Karnataka", capital: "Bengaluru" },
  { name: "Kerala", capital: "Thiruvananthapuram" },
  { name: "Madhya Pradesh", capital: "Bhopal" },
  { name: "Maharashtra", capital: "Mumbai" },
  { name: "Manipur", capital: "Imphal" },
  { name: "Meghalaya", capital: "Shillong" },
  { name: "Mizoram", capital: "Aizawl" },
  { name: "Nagaland", capital: "Kohima" },
  { name: "Odisha", capital: "Bhubaneswar" },
  { name: "Punjab", capital: "Chandigarh" },
  { name: "Rajasthan", capital: "Jaipur" },
  { name: "Sikkim", capital: "Gangtok" },
  { name: "Tamil Nadu", capital: "Chennai" },
  { name: "Telangana", capital: "Hyderabad" },
  { name: "Tripura", capital: "Agartala" },
  { name: "Uttar Pradesh", capital: "Lucknow" },
  { name: "Uttarakhand", capital: "Dehradun" },
  { name: "West Bengal", capital: "Kolkata" },
];

// Assuming you're fetching data in a React component
const fetchServices = async () => {
  try {
    const response = await fetch("/api/services");
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

    // console.log(services); // This will log the desired object structure
    return services; // Return the object if needed
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error gracefully, e.g., show an error message on UI
  }
};

const beautyServices = await fetchServices();
// console.log(beautyServices);
export { statesOfIndia, beautyServices };
