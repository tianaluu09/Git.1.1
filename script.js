const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight / 2;
  steps.forEach((step) => {
    const box = step.getBoundingClientRect();
    if (box.top < window.innerHeight / 2 && box.bottom > window.innerHeight / 2) {
      step.style.background = "#a0d8ef";
    } else {
      step.style.background = "";
    }
  });
});
