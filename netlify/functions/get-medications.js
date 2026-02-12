exports.handler = async function(event, context) {

  const medications = {
    "H2001": [
      { medication: "Lisinopril", dosage: "20mg", refillsRemaining: 2 },
      { medication: "Metformin", dosage: "500mg", refillsRemaining: 1 }
    ],
    "H2002": [
      { medication: "Atorvastatin", dosage: "10mg", refillsRemaining: 3 }
    ],
    "H2003": [
      { medication: "Albuterol", dosage: "2 puffs as needed", refillsRemaining: 0 }
    ],
    "H2004": [
      { medication: "Levothyroxine", dosage: "75mcg", refillsRemaining: 2 },
      { medication: "Amlodipine", dosage: "5mg", refillsRemaining: 4 }
    ]
  };

  const memberId = event.queryStringParameters.memberId;

  const memberMeds = medications[memberId];

  if (!memberMeds) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "No medications found" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(memberMeds)
  };
};
