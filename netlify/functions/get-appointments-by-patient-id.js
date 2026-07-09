exports.handler = async function (event) {
  try {
    const patientId =
      event.queryStringParameters?.patientId?.trim() ||
      event.queryStringParameters?.patient_id?.trim();

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
          appointments: [],
          hasPriorHistory: false,
          lastLevelOfCare: null,
          lastLocation: null,
          lastVisitDate: null,
          previousAppointments: []
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
            location: "Savannah",
            levelOfCare: "Outpatient Counseling",
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
            location: "Scottsdale",
            levelOfCare: "Medication Management (MAT)",
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
            location: "Savannah",
            levelOfCare: "Outpatient Counseling",
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
        appointments: [
          {
            appointmentId: "A5010",
            patientId: "P1005",
            therapistId: "T2001",
            therapistName: "Dr. Elena Rivera",
            appointmentDate: "2025-06-10",
            appointmentTime: "10:00",
            location: "Savannah",
            levelOfCare: "Outpatient Counseling",
            status: "Completed",
            appointmentType: "Counseling Session",
            reason: "Outpatient recovery support"
          },
          {
            appointmentId: "A5011",
            patientId: "P1005",
            therapistId: "T2001",
            therapistName: "Dr. Elena Rivera",
            appointmentDate: "2025-08-19",
            appointmentTime: "11:00",
            location: "Savannah",
            levelOfCare: "Outpatient Counseling",
            status: "Completed",
            appointmentType: "Counseling Session",
            reason: "Outpatient recovery support"
          }
        ]
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
          totalAppointments: 0,
          hasPriorHistory: false,
          lastLevelOfCare: null,
          lastLocation: null,
          lastVisitDate: null,
          previousAppointments: []
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

    const completedAppointments = appointments.filter(
      appt => appt.status === "Completed"
    );

    const mostRecentCompleted = completedAppointments.length
      ? completedAppointments[completedAppointments.length - 1]
      : null;

    const previousAppointments = completedAppointments.map(appt => ({
      appointmentDate: appt.appointmentDate,
      levelOfCare: appt.levelOfCare,
      location: appt.location
    }));

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
        upcomingAppointmentsCount: upcomingAppointments.length,
        hasPriorHistory: !!mostRecentCompleted,
        lastLevelOfCare: mostRecentCompleted ? mostRecentCompleted.levelOfCare : null,
        lastLocation: mostRecentCompleted ? mostRecentCompleted.location : null,
        lastVisitDate: mostRecentCompleted ? mostRecentCompleted.appointmentDate : null,
        previousAppointments
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
        hasPriorHistory: false,
        lastLevelOfCare: null,
        lastLocation: null,
        lastVisitDate: null,
        previousAppointments: [],
        error: error.message
      })
    };
  }
};
