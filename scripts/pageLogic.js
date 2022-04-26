// pagesData from ./data/pages.js

class PageLogic {
  constructor() {
    this.pageIndex = null;
  }

  init() {
    document.getElementById("forwardButton").addEventListener("click", () => {
      if (this.pageIndex < pagesData.length - 1) {
        this.changePage(this.pageIndex + 1);
      }
    });

    document.getElementById("backButton").addEventListener("click", () => {
      if (this.pageIndex > 0) {
        this.changePage(this.pageIndex - 1);
      }
    });

    this.changePage(0);
  }

  changePage(newPage) {
    this.clearPage();
    this.pageIndex = newPage;
    this.fillInPageData(this.pageIndex);
    this.disableButtonChecker();
    this.updateProgressBar();
  }

  clearPage() {
    document.getElementById("headDiv").innerHTML = "";
    document.getElementById("contentDiv").innerHTML = "";
    document.getElementById("referenceText").innerHTML = "";
    document.getElementById("backButton").style.visibility = "visible";
    document.getElementById("forwardButton").style.visibility = "visible";
  }

  fillInPageData(pageIndex) {
    document.getElementById("headDiv").innerHTML = pagesData[pageIndex]["header"];
    this.fillInContent(pagesData[pageIndex]["content"]);
    document.getElementById("referenceText").innerHTML = `Reference(s): ${pagesData[pageIndex]["referenceText"]}`;
  }

  fillInContent(content) {
    // This is assuming content is fortmatted html, will need to change in the future
    for (let con of content) {
      switch (con.type) {
        case "text":
          document.getElementById("contentDiv").innerHTML += `<p> ${con.info} </p>`;
          break;
        case "image":
          document.getElementById("contentDiv").innerHTML += `<img src="data/images/${con.info}">`;
          break;
        case "graph":
          console.log("Warning: Graph not implemented.");
          break;
        default:
          console.log(`Warning: Invalid content type: ${con.type}.`);
      }
    }
  }

  disableButtonChecker() {
    if(this.pageIndex === 0) {
      document.getElementById("backButton").style.visibility = "hidden";
    }
    if(this.pageIndex === pagesData.length - 1) {
      document.getElementById("forwardButton").style.visibility = "hidden";
    }
  }

  updateProgressBar() {
    document.getElementById("progressBar").style = `width:${(100/pagesData.length) * (this.pageIndex+1)}%`;
  }
}