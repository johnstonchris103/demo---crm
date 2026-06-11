const slots = {
  S9001: {
    appointment_date: "2026-06-15",
    appointment_time: "09:00",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9002: {
    appointment_date: "2026-06-15",
    appointment_time: "13:30",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9003: {
    appointment_date: "2026-06-15",
    appointment_time: "17:00",
    therapist_name: "Dr. Marcus Chen",
    modality: "In-Person",
    status: "Scheduled"
  },
  S9004: {
    appointment_date: "2026-06-16",
    appointment_time: "08:30",
    therapist_name: "Dr. Priya Patel",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9005: {
    appointment_date: "2026-06-16",
    appointment_time: "11:00",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9006: {
    appointment_date: "2026-06-16",
    appointment_time: "15:30",
    therapist_name: "Dr. Marcus Chen",
    modality: "In-Person",
    status: "Scheduled"
  },
  S9007: {
    appointment_date: "2026-06-17",
    appointment_time: "09:30",
    therapist_name: "Dr. Priya Patel",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9008: {
    appointment_date: "2026-06-17",
    appointment_time: "14:00",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9009: {
    appointment_date: "2026-06-17",
    appointment_time: "18:00",
    therapist_name: "Dr. Marcus Chen",
    modality: "In-Person",
    status: "Scheduled"
  },
  S9010: {
    appointment_date: "2026-06-18",
    appointment_time: "10:00",
    therapist_name: "Dr. Priya Patel",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9011: {
    appointment_date: "2026-06-18",
    appointment_time: "12:30",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9012: {
    appointment_date: "2026-06-18",
    appointment_time: "16:30",
    therapist_name: "Dr. Marcus Chen",
    modality: "In-Person",
    status: "Scheduled"
  },
  S9013: {
    appointment_date: "2026-06-19",
    appointment_time: "09:00",
    therapist_name: "Dr. Priya Patel",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9014: {
    appointment_date: "2026-06-19",
    appointment_time: "15:00",
    therapist_name: "Dr. Elena Rivera",
    modality: "Telehealth",
    status: "Scheduled"
  },
  S9015: {
    appointment_date: "2026-06-19",
    appointment_time: "19:00",
    therapist_name: "Dr. Marcus Chen",
    modality: "In-Person",
    status: "Scheduled"
  }
};

exports.handler = async function (event) {
  try {
    const rawBody =
      typeof event.body === "string"
        ? JSON.parse(event.body || "{}")
        : event.body || {};

    const { patient_id, slot_id } = rawBody;

    if (!patient_id || !slot_id) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: "Missing required fields: patient_id, slot_id"
        })
      };
    }

    const slot = slots[slot_id];

    if (!slot) {
      return {
        statusCode: 404,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: `Slot not found: ${slot_id}`
        })
      };
    }

    const appointmentId = `A${Date.now()}`;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        message: "Appointment created successfully",
        appointment_id: appointmentId,
        appointment_date: slot.appointment_date,
        appointment_time: slot.appointment_time,
        therapist_name: slot.therapist_name,
        modality: slot.modality,
        status: slot.status
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
        message: "Unexpected server error while creating appointment",
        error: error.message
      })
    };
  }
};
