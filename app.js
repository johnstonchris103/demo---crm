const members = [
  {
    memberId: "H2001",
    name: "Daniel Carter",
    gender: "male",
    phone: "7735550198",
    address: "842 Lake Shore Dr, Chicago IL",
    dob: "1982-03-14",
    prescriptions: [
      { medication: "Lisinopril", dosage: "20mg", refillsRemaining: 2 },
      { medication: "Metformin", dosage: "500mg", refillsRemaining: 1 }
    ]
  },
  {
    memberId: "H2002",
    name: "Elena Martinez",
    gender: "female",
    phone: "3125550221",
    address: "1550 W Addison St, Chicago IL",
    dob: "1975-11-02",
    prescriptions: [
      { medication: "Atorvastatin", dosage: "10mg", refillsRemaining: 3 }
    ]
  },
  {
    memberId: "H2003",
    name: "Marcus Bennett",
    gender: "male",
    phone: "7085550144",
    address: "3300 Oak Park Ave, Oak Park IL",
    dob: "1991-07-19",
    prescriptions: [
      { medication: "Albuterol", dosage: "2 puffs as needed", refillsRemaining: 0 }
    ]
  },
  {
    memberId: "H2004",
    name: "Sophia Reynolds",
    gender: "female",
    phone: "8475550117",
    address: "901 Green Bay Rd, Evanston IL",
    dob: "1968-12-05",
    prescriptions: [
      { medication: "Levothyroxine", dosage: "75mcg", refillsRemaining: 2 },
      { medication: "Amlodipine", dosage: "5mg", refillsRemaining: 4 }
    ]
  }
];

const facilities = [
  {
    facilityId: "F1001",
    zipCode: "30305",
    franchiseName: "Ideal Dental Buckhead",
    serviceArea: "Buckhead / Atlanta, GA",
    timezone: "America/New_York",
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
    facilityId: "F1002",
    zipCode: "28078",
    franchiseName: "Ideal Dental Huntersville",
    serviceArea: "Huntersville, NC",
    timezone: "America/New_York",
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
    facilityId: "F1003",
    zipCode: "37064",
    franchiseName: "Ideal Dental Franklin",
    serviceArea: "Franklin, TN",
    timezone: "America/Chicago",
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

const memberList = document.getElementById("memberList");
const memberDetails = document.getElementById("memberDetails");

function renderMembers() {
  memberList.innerHTML = "";

  members.forEach(member => {
    const div = document.createElement("div");
    div.className = "member";
    div.innerText = member.name;
    div.onclick = () => showMember(member.memberId);
    memberList.appendChild(div);
  });

  const facilityButton = document.createElement("div");
  facilityButton.className = "member";
  facilityButton.style.marginTop = "30px";
  facilityButton.style.background = "#2f6fb2";
  facilityButton.innerText = "Facility Lookup";
  facilityButton.onclick = () => showFacilities();

  memberList.appendChild(facilityButton);
}

function showHome() {
  memberDetails.innerHTML = `
    <h2>Select a patient</h2>
  `;
}

function getAvatar(gender) {
  if (gender === "female") {
    return "https://cdn-icons-png.flaticon.com/512/2922/2922561.png";
  } else {
    return "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
  }
}

function showMember(memberId) {

  const member = members.find(m => m.memberId === memberId);

  if (!member) return;

  let rxHtml = "";

  member.prescriptions.forEach(rx => {

    let refillColor = "#000";

    if (rx.refillsRemaining === 0) {
      refillColor = "red";
    }

    rxHtml += `
      <div class="prescription-card">
        <strong>${rx.medication}</strong><br/>
        Dosage: ${rx.dosage}<br/>
        <span style="color:${refillColor}">
          Refills Remaining: ${rx.refillsRemaining}
        </span>
      </div>
    `;
  });

  memberDetails.innerHTML = `
    <button onclick="showHome()" 
      style="
        margin-bottom:15px;
        background:#2f6fb2;
        color:white;
        border:none;
        padding:8px 12px;
        border-radius:6px;
        cursor:pointer;
      ">
      ← Back
    </button>

    <div style="display:flex; align-items:center; margin-bottom:15px;">
      <img src="${getAvatar(member.gender)}" 
           style="width:80px; height:80px; border-radius:50%; margin-right:15px;" />
      <div>
        <h2 style="margin:0;">${member.name}</h2>
        <div>MRN: ${member.memberId}</div>
      </div>
    </div>

    <div class="section">
      <h3>Patient Info</h3>

      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Date of Birth:</strong> ${member.dob}</p>
    </div>

    <div class="section">
      <h3>Active Medications</h3>
      ${rxHtml}
    </div>
  `;
}

function showFacilities() {

  let facilityHtml = `
    <button onclick="showHome()" 
      style="
        margin-bottom:20px;
        background:#2f6fb2;
        color:white;
        border:none;
        padding:8px 12px;
        border-radius:6px;
        cursor:pointer;
      ">
      ← Back
    </button>

    <h2>Facility Lookup</h2>
  `;

  facilities.forEach(facility => {

    facilityHtml += `
      <div 
        onclick="showFacilityDetails('${facility.facilityId}')"
        style="
          background:white;
          border:1px solid #d5dbe6;
          border-radius:6px;
          padding:12px;
          margin-bottom:10px;
          cursor:pointer;
        "
      >
        <strong>${facility.franchiseName}</strong><br/>
        ${facility.serviceArea}<br/>
        ZIP: ${facility.zipCode}
      </div>
    `;
  });

  memberDetails.innerHTML = facilityHtml;
}

function showFacilityDetails(facilityId) {

  const facility = facilities.find(f => f.facilityId === facilityId);

  if (!facility) return;

  memberDetails.innerHTML = `
    <button onclick="showFacilities()" 
      style="
        margin-bottom:20px;
        background:#2f6fb2;
        color:white;
        border:none;
        padding:8px 12px;
        border-radius:6px;
        cursor:pointer;
      ">
      ← Back to Facilities
    </button>

    <div class="section">
      <h2>${facility.franchiseName}</h2>

      <p><strong>ZIP Code:</strong> ${facility.zipCode}</p>
      <p><strong>Service Area:</strong> ${facility.serviceArea}</p>
      <p><strong>Timezone:</strong> ${facility.timezone}</p>
      <p><strong>Business Hours:</strong> ${facility.businessHours.open} - ${facility.businessHours.close}</p>
      <p><strong>Days:</strong> ${facility.businessHours.days.join(", ")}</p>
      <p><strong>Local Number:</strong> ${facility.localPhoneNumber}</p>
      <p><strong>Primary Queue:</strong> ${facility.primarySalesQueue}</p>
      <p><strong>Transfer Number:</strong> ${facility.franchiseTransferNumber}</p>
    </div>
  `;
}

renderMembers();
showHome();
