const data = require("./data-store");

exports.handler = async function(event, context) {

  const memberId = event.queryStringParameters?.memberId;

  const memberMeds = data.medications[memberId];

  if (!memberMeds) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "No medications found" })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(memberMeds)
  };
};
