```javascript
exports.handler = async function (event) {
  try {
    const rawBody =
      typeof event.body === "string"
        ? JSON.parse(event.body || "{}")
        : event.body || {};

    const {
      patientId,
      patientName,
      therapistId,
      therapistName,
      appointmentDate,
      appointmentTime,
      modality,
      location
    } = rawBody;

    const missingFields = [];

    if (!patientId) missingFields.push("patientId");
    if (!therapistId) missingFields.push("therapistId");
    if (!therapistName) missingFields.push("therapistName");
    if (!appointmentDate) missingFields.push("appointmentDate");
    if (!appointmentTime) missingFields.push("appointmentTime");
    if (!modality) missingFields.push("modality");
    if (!location) missingFields.push("location");

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`
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
        appointmentId,
        therapistName,
        appointmentDate,
        appointmentTime,
        modality
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
        message: "Unexpected server error while creating appointment"
      })
    };
  }
};
```
