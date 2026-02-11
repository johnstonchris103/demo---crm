const members = [
  {
    memberId: "H2001",
    name: "Daniel Carter",
    gender: "male",
    phone: "773-555-0198",
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
    phone: "312-555-0221",
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
    phone: "708-555-0144",
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
    phone: "847-555-0117",
    address: "901 Green Bay Rd, Evanston IL",
    dob: "1968-12-05",
    prescriptions: [
      { medication: "Levothyroxine", dosage: "75mcg", refillsRemaining: 2 },
      { medication: "Amlodipine", dosage: "5mg", refillsRemaining: 4 }
    ]
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
}

function showHome() {
  memberDetails.innerHTML = "<h2>Select a patient</h2>";
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
    rxHtml += `
      <div class="prescription-card">
        <strong>${rx.medication}</strong><br/>
        Dosage: ${rx.dosage}<br/>
        Refills Remaining: ${rx.refillsRemaining}
      </div>
    `;
  });

  memberDetails.innerHTML = `
    <button onclick="showHome()" style="margin-bottom:15px;">
      ← Back to Patient List
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
      Phone:<br/>
      <input value="${member.phone}" /><br/>
      Address:<br/>
      <input value="${member.address}" /><br/>
      DOB:<br/>
      <input value="${member.dob}" />
    </div>

    <div class="section">
      <h3>Active Medications</h3>
      ${rxHtml}
    </div>
  `;
}

renderMembers();
