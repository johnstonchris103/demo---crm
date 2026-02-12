exports.handler = async function(event, context) {

  const members = [
    { memberId: "H2001", name: "Daniel Carter", phone: "7735550198" },
    { memberId: "H2002", name: "Elena Martinez", phone: "3125550221" },
    { memberId: "H2003", name: "Marcus Bennett", phone: "7085550144" },
    { memberId: "H2004", name: "Sophia Reynolds", phone: "8475550117" }
  ];

  const phone = event.queryStringParameters?.phone;

  const member = members.find(m => m.phone === phone);

  if (!member) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Member not found" })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(member)
  };
};
