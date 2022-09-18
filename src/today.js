import { $container } from "./index";

function render() {

    const $display = document.createElement("display");
    const $header = document.createElement("today-header");
    const $todayarea = document.createElement("today-area");
    const $listarea = document.createElement("list-area");

    const $form = document.querySelector("#form");
    const $formcontain = document.querySelector("#contain");

    window.addEventListener('load', () => {
        const input = document.querySelector('#new-task-input');
    
        $form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const task = input.value;
    
            if (!task) {
                alert("You haven't filled anything in!");
                return;
            }

         $listarea.classList.add("todo-list");
    
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("todo-list");
    
            $listarea.appendChild(task_content_el);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.size = "24";
            task_input_el.setAttribute("readonly", "readonly");
            
            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("button");
            
            const task_edit_el = document.createElement("edit");
            task_edit_el.innerHTML = "Edit";
    
            const task_delete_el = document.createElement("delete");
            task_delete_el.innerHTML = "Delete";

            task_content_el.appendChild(task_edit_el);
            task_content_el.appendChild(task_delete_el);

            $formcontain.appendChild(task_actions_el);

            $listarea.appendChild($formcontain);

            input.value = "";

            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                }
            });

            task_delete_el.addEventListener('click', () => {
                $listarea.removeChild(task_content_el);
            });
        });
    });


    $header.appendChild($form)
    $display.appendChild($header);
    $display.appendChild($listarea);
    $display.appendChild($todayarea);
    $container.appendChild($display);
}

export { render as renderToday };