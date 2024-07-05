// fetchServices.js

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
    console.log(services)
    return services;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchServices;
