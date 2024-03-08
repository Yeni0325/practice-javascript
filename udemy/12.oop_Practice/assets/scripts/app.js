class Tooltip {}

class ProjectItem {
    constructor(id){
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }


    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', );
    }
}

class ProjectList {
    projects = [];  // 필드, 필드는 특성으로 변환됨
    
    constructor(type){
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();