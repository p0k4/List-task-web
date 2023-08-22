function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if(text.length === 0) {
        alert("Inserir pelo menos 1 caractere!");
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}