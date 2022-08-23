const checkComplete =()=>{
    const i= document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completeTask);
    return i;
 }
const completeTask=(event)=>{
    const element=event.target;
    //togle sirve para cambiar el estado, si existe, lo quieta, si no, lo agrega
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}
export default checkComplete;