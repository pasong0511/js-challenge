function handleWindowResize() {
  const intViewportWidth = window.innerWidth;

  document.body.classList.remove("active1");
  document.body.classList.remove("active2");
  document.body.classList.remove("active3");

  if (intViewportWidth <= 500) {
    document.body.classList.add("active1");
  } else if (intViewportWidth <= 700) {
    document.body.classList.add("active2");
  } else {
    document.body.classList.add("active3");
  }
}

handleWindowResize();

window.addEventListener("resize", handleWindowResize);
