//this class checks if the applicant is passed or not

class ApplicantSelector {
    constructor() {
      this.passedCount = 0;
      this.passedApplicants = [];
    }
  
    isPassed(applicant) {
      const totalScore = applicant.getTotalScore();

      //first it checks if the total is greater than 350 and then it proceeds to calculate science and humanities scores
  
      if (totalScore >= 350) {
        const scienceScore = applicant.getSubjectsScore(['math', 'science']);
        const humanitiesScore = applicant.getSubjectsScore(['japanese', 'geography']);

        //checks if the classification is l then teh humanitiesScore should be greater than or equal to 160
  
        if (applicant.classification === 'l' && humanitiesScore >= 160) {
          return true;
        } 
                //checks if the classification is s then the scienceScore should be greater than or equal to 160
        else if (applicant.classification === 's' && scienceScore >= 160) {
          return true;
        }
      }
  
      return false;
    }

    //if the isPassed returns true then the passedCount is increased by 1 and the data is added to the passedApplicants array to display
  
    addApplicant(applicant) {
      if (this.isPassed(applicant)) {
        applicant.passed = true;
        this.passedCount++;
        this.passedApplicants.push(applicant);
      }
    }
  }
  