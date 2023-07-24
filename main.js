
let numAttendees = 0;
let attendeesData = [];

//The startInput takes the inputs of the number of attendees, classification and scores adter validating using ApplicantDataValidator class

function startInput() {
  numAttendees = parseInt(document.getElementById('numAttendees').value);
  if (!AttendeeDataValidator.isValidNumberAttendees(numAttendees)) {
    alert('Please enter a valid number of attendees between 1 and 1000.');
    return;
  }
  //Here empty array is created to store the data entered 
  attendeesData = [];
  document.getElementById('inputSection').style.display = 'block';
  document.getElementById('attendeesDataList').style.display = 'block';
  document.getElementById('outputCount').style.display = 'none';
}

// This function is responsible for adding the data of a new applicant to the attendeesData array. It is called when the user clicks the "Add Applicant" button

function addApplicant() {
  if (attendeesData.length >= numAttendees) {
    alert('All attendees data entered. Click "Calculate" to proceed.');
    return;
  }

  const classification = document.getElementById('classification').value.trim().toLowerCase();
  if (!AttendeeDataValidator.isValidClassification(classification)) {
    alert('Please enter "s" for science or "l" for humanities as the classification.');
    return;
  }
  //This code is responsible for retrieving the values entered by the user from the corresponding input fields in the HTML form.
  const englishScore = parseInt(document.getElementById('englishScore').value);
  const mathScore = parseInt(document.getElementById('mathScore').value);
  const scienceScore = parseInt(document.getElementById('scienceScore').value);
  const japaneseScore = parseInt(document.getElementById('japaneseScore').value);
  const geographyScore = parseInt(document.getElementById('geographyScore').value);

  //This piece validates if the entered score values are between 0 and 100

  const scores = [englishScore, mathScore, scienceScore, japaneseScore, geographyScore];
  for (const score of scores) {
    if (!AttendeeDataValidator.isValidScore(score)) {
      alert('Please enter valid scores between 0 and 100 for all subjects.');
      return;
    }
  }


  const inputData = `Classification: ${classification}, English Score: ${englishScore}, Math Score: ${mathScore}, Science Score: ${scienceScore}, Japanese Score: ${japaneseScore}, Geography/History Score: ${geographyScore}`;
  attendeesData.push(inputData);

  // Clear the input fields for the next attendee
  document.getElementById('classification').value = '';
  document.getElementById('englishScore').value = '';
  document.getElementById('mathScore').value = '';
  document.getElementById('scienceScore').value = '';
  document.getElementById('japaneseScore').value = '';
  document.getElementById('geographyScore').value = '';

  // If all attendees data entered, hide the input section
  if (attendeesData.length >= numAttendees) {
    document.getElementById('inputSection').style.display = 'none';
    displayAttendeesData();
  }
}

//This function displays the data entered by the user so the user can cross check the data before the calculation
function displayAttendeesData() {
    const attendeesDataList = document.getElementById('attendeesDataList');
    attendeesDataList.innerHTML = ''; // Clear previous list

    for (let i = 0; i < attendeesData.length; i++) {
        const listItem = document.createElement('p');
        listItem.textContent = `Attendee ${i + 1}: ${attendeesData[i]}`;
        attendeesDataList.appendChild(listItem);
      }
}  

//This function takes the array attendeesData and splits data according to the Applicant class so to calculate the results

function calculatePassedCount() {
  const applicantSelector = new ApplicantSelector();
  for (const data of attendeesData) {
    const classification = data.split(',')[0].split(':')[1].trim();
    const englishScore = parseInt(data.split(',')[1].split(':')[1].trim());
    const mathScore = parseInt(data.split(',')[2].split(':')[1].trim());
    const scienceScore = parseInt(data.split(',')[3].split(':')[1].trim());
    const japaneseScore = parseInt(data.split(',')[4].split(':')[1].trim());
    const geographyScore = parseInt(data.split(',')[5].split(':')[1].trim());

    const applicant = new Applicant(classification, englishScore, mathScore, scienceScore, japaneseScore, geographyScore);
    applicantSelector.addApplicant(applicant);
  }

  // Outputs the number of applicants passed
  const outputCountElement = document.getElementById('outputCount');
  outputCountElement.textContent = `${applicantSelector.passedCount} applicants passed.`;
  outputCountElement.style.display = 'block';

// Outputs the data of the applicants that were passed
  const outputListElement = document.getElementById('outputList');
  outputListElement.innerHTML = ''; // Clear previous list
  for (let i = 0; i < applicantSelector.passedApplicants.length; i++) {
    const applicant = applicantSelector.passedApplicants[i];
    const listItem = document.createElement('li');
    listItem.textContent = `${applicant.inputData}`;
    outputListElement.appendChild(listItem);
  }
  document.getElementById('attendeesDataList').style.display = 'none';
  document.getElementById('outputList').style.display = 'block';
}
