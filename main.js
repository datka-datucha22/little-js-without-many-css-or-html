let addToDoButoon = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButoon.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    paragraph.style.display = 'flex'
    paragraph.classList.add('p-s');
    toDoContainer.appendChild(paragraph);
    inputField.value = ""

    let actions_of_tasks = document.createElement('div');
    actions_of_tasks.classList.add('actions');


    let delete_element = document.createElement('button');
    delete_element.classList.add('delete_button');
    delete_element.innerHTML = 'Del';

    actions_of_tasks.appendChild(delete_element);
    paragraph.appendChild(actions_of_tasks)

    delete_element.addEventListener('click', function () {
        paragraph.style.display = 'none'
    })
})

