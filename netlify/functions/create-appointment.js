exports.handler = async function (event) {
  try {
    console.log("RAW EVENT BODY:", event.body);

    const rawBody =
      typeof event.body === "string"
        ? JSON.parse(event.body || "{}")
        : event.body || {};

    console.log("PARSED BODY:", rawBody);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        success: true,
        message: "Debug success",
        received: rawBody
      })
    };
  } catch (error) {
    console.error("CREATE APPOINTMENT ERROR:", error);

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
