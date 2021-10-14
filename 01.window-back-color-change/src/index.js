// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const myText = document.querySelector("h2");

const superEventHandler = {
  click: function () {
    myText.innerText = "That was a right click!";
    myText.style.color = colors[0];
  },
  mouseEnter: function () {
    myText.innerText = "The mouse is here!";
    myText.style.color = colors[1];
  },
  mouseLeave: function () {
    myText.innerText = "The mouse is gone!";
    myText.style.color = colors[2];
  },
  resize: function () {
    myText.innerText = "You just Resized!";
    myText.style.color = colors[3];
  }
};

myText.addEventListener("contextmenu", superEventHandler.click);
myText.addEventListener("mouseenter", superEventHandler.mouseEnter);
myText.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
