const checkComplete =(id)=>{
    const i= document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",(event)=>completeTask(event,id));
    return i;
 }
const completeTask=(event,id)=>{
    const element=event.target;
    //togle sirve para cambiar el estado, si existe, lo quieta, si no, lo agrega
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    console.log("checkID: "+id)
    const tasks=JSON.parse(localStorage.getItem("tasks"));
    const index=tasks.findIndex(item=>item.id===id);
    console.log(index);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export default checkComplete;