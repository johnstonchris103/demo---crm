const data = require("./data-store");

exports.handler = async function(event, context) {

  const body = JSON.parse(event.body || "{}");

  const { memberId, medication, newRefillCount } = body;

  if (!memberId || !medication || newRefillCount === undefined) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Missing required fields" })
    };
  }

  const meds = data.medications[memberId];

  if (!meds) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Member not found" })
    };
  }

  const med = meds.find(m => m.medication === medication);

  if (!med) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Medication not found" })
    };
  }

  med.refillsRemaining = newRefillCount;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      updatedMedication: med
    })
  };
};
