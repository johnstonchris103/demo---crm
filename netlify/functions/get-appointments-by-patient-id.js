exports.handler = async function (event) {
  try {
    const patientId = event.queryStringParameters?.patientId?.trim();

    if (!patientId) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: "patientId is required",
          patientId: null,
          appointments: []
        })
      };
    }

    const patients = [
      {
        patientId: "P1001",
        firstName: "Maria",
        lastName: "Lopez",
        name: "Maria Lopez",
        appointments: [
          {
            appointmentId: "A5001",
            patientId: "P1001",
            therapistId: "T2001",
            therapistName: "Dr. Elena Rivera",
            appointmentDate: "2026-06-12",
            appointmentTime: "15:00",
            durationMinutes: 50,
            modality: "Telehealth",
            location: "Bronx",
            status: "Scheduled",
            appointmentType: "Therapy Session",
            reason: "Anxiety follow-up"
          }
        ]
      },
      {
        patientId: "P1002",
        firstName: "Jasmine",
        lastName: "Carter",
        name: "Jasmine Carter",
        appointments: [
          {
            appointmentId: "A5003",
            patientId: "P1002",
            therapistId: "T2002",
            therapistName: "Dr. Marcus Chen",
            appointmentDate: "2026-06-16",
            appointmentTime: "14:30",
            durationMinutes: 50,
            modality: "In-Person",
            location: "Yonkers",
            status: "Scheduled",
            appointmentType: "Intake Assessment",
            reason: "New treatment planning"
          }
        ]
      },
      {
        patientId: "P1003",
        firstName: "Andre",
        lastName: "Mitchell",
        name: "Andre Mitchell",
        appointments: []
      },
      {
        patientId: "P1004",
        firstName: "Sophia",
        lastName: "Reynolds",
        name: "Sophia Reynolds",
        appointments: [
          {
            appointmentId: "A5004",
            patientId: "P1004",
            therapistId: "T2001",
            therapistName: "Dr. Elena Rivera",
            appointmentDate: "2026-06-18",
            appointmentTime: "09:00",
            durationMinutes: 50,
            modality: "Telehealth",
            location: "Bronx",
            status: "Scheduled",
            appointmentType: "Therapy Session",
            reason: "Stress management"
          }
        ]
      },
      {
        patientId: "P1005",
        firstName: "Tucker",
        lastName: "Fredrickson",
        name: "Tucker Fredrickson",
        appointments: []
      }
    ];

    const patient = patients.find(
      p => p.patientId.toLowerCase() === patientId.toLowerCase()
    );

    if (!patient) {
      return {
        statusCode: 404,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: "Patient not found",
          patientId,
          patientName: null,
          appointments: [],
          totalAppointments: 0
        })
      };
    }

    const appointments = [...patient.appointments].sort((a, b) => {
      const aValue = `${a.appointmentDate}T${a.appointmentTime}`;
      const bValue = `${b.appointmentDate}T${b.appointmentTime}`;
      return aValue.localeCompare(bValue);
    });

    const upcomingAppointments = appointments.filter(
      appt => appt.status === "Scheduled"
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        message: appointments.length
          ? "Appointments retrieved successfully"
          : "No appointments found for this patient",
        patientId: patient.patientId,
        patientName: patient.name,
        appointments,
        totalAppointments: appointments.length,
        upcomingAppointmentsCount: upcomingAppointments.length
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
        message: "Unexpected server error",
        patientId: null,
        appointments: [],
        error: error.message
      })
    };
  }
};
