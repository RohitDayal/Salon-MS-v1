import React from 'react'

const Listitem = (props) => {
    const servicesData = props.servicesData;
  return (
    <>
      {servicesData.map((service, index) => (
        <div key={index}>
          <h5>
            <span>{service.name}</span>
            {".".repeat(
              80 - service.name.length - service.price.toString().length
            )}
            ${" "}
            {typeof service.price === "string"
              ? service.price
              : `$${service.price}`}
          </h5>
          <p>Service duration {service.duration}</p>
        </div>
      ))}
    </>
  );
}

export default Listitem