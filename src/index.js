import { renderNav } from "./navbar"
import { renderToday } from "./today"

const $container = document.getElementById("container");

function createHtmlElement(type, id, arrayClasses, container) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
    if (container) element.innerText = container;

      return element;
  }

  function today() {
    $container.innerHTML = "";
    renderNav();
    renderToday();
  }

  // function week() {
  //   $container.innerHTML = "";
  //   renderNav();
  //   renderWeek();
  // }
  //
  // function tomorrow() {
  //   $container.innerHTML = "";
  //   renderNav();
  //   renderTomorrow();
  // }

today();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  // if (target === "Today") today();
  // if (target === "Next Week") week();
  // if (target === "Tomorrow") tomorrow();
  // if (target === "Settings") settings();
});
export { createHtmlElement, $container };