let addTask = document.getElementById('addTask');
let toDoTask = document.getElementById('toDoTask');
let inputTask = document.getElementById('inputTask');

addTask.addEventListener('click', function(){
    //new paragraph/list created
    var paragraph = document.createElement('p')
    paragraph.innerText = inputTask.value;
    toDoTask.appendChild(paragraph);
    inputTask.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    //double click to remove task
    paragraph.addEventListener('dblclick', function(){
        toDoTask.removeChild(paragraph);
    })
})