let botao = document.getElementById("add")
let receberdados = document.querySelector(".receber")
let tarefa = document.getElementById("tarefa")

botao.addEventListener("click",()=>{

    let texto = tarefa.value

    if (texto === "") {
        alert("digite uma tarefa")
        return
    }

    let tarefar = document.createElement("div")

    tarefar.textContent = texto

    receberdados.appendChild(tarefar)

    tarefa.value = ""

})