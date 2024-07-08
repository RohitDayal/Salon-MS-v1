import React from "react";
import "./Invoice.css";

const Invoice = (invoiceData) => {
  const { salonName, selectedService, selectedDate, selectedTime } =
    invoiceData;

  return (
    <div className="invoice-container card">
      <div className="card-header">
        <h2>Invoice</h2>
        <h4>{salonName}</h4>
        <p>
          Appointment on: {selectedTime} {selectedDate}
        </p>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedService.service_name}</td>
              <td>{selectedService.duration} mins</td>
              <td>{selectedService.price} Rs</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="theme-color">
              <td colSpan="2" className="text-right">
                Total Price
              </td>
              <td>{selectedService.price} Rs</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
