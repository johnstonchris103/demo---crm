exports.handler = async function (event) {
  try {
    const query = event.queryStringParameters || {};

    const startDate = query.startDate || query.start_date || "2026-06-15";
    const endDate = query.endDate || query.end_date || "2026-06-19";
    const preferredTime = query.preferredTime || query.preferred_time || null;
    const therapistId = query.therapistId || query.therapist_id || null;
    const location = query.location || null;
    const modality = query.modality || null;

    const availability = [
      {
        slotId: "S9001",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-15",
        time: "09:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9002",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-15",
        time: "13:30",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9003",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        date: "2026-06-15",
        time: "17:00",
        durationMinutes: 50,
        location: "Yonkers",
        modality: "In-Person",
        available: true
      },
      {
        slotId: "S9004",
        therapistId: "T2003",
        therapistName: "Dr. Priya Patel",
        date: "2026-06-16",
        time: "08:30",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9005",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-16",
        time: "11:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9006",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        date: "2026-06-16",
        time: "15:30",
        durationMinutes: 50,
        location: "Yonkers",
        modality: "In-Person",
        available: true
      },
      {
        slotId: "S9007",
        therapistId: "T2003",
        therapistName: "Dr. Priya Patel",
        date: "2026-06-17",
        time: "09:30",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9008",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-17",
        time: "14:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9009",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        date: "2026-06-17",
        time: "18:00",
        durationMinutes: 50,
        location: "Yonkers",
        modality: "In-Person",
        available: true
      },
      {
        slotId: "S9010",
        therapistId: "T2003",
        therapistName: "Dr. Priya Patel",
        date: "2026-06-18",
        time: "10:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9011",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-18",
        time: "12:30",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9012",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        date: "2026-06-18",
        time: "16:30",
        durationMinutes: 50,
        location: "Yonkers",
        modality: "In-Person",
        available: true
      },
      {
        slotId: "S9013",
        therapistId: "T2003",
        therapistName: "Dr. Priya Patel",
        date: "2026-06-19",
        time: "09:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9014",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        date: "2026-06-19",
        time: "15:00",
        durationMinutes: 50,
        location: "Bronx",
        modality: "Telehealth",
        available: true
      },
      {
        slotId: "S9015",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        date: "2026-06-19",
        time: "19:00",
        durationMinutes: 50,
        location: "Yonkers",
        modality: "In-Person",
        available: true
      }
    ];

    let filteredAvailability = availability.filter((slot) => {
      return (
        slot.date >= startDate &&
        slot.date <= endDate &&
        (therapistId ? slot.therapistId === therapistId : true) &&
        (location ? slot.location.toLowerCase() === location.toLowerCase() : true) &&
        (modality ? slot.modality.toLowerCase() === modality.toLowerCase() : true)
      );
    });

    if (preferredTime) {
      filteredAvailability = filteredAvailability.sort((a, b) => {
        const aMatch = a.time >= preferredTime ? 0 : 1;
        const bMatch = b.time >= preferredTime ? 0 : 1;
        return aMatch - bMatch || a.time.localeCompare(b.time);
      });
    } else {
      filteredAvailability = filteredAvailability.sort((a, b) => {
        return `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`);
      });
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        message: filteredAvailability.length
          ? "Available appointments retrieved successfully"
          : "No available appointments found",
        totalAvailableSlots: filteredAvailability.length,
        availableAppointments: filteredAvailability
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: false,
        message: "Unexpected server error while retrieving availability",
        totalAvailableSlots: 0,
        availableAppointments: [],
        error: error.message
      })
    };
  }
};
