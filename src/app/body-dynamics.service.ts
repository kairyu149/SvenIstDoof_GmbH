import {Injectable} from '@angular/core';

@Injectable()
export class BodyDynamicsService {

  public chapterColor = "#8da6d6";
  public chapterFlag = ""; //keine Chapterflag auf Startseite
  public buttonUp = "../../../images/chapter15/scrollUp.png";
  public buttonDown = "../../../images/chapter15/scrollDown.png";
  public pictureInBubble = "../../../images/chapter15/competenceDone.png";
  public chapterBubbles = [];
  public loadAllCompetences = true;
  public sideTextBooleanArray = [];
  public edPlans = {
    "count": 0,
    "plans": [],
    "competences": {},
    "hashMapPlans": {}
  };
  public edPlansFlagText;

  constructor() {
  }

    formatDate(dateFromApi, i) {
    if(!!dateFromApi) {
      let day = dateFromApi.slice(8, 10);
      let month = dateFromApi.slice(5, 7);
      let year = dateFromApi.slice(0, 4);

      

      return "Du hast diese Kompetenz am " + day + "." + month + "." + year + " erreicht!";
    } else if (!this.edPlans.competences[this.chapterBubbles[i].id]) {
      return "Du hast diese Kompetenz noch nicht erreicht.";
    } else {
      return "<strong>"+this.edPlans.hashMapPlans[this.edPlans.competences[this.chapterBubbles[i].id].edPlanId].name +"</strong><br><br>"+ this.edPlans.competences[this.chapterBubbles[i].id].note;
    }
  }

  calcContentHeigth() {

    let i = this.chapterBubbles.length * 130 + 110;

    if (i > 1080) {
      return i + "px";
    } else {
      return "1080px";
    }
  }

  fillBooleanArray(j) {

    for (let i = 0; i <= j; i++) {
      this.sideTextBooleanArray[i] = false;
    }
  }

  changeShowBubbleSidetext(i) {
    if (!this.sideTextBooleanArray[i]) {
      this.sideTextBooleanArray[i] = true;
    } else {
      this.sideTextBooleanArray[i] = false;
    }
  }

  changeLoadAllCompetences(i) {
    this.loadAllCompetences = i;
  }

  changeBackground(newColor) {
    this.chapterColor = newColor;
  }

  changeFlag(i) {
    if (i == -1) {
      this.chapterFlag = "../../../images/educationalPlan/littleChapterFlag.png";
    } else if (i < 10) {
      this.chapterFlag = "../../../images/chapter0" + i + "/littleChapterFlag.png";
    } else {
      this.chapterFlag = "../../../images/chapter" + i + "/littleChapterFlag.png";
    }
  }

  changeButtonUp(i) {
    if (i == -1) {
      this.buttonUp = "../../../images/educationalPlan/scrollUp.png";
    } else if (i < 10) {
      this.buttonUp = "../../../images/chapter0" + i + "/scrollUp.png"
    } else {
      this.buttonUp = "../../../images/chapter" + i + "/scrollUp.png"
    }
  }

  changeButtonDown(i) {
    if (i == -1) {
      this.buttonDown = "../../../images/educationalPlan/scrollDown.png";
    } else if (i < 10) {
      this.buttonDown = "../../../images/chapter0" + i + "/scrollDown.png"
    } else {
      this.buttonDown = "../../../images/chapter" + i + "/scrollDown.png"
    }
  }

  changeChapterBubbles(i) {
    this.chapterBubbles = i;
  }

  assignPictureInBubble(arrayElement) {

    var i = arrayElement.chapterId;
    var imagepath = "../../../images/";

    if (arrayElement.checked) {
      if (i < 10) {
        return imagepath +"chapter0" + i + "/competenceDone.png";
      } else {
        return imagepath +"chapter"+ i + "/competenceDone.png";
      }
    } else if(!this.edPlans.competences[arrayElement.id]) {
      if (i < 10) {
        return imagepath +"chapter0" + i + "/competenceUndone.png";
      } else {
        return imagepath +"chapter"+ i + "/competenceUndone.png";
      }

    } else {
      return imagepath+"isInEducationalPlan.png";
    }

  }

  changeEdPlanFlagText (i) {
    this.edPlansFlagText = i;
  }


}
