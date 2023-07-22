export class ProjectList {
  static projectsArray = [];

  static getAllProjects() {
    return ProjectList.projectsArray;
  }

  static addProject(project) {
    ProjectList.projectsArray.push(project);
  }

  static deleteProject(project) {
    ProjectList.projectsArray.splice(Librarian.projectsArray.indexOf(project), 1);
  }
  static getProjectById(id) {
    return ProjectList.projectsArray.find(project => project._id === id);
  }

}

export class Project {
  static counter = 0;
  constructor(name, desc) {
    this._name = name;
    this._desc = desc;
    this._todos = [];
    this._id = Project.counter;
    Project.counter++;
  }

  appendToDo(todo) {
    this._todos.push(todo);
  }
  get todos() {
    return this._todos;
  }

}

export class Todo {
  constructor(title, date, priority, completion) {
    this._title = title;
    this._date = date;
    this._priority = priority;
    this._completion = completion;
  }

  // Getter method for the title property
  get title() {
    return this._title;
  }

  // Getter method for the date property
  get date() {
    return this._date;
  }

  // Getter method for the priority property
  get priority() {
    return this._priority;
  }

  // Getter method for the completion property
  get completion() {
    return this._completion;
  }
}



export class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  buildElement() {
    // Create element in DOM
    const realDom = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      if (attribute === "hidden" && this.attributes[attribute] === true) {
        realDom.setAttribute("hidden", "");
      } else if (this.attributes[attribute] === true || this.attributes[attribute] === false) {
        realDom.toggleAttribute(attribute, this.attributes[attribute]);
      } else {
        realDom.setAttribute(attribute, this.attributes[attribute]);
      }
    }

    // Add event listeners:
    for (const event in this.eventListeners) {
      this.eventListeners[event].forEach((cb) => {
        realDom.addEventListener(event, cb);
      });
    }

    // Append children? Append text?
    if (this.text === undefined) {
      for (const child of this.children) {
        realDom.appendChild(child.buildElement());
      }
    } else {
      const realText = document.createTextNode(this.text);
      realDom.appendChild(realText);
    }
    return realDom;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.text = undefined;
    this.children.push(element);

    return this;
  }

  setTextContent(string) {
    this.children = [];
    this.text = string;
    return this;
  }

  appendEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    } else {
      this.eventListeners[event] = [callback];
    }
    return this;
  }
}
