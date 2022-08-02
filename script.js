/* JavaScript code to re-nest some HTML elements when the window size changes*/

let shrunk = false;

//define variables as html elements
const contact = document.getElementById("contact");
const education = document.getElementById("education-section");
const leadership = document.getElementById(
  "leadership-and-communications-section"
);
const main = document.getElementById("main");
const mainRightSide = document.getElementById("right-side");
const leftColumn = document.getElementById("left-content-wrapper");

function checkSize() {
  if (window.innerWidth <= 851 && !shrunk) {
    shrink();
  } else if (window.innerWidth > 851 && shrunk) {
    expand();
  }
}

function shrink() {
  //move contact information to just after the header
  document.body.insertBefore(contact, document.body.children[1]);

  //move education section before work experience and leadership section out of div container
  main.insertBefore(education, main.children[0]);
  main.insertBefore(leadership, main.children[2]);

  mainRightSide.style.display = "none";

  shrunk = true;
}

function expand() {
  //return contact information
  leftColumn.insertBefore(contact, leftColumn.children[0]);

  //return main sections
  mainRightSide.append(education);
  mainRightSide.append(leadership);

  mainRightSide.style.display = "initial";

  shrunk = false;
}

window.addEventListener("resize", function () {
  checkSize();
});

checkSize();
