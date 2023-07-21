import { format } from "date-fns";
import { Element, Project, ProjectList, Todo } from "./classes";
import { submitVerify } from "./submitButton/submitVerify";
import { deleteForm } from "./utilities";
import { handleAppendingProjectForm } from "./loadpage";

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
                    style: "height:60%;"
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
            .setAttributes({ class: "projectform", id: "form" })
            .addChild(new Element('div')
                .addChild(new Element('img')
                    .setAttributes({
                        src: "../assets/icons8-close.svg"
                    })
                    //Should delete the form div.... need to create a function that will delete form divs
                    .appendEventListener("click", (e) => deleteForm())
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
                .appendEventListener("click", function (event) {
                    if (submitVerify(event, ".projectinput")) {
                        document.querySelector(".projectform").toggleAttribute("hidden");
                        const inputs = document.querySelectorAll(".projectinput");
                        const title = inputs[0].value.trim();
                        const desc = inputs[1].value.trim();
                        const project = new Project(title, desc);
                        appendProjectToList(title, desc);
                        ProjectList.addProject(project)
                    }
                })
            )
            .buildElement();

    } else {
        return;
    }
    const prompt = new Element('div');

}

//Function to append project to displayList
function appendProjectToList(title, desc) {
    const parent = document.querySelector("#project-list");
    const container = new Element('div');
    container
        .setAttributes({ id: "list1" })
        .addChild(new Element('div')
            .addChild(new Element('div')
                .addChild(new Element('span')
                    .setTextContent(title))
                .addChild(new Element('span')
                    .setTextContent(desc)))
            .addChild(new Element('span')
                .setTextContent("Due date")))
        .addChild(new Element('div').setAttributes({ id: "border" }))
        .addChild(new Element('div').setTextContent('Add new Todo +')
            .appendEventListener('click', function () {
                console.log("Inside the new Todo event listener");
                document.querySelector(".todoform").toggleAttribute("hidden")

            }))
        .addChild(new Element('div').setAttributes({ id: "border" }));
    const containerdom = container.buildElement();
    parent.appendChild(containerdom);
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

    const prompt = new Element('div');
    prompt
        .setAttributes({ class: "todoform", hidden: true })
        .addChild(new Element('div')
            .setTextContent("Name"))
        .addChild(new Element('input')
            .setAttributes({
                type: "text",
                required: true,
                class: "todoinput",
                placeholder: "Enter todo name"
            }))
        .addChild(new Element('div')
            .setTextContent("Date"))
        .addChild(new Element('input')
            .setAttributes({
                type: "date",
                required: true,
                class: "todoinput",
                value: formatDate
            }))
        .addChild(new Element('div')
            .addChild(new Element('div')
                .addChild(new Element('div')
                    .setTextContent("High Priority")
                    .setAttributes({
                        style: "font-size:1.5rem"
                    }))
                .addChild(new Element('input')
                    .setAttributes({
                        type: "checkbox",
                        required: true,
                        class: "todoinput",
                    })))
            .addChild(new Element('div')
                .addChild(new Element('div')
                    .setTextContent("Completion")
                    .setAttributes({
                        style: "font-size:1.5rem"
                    }))
                .addChild(new Element('input')
                    .setAttributes({
                        type: "checkbox",
                        required: true,
                        class: "todoinput",
                    }))))
        .addChild(new Element('button')
            .setTextContent("Create")
            .setAttributes({ type: "submit", value: "submit" })
            .appendEventListener("click", function (event) {
                console.log("Processing new todo for the project");
                if (submitVerify(event, ".todoinput")) {
                    document.querySelector(".todoform").toggleAttribute("hidden");
                    const inputs = document.querySelectorAll(".todoinput");
                    const title = inputs[0].value.trim();
                    const date = inputs[1].value.trim();
                    const todo = new Todo(title, date);
                    ProjectList.getProjectById(0).appendToDo(todo)
                    //Creates a new dom element that holds the todo into the project 
                    handleNewTodoIntoProject(title, date);

                }
            }));
    const promptdom = prompt.buildElement();
    content.appendChild(promptdom);
}

//Creates a new dom element that holds the todo into the project 
export const handleNewTodoIntoProject = (title, date) => {
    const parent = document.querySelector("#list1");
    const border = new Element('div')
    border
        .setAttributes({ id: "border" });
    const container = new Element('div');
    container
        .addChild(new Element('div').setTextContent(title))
        .addChild(new Element('span').setTextContent(date))

    const containerdom = container.buildElement();
    const borderdom = border.buildElement();
    parent.appendChild(containerdom);
    parent.appendChild(borderdom)
}