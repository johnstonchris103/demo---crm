exports.handler = async function(event, context) {

  const members = [
    { memberId: "H2001", name: "Daniel Carter", phone: "773-555-0198" },
    { memberId: "H2002", name: "Elena Martinez", phone: "312-555-0221" },
    { memberId: "H2003", name: "Marcus Bennett", phone: "708-555-0144" },
    { memberId: "H2004", name: "Sophia Reynolds", phone: "847-555-0117" }
  ];

  const memberId = event.queryStringParameters.memberId;

  const member = members.find(m => m.memberId === memberId);

  if (!member) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Member not found" })
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(member)
  };
};
