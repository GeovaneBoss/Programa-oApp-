var tarefas = [];

function adicionarTarefa() {
    const tarefaTexto = document.getElementById("Tarefa-texto").value.trim();

    if (tarefaTexto === '') {
        alert("VOCE TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 100000),
        Text: tarefaTexto,
        completed: false
    }
    tarefas.push(novaTarefa);
    console.log(tarefas)
    InputDeviceInfo.value = "";
    Input.focus();

}

function render() {
    const listaTarefas = document.getElementById("lista-tarefas")

    for (var i = 0; 1 < tarefas.length; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = document.getElementById("Tarefa-text").value;
        if (tarefas[i].completed === true) {
            li.classList.add("completd");
        }
        const span = document.createElement("span");
        span.textContent = tarefas[i].Text;

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].completed ? "desmarcar" : "concluir";
        concluir.classList.add("check");

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit")

        const deletar = document.createElement("button");
        deletar.textContent = "deletar";
        edit.classList.add("delete")

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)


        li.appendChild(span);



    }

}