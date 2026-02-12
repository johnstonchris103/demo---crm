exports.handler = async function(event, context) {

  const body = JSON.parse(event.body);

  if (!body.memberId || !body.medication) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "success",
      message: `Medication ${body.medication} updated for member ${body.memberId}`
    })
  };
};
