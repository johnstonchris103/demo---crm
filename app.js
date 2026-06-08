const locations = [
  {
    locationId: "L1001",
    locationName: "Footprints Mental Health Counseling - Bronx",
    city: "Bronx",
    state: "NY",
    timezone: "America/New_York",
    services: ["In-Person", "Telehealth", "Bilingual Care"],
    businessHours: {
      open: "06:00",
      close: "22:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    phoneNumber: "+19145550001",
    faxNumber: "+19145550002"
  },
  {
    locationId: "L1002",
    locationName: "Footprints Mental Health Counseling - Yonkers",
    city: "Yonkers",
    state: "NY",
    timezone: "America/New_York",
    services: ["In-Person", "Telehealth", "Bilingual Care"],
    businessHours: {
      open: "06:00",
      close: "22:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    phoneNumber: "+19145550003",
    faxNumber: "+19145550004"
  },
  {
    locationId: "L1003",
    locationName: "Footprints Mental Health Counseling - Telehealth",
    city: "Virtual",
    state: "Remote",
    timezone: "America/New_York",
    services: ["Telehealth", "Bilingual Care"],
    businessHours: {
      open: "06:00",
      close: "22:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    phoneNumber: "+19145550005",
    faxNumber: "+19145550006"
  }
];

const therapists = [
  {
    therapistId: "T2001",
    therapistName: "Dr. Elena Rivera",
    languages: ["English", "Spanish"],
    locations: ["Bronx", "Telehealth"],
    specialties: ["Adult Therapy", "Anxiety"],
    acceptingAppointments: true
  },
  {
    therapistId: "T2002",
    therapistName: "Dr. Marcus Chen",
    languages: ["English"],
    locations: ["Yonkers", "Telehealth"],
    specialties: ["Family Therapy", "Depression"],
    acceptingAppointments: true
  },
  {
    therapistId: "T2003",
    therapistName: "Dr. Priya Patel",
    languages: ["English", "Hindi"],
    locations: ["Bronx", "Telehealth"],
    specialties: ["Trauma", "Stress Management"],
    acceptingAppointments: true
  },
  {
    therapistId: "T2004",
    therapistName: "Dr. Jordan Wright",
    languages: ["English"],
    locations: ["Bronx", "Telehealth"],
    specialties: ["Teen Therapy", "Behavioral Health"],
    acceptingAppointments: false
  }
];

const patients = [
  {
    patientId: "P1001",
    firstName: "Maria",
    lastName: "Lopez",
    name: "Maria Lopez",
    gender: "female",
    phone: "+19145551212",
    address: "125 W 231st St, Bronx, NY",
    dob: "1988-04-14",
    preferredLanguage: "English",
    preferredLocation: "Bronx",
    preferredModality: "Telehealth",
    activePatientStatus: "Active",
    smsConsent: true,
    primaryTherapistId: "T2001",
    prescriptions: [
      { medication: "Sertraline", dosage: "50mg", refillsRemaining: 2 },
      { medication: "Hydroxyzine", dosage: "25mg", refillsRemaining: 1 }
    ],
    appointments: [
      {
        appointmentId: "A5001",
        patientId: "P1001",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        appointmentDate: "2026-06-12",
        appointmentTime: "15:00",
        durationMinutes: 50,
        modality: "Telehealth",
        location: "Bronx",
        status: "Scheduled",
        appointmentType: "Therapy Session",
        reason: "Anxiety follow-up"
      }
    ]
  },
  {
    patientId: "P1002",
    firstName: "Jasmine",
    lastName: "Carter",
    name: "Jasmine Carter",
    gender: "female",
    phone: "+19145551213",
    address: "44 Grand Concourse, Bronx, NY",
    dob: "1992-09-03",
    preferredLanguage: "English",
    preferredLocation: "Yonkers",
    preferredModality: "In-Person",
    activePatientStatus: "Active",
    smsConsent: true,
    primaryTherapistId: "T2002",
    prescriptions: [
      { medication: "Escitalopram", dosage: "10mg", refillsRemaining: 3 }
    ],
    appointments: [
      {
        appointmentId: "A5003",
        patientId: "P1002",
        therapistId: "T2002",
        therapistName: "Dr. Marcus Chen",
        appointmentDate: "2026-06-16",
        appointmentTime: "14:30",
        durationMinutes: 50,
        modality: "In-Person",
        location: "Yonkers",
        status: "Scheduled",
        appointmentType: "Intake Assessment",
        reason: "New treatment planning"
      }
    ]
  },
  {
    patientId: "P1003",
    firstName: "Andre",
    lastName: "Mitchell",
    name: "Andre Mitchell",
    gender: "male",
    phone: "+19145551214",
    address: "201 E 149th St, Bronx, NY",
    dob: "1979-11-21",
    preferredLanguage: "English",
    preferredLocation: "Bronx",
    preferredModality: "Telehealth",
    activePatientStatus: "Active",
    smsConsent: false,
    primaryTherapistId: "T2003",
    prescriptions: [
      { medication: "Buspirone", dosage: "15mg", refillsRemaining: 1 },
      { medication: "Melatonin", dosage: "5mg", refillsRemaining: 4 }
    ],
    appointments: []
  },
  {
    patientId: "P1004",
    firstName: "Sophia",
    lastName: "Reynolds",
    name: "Sophia Reynolds",
    gender: "female",
    phone: "+19145551215",
    address: "88 Riverdale Ave, Bronx, NY",
    dob: "1985-02-08",
    preferredLanguage: "English",
    preferredLocation: "Bronx",
    preferredModality: "Telehealth",
    activePatientStatus: "Active",
    smsConsent: true,
    primaryTherapistId: "T2001",
    prescriptions: [
      { medication: "Fluoxetine", dosage: "20mg", refillsRemaining: 4 },
      { medication: "Propranolol", dosage: "10mg", refillsRemaining: 2 }
    ],
    appointments: [
      {
        appointmentId: "A5004",
        patientId: "P1004",
        therapistId: "T2001",
        therapistName: "Dr. Elena Rivera",
        appointmentDate: "2026-06-18",
        appointmentTime: "09:00",
        durationMinutes: 50,
        modality: "Telehealth",
        location: "Bronx",
        status: "Scheduled",
        appointmentType: "Therapy Session",
        reason: "Stress management"
      }
    ]
  },
  {
    patientId: "P1005",
    firstName: "Tucker",
    lastName: "Fredrickson",
    name: "Tucker Fredrickson",
    gender: "male",
    phone: "2566128087",
    address: "145 Oak Grove Drive, Huntsville, AL",
    dob: "1989-08-22",
    preferredLanguage: "English",
    preferredLocation: "Telehealth",
    preferredModality: "Telehealth",
    activePatientStatus: "Active",
    smsConsent: true,
    primaryTherapistId: "T2001",
    prescriptions: [
      { medication: "Sertraline", dosage: "50mg", refillsRemaining: 2 },
      { medication: "Hydroxyzine", dosage: "25mg", refillsRemaining: 1 }
    ],
    appointments: []
  }
];

const memberList = document.getElementById("memberList");
const memberDetails = document.getElementById("memberDetails");

function formatDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(utcDate);
}

function formatTime(time24) {
  const [hours, minutes] = time24.split(":").map(Number);
  const utcTime = new Date(Date.UTC(2000, 0, 1, hours, minutes));
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC"
  }).format(utcTime);
}

function getAvatar(gender) {
  if (gender === "female") {
    return "https://cdn-icons-png.flaticon.com/512/2922/2922561.png";
  }
  return "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
}

function getTherapistById(therapistId) {
  return therapists.find(t => t.therapistId === therapistId);
}

function renderMembers() {
  memberList.innerHTML = "";

  patients.forEach(patient => {
    const div = document.createElement("div");
    div.className = "member";
    div.innerHTML = `
      <div style="font-weight:600;">${patient.name}</div>
      <div style="font-size:12px; opacity:0.8;">${patient.preferredLocation} • ${patient.preferredModality}</div>
    `;
    div.onclick = () => showPatient(patient.patientId);
    memberList.appendChild(div);
  });

  const locationButton = document.createElement("div");
  locationButton.className = "member";
  locationButton.style.marginTop = "30px";
  locationButton.style.background = "#2f6fb2";
  locationButton.innerText = "Locations";
  locationButton.onclick = () => showLocations();
  memberList.appendChild(locationButton);
}

function showHome() {
  memberDetails.innerHTML = `
    <h2>Select a patient</h2>
    <p style="margin-top:8px; color:#667085;">
      Choose a patient on the left to view demographics, care team, medications, and appointments.
    </p>
  `;
}

function showPatient(patientId) {
  const patient = patients.find(p => p.patientId === patientId);
  if (!patient) return;

  const therapist = getTherapistById(patient.primaryTherapistId);

  const sortedAppointments = [...patient.appointments].sort((a, b) => {
    const aValue = `${a.appointmentDate}T${a.appointmentTime}`;
    const bValue = `${b.appointmentDate}T${b.appointmentTime}`;
    return aValue.localeCompare(bValue);
  });

  const prescriptionsHtml = patient.prescriptions.length
    ? patient.prescriptions.map(rx => {
        const refillColor = rx.refillsRemaining === 0 ? "red" : "#000";
        return `
          <div class="prescription-card" style="margin-bottom:12px;">
            <strong>${rx.medication}</strong><br/>
            Dosage: ${rx.dosage}<br/>
            <span style="color:${refillColor};">
              Refills Remaining: ${rx.refillsRemaining}
            </span>
          </div>
        `;
      }).join("")
    : `<p>No medications on file.</p>`;

  const appointmentsHtml = sortedAppointments.length
    ? sortedAppointments.map(appointment => {
        let statusColor = "#475467";
        if (appointment.status === "Scheduled") statusColor = "#027A48";
        if (appointment.status === "Completed") statusColor = "#175CD3";
        if (appointment.status === "Cancelled") statusColor = "#B42318";

        return `
          <div class="prescription-card" style="margin-bottom:12px;">
            <strong>${appointment.appointmentType}</strong><br/>
            <span style="color:${statusColor}; font-weight:600;">${appointment.status}</span><br/>
            Date: ${formatDate(appointment.appointmentDate)}<br/>
            Time: ${formatTime(appointment.appointmentTime)}<br/>
            Duration: ${appointment.durationMinutes} minutes<br/>
            Therapist: ${appointment.therapistName}<br/>
            Modality: ${appointment.modality}<br/>
            Location: ${appointment.location}<br/>
            Reason: ${appointment.reason}
          </div>
        `;
      }).join("")
    : `<p>No appointments on file.</p>`;

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
      <img src="${getAvatar(patient.gender)}"
           style="width:80px; height:80px; border-radius:50%; margin-right:15px;" />
      <div>
        <h2 style="margin:0;">${patient.name}</h2>
        <div>Patient ID: ${patient.patientId}</div>
      </div>
    </div>

    <div class="section">
      <h3>Patient Info</h3>
      <p><strong>Phone:</strong> ${patient.phone}</p>
      <p><strong>Address:</strong> ${patient.address}</p>
      <p><strong>Date of Birth:</strong> ${patient.dob}</p>
      <p><strong>Preferred Language:</strong> ${patient.preferredLanguage}</p>
      <p><strong>Preferred Location:</strong> ${patient.preferredLocation}</p>
      <p><strong>Preferred Modality:</strong> ${patient.preferredModality}</p>
      <p><strong>Status:</strong> ${patient.activePatientStatus}</p>
      <p><strong>SMS Consent:</strong> ${patient.smsConsent ? "Yes" : "No"}</p>
    </div>

    <div class="section">
      <h3>Care Team</h3>
      <p><strong>Primary Therapist:</strong> ${therapist ? therapist.therapistName : "Not assigned"}</p>
      <p><strong>Therapist Languages:</strong> ${therapist ? therapist.languages.join(", ") : "N/A"}</p>
      <p><strong>Therapist Specialties:</strong> ${therapist ? therapist.specialties.join(", ") : "N/A"}</p>
      <p><strong>Accepting Appointments:</strong> ${therapist ? (therapist.acceptingAppointments ? "Yes" : "No") : "N/A"}</p>
    </div>

    <div class="section">
      <h3>Medications</h3>
      ${prescriptionsHtml}
    </div>

    <div class="section">
      <h3>Next Appointment</h3>
      ${
        sortedAppointments.find(a => a.status === "Scheduled")
          ? (() => {
              const nextAppointment = sortedAppointments.find(a => a.status === "Scheduled");
              return `
                <p><strong>Type:</strong> ${nextAppointment.appointmentType}</p>
                <p><strong>Date:</strong> ${formatDate(nextAppointment.appointmentDate)}</p>
                <p><strong>Time:</strong> ${formatTime(nextAppointment.appointmentTime)}</p>
                <p><strong>Therapist:</strong> ${nextAppointment.therapistName}</p>
                <p><strong>Modality:</strong> ${nextAppointment.modality}</p>
                <p><strong>Status:</strong> ${nextAppointment.status}</p>
              `;
            })()
          : `<p>No upcoming scheduled appointment.</p>`
      }
    </div>

    <div class="section">
      <h3>Appointments</h3>
      ${appointmentsHtml}
    </div>
  `;
}

function showLocations() {
  let locationHtml = `
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

    <h2>Locations</h2>
  `;

  locations.forEach(location => {
    locationHtml += `
      <div
        onclick="showLocationDetails('${location.locationId}')"
        style="
          background:white;
          border:1px solid #d5dbe6;
          border-radius:6px;
          padding:12px;
          margin-bottom:10px;
          cursor:pointer;
        "
      >
        <strong>${location.locationName}</strong><br/>
        ${location.city}, ${location.state}<br/>
        Hours: ${location.businessHours.open} - ${location.businessHours.close}
      </div>
    `;
  });

  memberDetails.innerHTML = locationHtml;
}

function showLocationDetails(locationId) {
  const location = locations.find(l => l.locationId === locationId);
  if (!location) return;

  memberDetails.innerHTML = `
    <button onclick="showLocations()"
      style="
        margin-bottom:20px;
        background:#2f6fb2;
        color:white;
        border:none;
        padding:8px 12px;
        border-radius:6px;
        cursor:pointer;
      ">
      ← Back to Locations
    </button>

    <div class="section">
      <h2>${location.locationName}</h2>
      <p><strong>City:</strong> ${location.city}</p>
      <p><strong>State:</strong> ${location.state}</p>
      <p><strong>Timezone:</strong> ${location.timezone}</p>
      <p><strong>Services:</strong> ${location.services.join(", ")}</p>
      <p><strong>Business Hours:</strong> ${location.businessHours.open} - ${location.businessHours.close}</p>
      <p><strong>Days:</strong> ${location.businessHours.days.join(", ")}</p>
      <p><strong>Phone:</strong> ${location.phoneNumber}</p>
      <p><strong>Fax:</strong> ${location.faxNumber}</p>
    </div>
  `;
}

renderMembers();
showHome();
