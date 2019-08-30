let input= document.getElementById('input');
let todo = document.getElementById('todo');
let archive = document.getElementById('archive');

function onClick(checkbox,content) {

    let span = content.children[1];

    checkbox.addEventListener('click', () => {

        archive.prepend(content);
        checkbox.disabled = true;
        span.style.textDecoration = 'line-through';

        sendData({
            todo:iterate(todo),
            validate:iterate(archive)
        })
    })
}

function iterate(container) {

    let child = container.children;
    let array = [];

    for(let i = 0; i < child.length; i++) {

        let check = child[i].children[0].checked;
        let span = child[i].children[1].innerText;

        array.push ({
            check, span
        })
    }
    return JSON.stringify(array);
}

function addDraggable(div) {
    div.addEventListener("dragstart",(event) => {
        event.dataTransfer.setData("text/plain",event.target.id);
    })
    div.addEventListener("dragover",(event) => {
        event.preventDefault();
    })
    div.addEventListener('drop',(event) => {
        console.log("dropped");
    })
}

function sendData(data) {

    let formData = new FormData();

    formData.append('validate', data.validate);
    formData.append('todo', data.todo);

    fetch('assets/php/formulaire.php', {

        method:'post',
        body:formData
    })
    .then(data => data.text())
    .then(data => {
        let p = document.createElement('p');
        p.innerHTML = data;
        document.body.appendChild(p)
    })
    .catch(err =>  console.log(err))

}

function createTodo(valeur) {

    let div = document.createElement("div");
    let checkbox = document.createElement('input');
    let span = document.createElement('span');

    checkbox.type = 'checkbox';
    span.innerText = valeur;

    div.appendChild(checkbox);
    div.appendChild(span);

    todo.prepend(div);

    onClick(checkbox,div);
}

document.getElementById('form').addEventListener('submit',(event) => {
    event.preventDefault();
    createTodo(input.value);
})

document.getElementById('save').addEventListener('click',() => {
    sendData({
        todo:iterate(todo),
        validate:iterate(archive)
    })
})

function iterateDrag(target) {
    let children = target.children;

    for(let i = 0; i < children.length; i++){
onClick(children[i].children[0],children[i]);
addDraggable(children[i]);
}
}

iterateDrag(todo);
iterateDrag(archive);

