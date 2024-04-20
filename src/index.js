function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A poem will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "A poem will be here";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
