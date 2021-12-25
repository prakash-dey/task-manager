

// =====Selectors======
let taskBtn = document.querySelector(".task-button");
let modalCont = document.querySelector(".task-modal");
let cancelBtn = document.querySelector(".cancel-btn");
let priorityColor = document.querySelectorAll(".priority-color-big");
let doneBtn = document.querySelector(".done-btn");
let mainCont = document.querySelector(".task-cont");
let textArea = document.querySelector(".text-area");



// console.log(selectColor);

// =====Global variables====
let priority = ['high','medium','low','no-priority'];
let selectPriority=priority[priority.length-1];
let lockStatus = true;
let contentEdit = false;
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
    setModalDefault()
    

})

function setModalDefault(){
    modalCont.style.display = "none";
    textArea.value="";
    selectPriority=priority[priority.length-1];
    priorityColor.forEach(em => {
        em.classList.remove("active");

    })
        
    priorityColor[priorityColor.length-1].classList.add("active");
}

function createTask(selectPriority,task) {
    // console.log("CREATE CALLED");
    // console.log(task);
    // console.log(selectPriority);

    let taskCont = document.createElement("div");
    taskCont.setAttribute("class", "task-item");
    taskCont.innerHTML = `
                                <div class="priority-task ${selectPriority}">
                                    Random id
                                </div>
                                <div class="task">
                                    ${task}
                                </div>
                                <div class="action-btns">
                                    <i class="fas fa-check completed"></i>
                                    <i class="far fa-trash-alt delete"></i>
                                    <i class="fas fa-pen edit"></i>
                                    <i class="fas fa-circle color ${selectPriority}"></i>

                                    
                                </div>
                                <div class="lock">
                                    <i class="fas fa-lock lock-icon"></i>
                                </div>`;
  mainCont.appendChild(taskCont);
}

// ==================================Task Item==============================



mainCont.addEventListener('click',(e)=>{

    //==========lock unlock feature=================

    if(e.target.classList.contains('lock-icon')){
        console.log();
        if(lockStatus){
            e.target.classList.add('fa-lock-open');
            e.target.parentElement.previousElementSibling.style.display='flex';
            lockStatus = false;
        }else{

        e.target.classList.remove('fa-lock-open')
        console.log("lock Icon");
        e.target.parentElement.previousElementSibling.style.display='none';
        lockStatus = true;
        e.target.parentElement.parentElement.children[1].setAttribute('contenteditable','false');
    }}

    //================completed feature==================

    else if(e.target.classList.contains('completed')){
        e.target.parentElement.parentElement.style.display='none';
    }
    
    // ============= Delete feature=====================
    else if(e.target.classList.contains('delete')){
        e.target.style.color = 'red';
        setTimeout(()=>{
            e.target.parentElement.parentElement.remove();
        },500);

    }

    //============= Edit feature========================
    else if(e.target.classList.contains('edit')){
        contentEdit=!contentEdit;
        if(contentEdit){
            e.target.style.color = 'red';
            e.target.parentElement.previousElementSibling.setAttribute('contenteditable','true');
        }
        else{
            e.target.style.color = '';
            e.target.parentElement.previousElementSibling.setAttribute('contenteditable','false');

        }


    }
    // =========== Color fetature
    else if(e.target.classList.contains('color')){
        console.log('I am color');
        let color = e.target.classList[3];
        colorIndex = priority.indexOf(color);
        if(colorIndex == 3){
            colorIndex = -1 ;
        }
        e.target.parentElement.parentElement.children[0].classList.remove(color);
        e.target.classList.remove(color);
    
        e.target.parentElement.parentElement.children[0].classList.add(priority[colorIndex+1]);
        e.target.classList.add(priority[colorIndex+1]);
    }
})