import { $container, createHtmlElement } from "./index";

function render() {

  const $h1 = createHtmlElement(
    "h1", 
    null, 
    null, 
    ["To-do List"]
);

  const navItems = ["today", "tomorrow", "next week"];
  const $ul = document.createElement("ul");

  const $ul2 = createHtmlElement(
    "li", 
    null, 
    null, 
    ["Settings"]
);

const $ul3 = createHtmlElement(
  "li", 
  null, 
  null, 
  ["Terms of Service"]
);

const $ul4 = createHtmlElement(
  "li", 
  null, 
  null, 
  ["Data Usage"]
);

  const $p = createHtmlElement(
      "h4", 
      null, 
      null, 
      ["stainslaw ©" + " " + (new Date().getFullYear())]
  );

  navItems.forEach((item) =>
    $ul.appendChild(createHtmlElement("li", null, null, item))

  );

  const $nav = document.createElement("nav");
  const $header = document.createElement("header");
  const $settings = document.createElement("settings");
  const $footer = document.createElement("footer");
  const $menubar = document.createElement("menubar");

  $header.appendChild($h1);
  $menubar.appendChild($header);
  $nav.appendChild($ul);
  $settings.appendChild($ul2);
  $settings.appendChild($ul3);
  $settings.appendChild($ul4)
  $nav.appendChild($settings);
  $menubar.appendChild($nav);
  $footer.appendChild($p);
  $menubar.appendChild($footer);
  $container.appendChild($menubar);
}


export { render as renderNav };
