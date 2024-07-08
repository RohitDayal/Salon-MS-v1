const { getConnection } = require("../models/db");

const timeSlots = {
  slot1: "09:00 AM",
  slot2: "09:30 AM",
  slot3: "10:00 AM",
  slot4: "10:30 AM",
  slot5: "11:00 AM",
  slot6: "11:30 AM",
  slot7: "12:00 PM",
  slot8: "01:00 PM",
  slot9: "01:30 PM",
  slot10: "02:00 PM",
  slot11: "02:30 PM",
  slot12: "03:00 PM",
  slot13: "03:30 PM",
  slot14: "04:00 PM",
  slot15: "04:30 PM",
  slot16: "05:00 PM",
  slot17: "05:30 PM",
  slot18: "06:00 PM",
  slot19: "06:30 PM",
  slot20: "07:00 PM",
  slot21: "07:30 PM",
  slot22: "08:00 PM",
  slot23: "08:30 PM",
  slot24: "09:00 PM",
};

// Function to get available time slots for a salon on a specific date
const getTimeSlots = async (req, res) => {
  const { salonId } = req.params;
  const { date } = req.query;
  console.log(salonId, date);
  try {
    const connection = await getConnection();

    // Check if the entry for the given salonId and date exists
    const [existingEntry] = await connection.query(
      "SELECT * FROM salon_time_slot WHERE salon_id = ? AND date = ?",
      [salonId, date]
    );

    if (existingEntry.length > 0) {
      // If entry exists, check for available slots
      const availableSlots = existingEntry[0];
      const slots = Object.keys(availableSlots).filter(
        (key) => key.startsWith("slot") && availableSlots[key] > 0
      );

      if (slots.length === 0) {
        // If all slots are booked, send a message to the user
        return res.status(200).json({
          message: "No slots are available for this date.",
        });
      }

      // Return available time slots to the user
      const availableTimes = slots.map((slot) => timeSlots[slot]);
      return res.status(200).json({
        slots: availableTimes,
      });
    } else {
      // If entry does not exist, insert a new entry with default slot values
      const defaultSlots = Object.keys(timeSlots).reduce((acc, key) => {
        acc[key] = 2; // Default value for each slot is 2
        return acc;
      }, {});
      // Return all time slots to the user
      const allSlots = Object.keys(timeSlots).map((slot) => timeSlots[slot]);
      return res.status(200).json({
        slots: allSlots,
      });
      
      await connection.query(
        `INSERT INTO salon_time_slot (salon_id, date, ${Object.keys(
          defaultSlots
        ).join(", ")}) 
         VALUES (?, ?, ${Object.values(defaultSlots)
           .map(() => "?")
           .join(", ")})`,
        [salonId, date, ...Object.values(defaultSlots)]
      );

      // Retrieve the newly inserted entry
      const [newEntry] = await connection.query(
        "SELECT * FROM salon_time_slot WHERE salon_id = ? AND date = ?",
        [salonId, date]
      );

      // Return all time slots to the user
      //   const allSlots = Object.keys(timeSlots).map((slot) => timeSlots[slot]);
      //   return res.status(200).json({
      //     slots: allSlots,
      //   });
    }
  } catch (error) {
    console.error("Error fetching time slots:", error);
    res.status(500).json({
      message: "Server error while fetching time slots.",
    });
  }
};

module.exports = {
  getTimeSlots,
};
