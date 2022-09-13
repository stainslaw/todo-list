import {createHtmlElement, $content} from "./index";

function render() {
    const $footer = document.createElement("footer");
    const $p = createHtmlElement(
        "h4", 
        null, 
        ["main-color"], 
        ["Developed by stainslaw ©" + " " + (new Date().getFullYear())]
    );
    $footer.appendChild($p);
    $content.appendChild($footer);

}

export { render as renderFooter };