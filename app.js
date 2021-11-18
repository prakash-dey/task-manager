let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelectorAll(".priority-color");
let doneBtn = document.querySelector(".done-btn");
let mainCont = document.querySelector(".task-cont");
let textArea = document.querySelector(".text-area");





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
priorityColor.forEach(element => {
    // priorityColor.forEach(element)

    element.addEventListener("click", (e) => {
        priorityColor.forEach(em => {
            console.log("remove called");
            console.log(em);

            // em.target.classList.add("active");
            em.classList.remove("active");

        })
        e.target.classList.add("active");
    })
});

// ==========================Create tasks=======================//
doneBtn.addEventListener("click", (e) =>{
    createTask();
    modalCont.style.display = "none";

})

function createTask() {
    let taskCont = document.createElement("div");
    taskCont.setAttribute("class", "task-item");
    taskCont.innerHTML = `<div class="priority-color-task">
                            </div>
                            <div class="task">
                                ${textArea.value}
                            </div>`;
    mainCont.appendChild(taskCont);
}