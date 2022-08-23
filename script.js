import checkComplete from "./components/checkcomplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn=document.querySelector("[data-form-btn]")


const addTask=(event)=>{
    const list=document.querySelector("[data-list]");
    const task = createTask(event);
    list.appendChild(task);
}


const createTask = (evento)=>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]")
    const calendar = document.querySelector("[data-form-date]")
    const date =calendar.value;
    const dateFormat= moment(date).format('DD/MM/YYYY')
    console.log(dateFormat)
    const value=input.value;
    const list=document.querySelector("[data-list]");
    const task =document.createElement("li");
    task.classList.add("card");
    input.value='';
    const taskcontent=document.createElement("div");
    taskcontent.appendChild(checkComplete());
    const titleTasks=document.createElement("span");
    titleTasks.classList.add("task");
    titleTasks.innerText=value;
    taskcontent.appendChild(titleTasks);
    //task.innerHTML=content;
    const dateElement= document.createElement("span");
    dateElement.innerHTML=dateFormat;
    

    task.appendChild(taskcontent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    
    return task;
};

btn.addEventListener("click",addTask)

