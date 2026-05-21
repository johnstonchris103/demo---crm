exports.handler = async function(event) {
  const facilities = [
    {
      franchiseId: "FR-GA-BUCKHEAD",
      zipCode: "30305",
      franchiseName: "Home Matters Caregiving - Buckhead / Atlanta",
      serviceArea: "Buckhead / Atlanta, GA",
      timezone: "America/New_York",
      businessHoursStatus: "Open",
      businessHours: {
        open: "09:00",
        close: "18:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      localPhoneNumber: "+14045550100",
      primarySalesQueue: "Chris - Inbound Queue",
      franchiseTransferNumber: "+14045550101"
    },
    {
      franchiseId: "FR-NC-HUNTERSVILLE",
      zipCode: "28078",
      franchiseName: "Home Matters Caregiving - Huntersville",
      serviceArea: "Huntersville, NC",
      timezone: "America/New_York",
      businessHoursStatus: "Closed",
      businessHours: {
        open: "09:00",
        close: "18:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      localPhoneNumber: "+17045550200",
      primarySalesQueue: "Chris - Inbound Queue",
      franchiseTransferNumber: "+17045550201"
    },
    {
      franchiseId: "FR-TN-FRANKLIN",
      zipCode: "37064",
      franchiseName: "Home Matters Caregiving - Franklin",
      serviceArea: "Franklin, TN",
      timezone: "America/Chicago",
      businessHoursStatus: "Open",
      businessHours: {
        open: "09:00",
        close: "18:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      localPhoneNumber: "+16155550300",
      primarySalesQueue: "Chris - Inbound Queue",
      franchiseTransferNumber: "+16155550301"
    }
  ];

  const zipCode = event.queryStringParameters?.zipCode;

  if (!zipCode) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "zipCode is required" })
    };
  }

  const facility = facilities.find(f => f.zipCode === zipCode);

  if (!facility) {
    return {
      statusCode: 404,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Facility not found" })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(facility)
  };
};
