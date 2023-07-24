//This class validates the conditions for the classification, no.of attendees and the sores entered

/* Conditions 
1. The "Classification" should either be "s" for Science or "l" for Humanities.
2. The "Number of Attendees" should be between 1 and 1000.
3. All the scores must be ≥ 0 and ≤ 100.
*/

class AttendeeDataValidator {
    static isValidNumberAttendees(numAttendees) {
      return !isNaN(numAttendees) && numAttendees >= 1 && numAttendees <= 1000;
    }
  
    static isValidClassification(classification) {
      return classification.trim().toLowerCase() === 's' || classification.trim().toLowerCase() === 'l';
    }
  
    static isValidScore(score) {
      return !isNaN(score) && score >= 0 && score <= 100;
    }
  }
  