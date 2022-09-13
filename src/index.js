import _ from 'lodash';
import {renderFooter} from "./footer";


const $container = document.getElementById("container");

function createHtmlElement(type, id, arrayClasses, container) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)arrayClasses.forEach((myClass) => element.classList.add(myClass));
    if (container) element.innerText = container;

        return element;
}

function yourList() {
    $container.innerHTML = "";
    renderHeader();
    renderList();
    renderFooter();
}

function today() {
    $container.innerHTML = "";
    renderHeader();
    renderToday();
    renderFooter();
}

function nextWeek() {
    $container.innerHTML = "";
    renderHeader();
    renderWeek();
    renderFooter();
}

yourList();
document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "YOUR LIST") yourList();
    if (target === "TODAY") today();
    if (target === "NEXT WEEK") nextWeek();
});

export {createHtmlElement, $container};