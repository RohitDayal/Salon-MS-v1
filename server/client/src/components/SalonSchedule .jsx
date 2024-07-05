import React from "react";

const SalonSchedule = () => {
  return (
    <>
      <div className="container  px-2 px-md-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="text-danger">TIME SCHEDULE</p>
            <h1 className="py-2">Working Hours</h1>
            <p className="text-dark" style={{ lineHeight: "1.8rem" }}>
              Nemo ipsam egestas volute turpis varius ipsum egestas purus diam
              ligula sapien ultrice sapien tempor aliquam tortor ipsum and augue
              turpis quaerat aliquet congue and molestie magna in congue undo
              aliquet congue ultrices quaerat
            </p>
          </div>
          <div className="col-12 col-md-6 ">
            <table className="table table-hover">
              <tbody>
                <tr style={{ height: "72px" }}>
                  <td>Mon - Wed</td>
                  <td>-</td>
                  <td className="text-end">
                    <strong>10:00 AM - 9:00 PM</strong>
                  </td>
                </tr>
                <tr style={{ height: "72px" }}>
                  <td>Thursday</td>
                  <td>-</td>
                  <td className="text-end">
                    <strong>10:00 AM - 7:30 PM</strong>
                  </td>
                </tr>
                <tr style={{ height: "72px" }}>
                  {/* <td colspan="2">Larry the Bird</td> */}
                  <td>Friday</td>
                  <td>-</td>
                  <td className="text-end">
                    <strong>10:00 AM - 9:00 PM</strong>
                  </td>
                </tr>
                <tr style={{ height: "72px" }}>
                  {/* <td colspan="2">Larry the Bird</td> */}
                  <td>Sun - Sun</td>
                  <td>-</td>
                  <td className="text-end">
                    <strong>10:00 AM - 5:00 PM</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalonSchedule;
