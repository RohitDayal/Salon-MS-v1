// import React, { useState, useEffect, useRef, useContext } from "react";
// import { UserContext } from "../context/UserContext";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import "../Temp/Invoice.css";
// import { Link } from "react-router-dom";

// const AvailableSlots = ({
//   selectedDate,
//   salonId,
//   serviceId,
//   selectedTime,
//   setSelectedTime,
// }) => {
//   const [timeSlots, setTimeSlots] = useState([]);

//   useEffect(() => {
//     if (selectedDate) {
//       const fetchTimeSlots = async () => {
//         try {
//           const response = await fetch(
//             `/api/salon/booking/timeslots/${salonId}?date=${format(
//               selectedDate,
//               "yyyy-MM-dd"
//             )}`
//           );
//           const data = await response.json();
//           setTimeSlots(data.slots);
//           console.log(data.slots);
//         } catch (error) {
//           console.error("Error fetching time slots:", error);
//         }
//       };

//       fetchTimeSlots();
//     }
//   }, [selectedDate, salonId, serviceId]);

//   return (
//     <div>
//       {selectedDate && (
//         <div>
//           <div className="date-header">
//             <p className="mb-0">{format(selectedDate, "EEE, dd MMM yyyy")}</p>
//           </div>
//           <div className="time-slots">
//             {timeSlots?.length > 0 ? (
//               timeSlots.map((slot) => (
//                 <div
//                   key={slot}
//                   className="form-check py-1 border-bottom border-1"
//                   onClick={() => {
//                     setSelectedTime(slot);
//                   }}
//                 >
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="timeslot"
//                     id={slot}
//                     checked={selectedTime === slot}
//                     onChange={() => setSelectedTime(slot)}
//                   />
//                   <label
//                     className="form-check-label fw-lighter d-block"
//                     htmlFor={slot}
//                   >
//                     {slot}
//                   </label>
//                 </div>
//               ))
//             ) : (
//               <p>No available time slots</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const DateTimeComp = ({ salonId, selectedService, salonData }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const { userInfo } = useContext(UserContext);

//   const invoiceRef = useRef(null);

//   const maxDate = new Date();
//   maxDate.setMonth(maxDate.getMonth() + 2);

//   // Format the date to a readable string
//   const formattedDate = format(selectedDate, "EEE, dd MMM yyyy");

//   useEffect(() => {
//     if (selectedTime) {
//       invoiceRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [selectedTime]);
//   //payment section
//   const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const displayRazorpay = async () => {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     // Fetch order from backend
//     const data = await fetch("http://localhost:5000/razorpay", {
//       method: "POST",
//     }).then((t) => t.json());

//     const options = {
//       key: "rzp_test_ckSYAx32pq1y0r", // Enter the Key ID generated from the Dashboard
//       amount: data.amount.toString(),
//       currency: data.currency,
//       name: "saLoon",
//       description: "Test Transaction",
//       image: "/android-chrome-192x192.png",
//       order_id: data.id,
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: userInfo.Name,
//         email: userInfo.Email,
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#00aeb7",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };
//   return (
//     <>
//       <div className="row mx-0 mb-5">
//         <p className="py-3 px-0 fw-bold m-0">SELECT DATE AND TIME</p>
//         <div className="col-12 col-md-6 px-0">
//           <DatePicker
//             selected={selectedDate}
//             onChange={(date) => {
//               setSelectedDate(date);
//               setSelectedTime("");
//             }}
//             minDate={new Date()}
//             maxDate={maxDate}
//             inline
//           />
//         </div>

//         <div className="col-12 col-md-6 px-0">
//           <AvailableSlots
//             selectedDate={selectedDate}
//             salonId={salonId}
//             serviceId={selectedService?.service_id}
//             selectedTime={selectedTime}
//             setSelectedTime={setSelectedTime}
//           />
//         </div>
//       </div>

//       {selectedTime && (
//         <div ref={invoiceRef} className="invoice-container card mb-5 rounded-1">
//           <div className="theme-bg-color rounded-1">
//             <h3 className="text-center p-2 m-0">Invoice</h3>
//             <h5 className="px-3 m-0">{salonData[0].salon_name}</h5>
//             <p className="px-3">
//               Appointment on: {selectedTime} {formattedDate}
//             </p>
//           </div>
//           <div className="card-body">
//             <table className="table table-bordered">
//               <thead>
//                 <tr>
//                   <th>Service Name</th>
//                   <th>Duration</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{selectedService?.service_name}</td>
//                   <td>{selectedService?.duration} mins</td>
//                   <td>{selectedService?.price} Rs</td>
//                 </tr>
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td
//                     colSpan="2"
//                     className="text-right theme-color fw-bold"
//                     style={{ color: "#00aeb7" }}
//                   >
//                     Total Price
//                   </td>
//                   <td className="fw-bold" style={{ color: "#00aeb7" }}>
//                     {selectedService?.price}Rs
//                   </td>
//                 </tr>
//                 <i>*Including taxes: {selectedService?.price * 0.05}Rs</i>
//               </tfoot>
//             </table>
//           </div>
//           <div className="text-center p-3">
//             <Link
//               onClick={displayRazorpay}
//               className="theme-bg-color p-2 rounded-1"
//             >
//               BOOK NOW
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DateTimeComp;

import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "../Temp/Invoice.css";
import { toast } from "react-toastify";

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
  const { userInfo } = useContext(UserContext);
  const token = localStorage.getItem("token");

  const invoiceRef = useRef(null);

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  const formattedDate = format(selectedDate, "EEE, dd MMM yyyy");

  useEffect(() => {
    if (selectedTime) {
      invoiceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedTime]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const amount = selectedService?.price;

    // Fetch order from backend
    const data = await fetch("/api/payment/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        userId: userInfo.UserID,
        userEmail: userInfo.Email,
        salonId: salonId,
        serviceId: selectedService.service_id,
        appointmentDate: format(selectedDate, "yyyy-MM-dd"),
      }),
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_ckSYAx32pq1y0r",
      amount: data.amount.toString(),
      currency: data.currency,
      name: "saLoon",
      description: "Test Transaction",
      image: "/android-chrome-192x192.png",
      order_id: data.id,
      handler: async function (response) {
        const verificationData = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          details: {
            userEmail: userInfo?.Email,
            userFullName: userInfo?.Name,
            salonName: salonData[0]?.salon_name,
            serviceName: selectedService?.service_name,
            amount: selectedService?.price,
            serviceDuration: selectedService?.duration,
            appointmentDate: formattedDate,
            appointmentTime: selectedTime,
          },
        };

        const verifyResponse = await fetch("/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verificationData),
        }).then((res) => res.json());

        if (verifyResponse.message === "Payment verified") {
          toast.success("Your appointment confirmed", {
            position: "top-center",
            autoClose: 2000,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast.error("Payment verification failed", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      },
      prefill: {
        name: userInfo?.Name,
        email: userInfo?.Email,
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#00aeb7",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const navigate = useNavigate();
  const location = useLocation();
  const handleBookingClick = () => {
    if (!token || !userInfo) {
      toast.error("Please log in first!", {
        position: "top-left",
      });
      navigate("/login", { state: { from: location } });
    } else {
      displayRazorpay();
    }
  };
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
            <button
              onClick={handleBookingClick}
              className="theme-bg-color p-2 rounded-1 border-0"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DateTimeComp;
