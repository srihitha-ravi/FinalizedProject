//applicant class

//defining the applicant class for entries for the logic to be executed
class Applicant {
    constructor(classification, englishScore, mathScore, scienceScore, japaneseScore, geographyScore) {
      this.classification = classification;
      this.scores = {
        'english': englishScore,
        'math': mathScore,
        'science': scienceScore,
        'japanese': japaneseScore,
        'geography': geographyScore,
      };

      //used to store a formatted string that contains the information about the applicant
      this.inputData = `Classification: ${classification}, English Score: ${englishScore}, Math Score: ${mathScore}, Science Score: ${scienceScore}, Japanese Score: ${japaneseScore}, Geography/History Score: ${geographyScore}`;
    }
  
    //This method calculates the total score of an applicant by summing up all the scores in the this.scores object. 
    getTotalScore() {
      return Object.values(this.scores).reduce((total, score) => total + score, 0);
    }

    // This method calculates the total score of an applicant in specific subjects.
  
    getSubjectsScore(subjects) {
      return subjects.map(subject => this.scores[subject]).reduce((total, score) => total + score, 0);
    }
  }
  