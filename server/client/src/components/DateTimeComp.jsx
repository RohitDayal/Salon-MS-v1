import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "../Temp/Invoice.css";
import { Link } from "react-router-dom";

const AvailableSlots = ({
  selectedDate,
  salonId,
  serviceId,
  selectedTime,
  setSelectedTime,
}) => {
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const fetchTimeSlots = async () => {
        try {
          const response = await fetch(
            `/api/salon/booking/timeslots/${salonId}?date=${format(
              selectedDate,
              "yyyy-MM-dd"
            )}`
          );
          const data = await response.json();
          setTimeSlots(data.slots);
          console.log(data.slots);
        } catch (error) {
          console.error("Error fetching time slots:", error);
        }
      };

      fetchTimeSlots();
    }
  }, [selectedDate, salonId, serviceId]);

  return (
    <div>
      {selectedDate && (
        <div>
          <div className="date-header">
            <p className="mb-0">{format(selectedDate, "EEE, dd MMM yyyy")}</p>
          </div>
          <div className="time-slots">
            {timeSlots?.length > 0 ? (
              timeSlots.map((slot) => (
                <div
                  key={slot}
                  className="form-check py-1 border-bottom border-1"
                  onClick={() => {
                    setSelectedTime(slot);
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="timeslot"
                    id={slot}
                    checked={selectedTime === slot}
                    onChange={() => setSelectedTime(slot)}
                  />
                  <label
                    className="form-check-label fw-lighter d-block"
                    htmlFor={slot}
                  >
                    {slot}
                  </label>
                </div>
              ))
            ) : (
              <p>No available time slots</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DateTimeComp = ({ salonId, selectedService, salonData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const invoiceRef = useRef(null);

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  // Format the date to a readable string
  const formattedDate = format(selectedDate, "EEE, dd MMM yyyy");

  useEffect(() => {
    if (selectedTime) {
      invoiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedTime]);

  return (
    <>
      <div className="row mx-0 mb-5">
        <p className="py-3 px-0 fw-bold m-0">SELECT DATE AND TIME</p>
        <div className="col-12 col-md-6 px-0">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setSelectedTime("");
            }}
            minDate={new Date()}
            maxDate={maxDate}
            inline
          />
        </div>

        <div className="col-12 col-md-6 px-0">
          <AvailableSlots
            selectedDate={selectedDate}
            salonId={salonId}
            serviceId={selectedService?.service_id}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>
      </div>

      {selectedTime && (
        <div ref={invoiceRef} className="invoice-container card mb-5 rounded-1">
          <div className="theme-bg-color rounded-1">
            <h3 className="text-center p-2 m-0">Invoice</h3>
            <h5 className="px-3 m-0">{salonData[0].salon_name}</h5>
            <p className="px-3">
              Appointment on: {selectedTime} {formattedDate}
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
                  <td>{selectedService?.service_name}</td>
                  <td>{selectedService?.duration} mins</td>
                  <td>{selectedService?.price} Rs</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="2"
                    className="text-right theme-color fw-bold"
                    style={{ color: "#00aeb7" }}
                  >
                    Total Price
                  </td>
                  <td className="fw-bold" style={{ color: "#00aeb7" }}>
                    {selectedService?.price}Rs
                  </td>
                </tr>
                <i>*Including taxes: {selectedService?.price * 0.05}Rs</i>
              </tfoot>
            </table>
          </div>
          <div className="text-center p-3">
            <Link className="theme-bg-color p-2 rounded-1">BOOK NOW</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DateTimeComp;
