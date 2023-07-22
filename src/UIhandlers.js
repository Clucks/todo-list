import { format, } from "date-fns";
import { Element, } from "./classes";
import { deleteForm, handleTodoFormSubmition, editTodo, deleteTodo } from "./utilities";
import { handleAppendingProjectForm, handleAppendingTodoForm } from "./loadpage";
import { handleProjectFormSubmition } from "./utilities";

//Loads the initial DOM of the todo list
const content = document.querySelector('#content');

//Loads the header content
export const loadHeader = () => {
    const header = new Element('div');
    header
        .setAttributes({ id: "header" })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setAttributes({ id: "logo" }))
            .addChild(new Element('span')
                .setTextContent('When'))
            .addChild(new Element('span')
                .setTextContent('2')
                .setAttributes({ style: "color: #42A4EB;" }))
            .addChild(new Element('span')
                .setTextContent('do')))
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setTextContent("Hello, example12345@gmail.com"))
            .addChild(new Element("button")))
    const headerdom = header.buildElement();
    content.appendChild(headerdom);
}

//Loads the sidebar content
export const loadSidebar = () => {
    console.log("Loading the side bar");
    const sidebar = new Element('div');
    sidebar
        .setAttributes({ id: "container" })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setTextContent('Projects')
                .setAttributes({ class: "tab" })
            )
            .addChild(new Element('img')
                .setAttributes({
                    src: "../assets/icons8-plus.svg",
                    style: "height:60%;cursor: pointer;"

                })
                //Creates a new form when you click on the plus
                .appendEventListener("click", handleAppendingProjectForm)
                //
                //}
                // .appendEventListener("click", function (event) {
                //     event.preventDefault();
                //     document.querySelector(".projectform").toggleAttribute('hidden');
                // })
            )
        )
        .addChild(new Element('div')
            .setAttributes({
                style: "border-top:2px solid white"
            })
        )
        .addChild(new Element('div')
            .setAttributes({

            })
        )

    const sidebardom = sidebar.buildElement();
    content.appendChild(sidebardom);
}

//Creates the form to create a new project
export const loadProjectForm = () => {
    if (!document.querySelector("#form")) {
        return new Element('div')
            .setAttributes({
                id: "form",
                class: "projectform",
            })
            .addChild(new Element('div')
                .addChild(new Element('img')
                    .setAttributes({
                        src: "../assets/icons8-close.svg",
                        style: "cursor:pointer"
                    })
                    //Should delete the form div.... need to create a function that will delete form divs
                    .appendEventListener("click", () => deleteForm())
                )
            )
            .addChild(new Element('div')
                .setTextContent("Project Name")
            )
            .addChild(new Element('input')
                .setAttributes({
                    required: true,
                    class: "projectinput",
                    placeholder: "Enter project title"
                })
            )
            .addChild(new Element('div')
                .setTextContent("Project Description")
            )
            .addChild(new Element('input')
                .setAttributes({
                    required: true,
                    class: "projectinput",
                    placeholder: "Enter project desc"
                })
            )
            .addChild(new Element('button')
                .setTextContent("Create")
                .setAttributes({ type: "submit", value: "submit" })
                //function deletes old form 
                .appendEventListener("click", (e) => handleProjectFormSubmition(e))
                // .appendEventListener("click", function (event) {
                //     if (submitVerify(event, ".projectinput")) {
                //         document.querySelector(".projectform").toggleAttribute("hidden");
                //         const inputs = document.querySelectorAll(".projectinput");
                //         const title = inputs[0].value.trim();
                //         const desc = inputs[1].value.trim();
                //         const project = new Project(title, desc);
                //         appendProjectToList(title, desc);
                //         ProjectList.addProject(project)
                //     }
                // })
            )
            .buildElement();

    } else {
        return;
    }
}

//Function to append project to displayList
export function appendProjectToList(title, desc) {
    if (!document.querySelector("#project")) {
        return new Element('div')
            .setAttributes({ id: "project" })
            .addChild(new Element('div')
                .setAttributes({
                    id: "project-header"
                })
                .addChild(new Element('div')
                    .setTextContent(title)
                    .setAttributes({
                        id: "project-title"
                    })
                )
                .addChild(new Element('div')
                    .addChild(new Element('span')
                        .setTextContent(desc)
                    )
                    .addChild(new Element('span')
                        .setTextContent("Priority")
                    )
                    .addChild(new Element('span')
                        .setTextContent("Due Date")
                    )
                    .addChild(new Element('img')
                        .setAttributes({
                            src: "../assets/icons8-plus-black.svg",
                            style: "height:50%;width:auto;cursor:pointer"
                        })
                        .appendEventListener("click", (e) => handleAppendingTodoForm())
                    )
                )
            )
            .addChild(new Element('div')
                .setAttributes({
                    id: "project-todo"
                })
            )
            .buildElement();
    } else {
        return;
    }
}

//Loads the dom to display projects and todos
export const displayList = () => {
    const projectlist = new Element('div');
    projectlist
        .setAttributes({ id: "project-list" });

    const projectlistdom = projectlist.buildElement();
    content.appendChild(projectlistdom);
}

//Loads the dom to display the form to create new Todos 
export const loadTodoForm = () => {
    const today = new Date();
    const formatDate = format(today, "yyyy-MM-dd");
    if (!document.querySelector("#form")) {
        return new Element('div')
            .setAttributes({
                id: "form",
                class: "todoform",
            })
            .addChild(new Element('div')
                .addChild(new Element("img")
                    .setAttributes({
                        src: "../assets/icons8-close.svg",
                        style: "height:20%;cursor:pointer"
                    })
                    .appendEventListener("click", (e) => deleteForm())
                )
            )
            .addChild(new Element('div')
                .setTextContent("Name")
            )
            .addChild(new Element('input')
                .setAttributes({
                    type: "text",
                    required: true,
                    class: "todoinput",
                    placeholder: "Enter todo name"
                })
            )
            .addChild(new Element('div')
                .setTextContent("Date")
            )
            .addChild(new Element('input')
                .setAttributes({
                    type: "date",
                    required: true,
                    class: "todoinput",
                    value: formatDate
                })
            )
            .addChild(new Element('div')
                .addChild(new Element('div')
                    .addChild(new Element('div')
                        .setTextContent("High Priority")
                        .setAttributes({
                            style: "font-size:1.5rem"
                        })
                    )
                    .addChild(new Element('input')
                        .setAttributes({
                            type: "checkbox",
                            required: true,
                            class: "todoinput",
                            style: "cursor:pointer",
                        })
                    )
                )
                .addChild(new Element('div')
                    .addChild(new Element('div')
                        .setTextContent("Completion")
                        .setAttributes({
                            style: "font-size:1.5rem"
                        })
                    )
                    .addChild(new Element('input')
                        .setAttributes({
                            type: "checkbox",
                            required: true,
                            class: "todoinput",
                            style: "cursor:pointer",
                        })
                    )
                )
            )
            .addChild(new Element('button')
                .setTextContent("Create")
                .setAttributes({ type: "submit", value: "submit" })
                .appendEventListener("click", (e) => handleTodoFormSubmition(e))
            )
            .buildElement();
    } else {
        return;
    }
}

//Creates a new dom element that holds the todo into the project 
export const appendTodoToProject = (title, date, priority, completion) => {
    return new Element('div')
        .setAttributes({
            class: "todo"
        })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .setAttributes({
                    id: "todoname"
                })
                .addChild(new Element('input')
                    .setAttributes({
                        id: "todo-checkbox",
                        type: "checkbox",
                        checked: (completion === true),
                    })
                )
                .addChild(new Element('span')
                    .setTextContent(title)
                )
            )
            .addChild(new Element('span')
                .setTextContent(priority) 
            )
            .addChild(new Element('span')
                .setTextContent(date)
            )
            .addChild(new Element('div')
                .setAttributes({
                    id: "tododelete"
                })
                .addChild(new Element('img')
                    .setAttributes({
                        src: "../assets/icons8-edit.svg",
                        // style: "height:10%;"
                        style: "cursor:pointer",
                    })
                    .appendEventListener("click", (e) => editTodo(0, title))
                )
                .addChild(new Element("img")
                    .setAttributes({
                        src: "../assets/icons8-trash.svg",
                        // style: "height:10%"
                        style: "cursor:pointer",
                    })
                    .appendEventListener("click", (e) => deleteTodo(0, title))
                )
            )
        )
        .addChild(new Element('div')
            .setAttributes({ id: "border" })
        )
        .buildElement()

}

