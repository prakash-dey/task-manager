
let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelectorAll(".priority-color-big");
let doneBtn = document.querySelector(".done-btn");
let mainCont = document.querySelector(".task-cont");
let textArea = document.querySelector(".text-area");
let priority = ['high','medium','low','no-priority'];
let selectPriority=priority[priority.length-1];

// console.log(selectColor);




// ===========================Modal======================//
taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";

})

cancelBtn.addEventListener("click", (e) => {
    // hide modal
    modalCont.style.display = "none";
})

// Select priority
priorityColor.forEach((element,idx) => {
    // priorityColor.forEach(element)

    element.addEventListener("click", (e) => {
        priorityColor.forEach(em => {
            em.classList.remove("active");

        })
        selectPriority=priority[idx];
        e.target.classList.add("active");

    })
});

// ==========================Create tasks=======================//
doneBtn.addEventListener("click", (e) =>{
    createTask(selectPriority,textArea.value);
    modalCont.style.display = "none";
    textArea.value="";
    selectPriority=priority[priority.length-1];

})

function createTask(selectPriority,task) {
    // console.log("CREATE CALLED");
    // console.log(task);
    // console.log(selectPriority);

    let taskCont = document.createElement("div");
    taskCont.setAttribute("class", "task-item");
    taskCont.innerHTML = `<div class="priority-task ${selectPriority}">
                            </div>
                            <div class="task">
                                ${task}
                            </div>`;
  mainCont.appendChild(taskCont);
}