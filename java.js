let botao = document.getElementById("add")
let receberdados = document.querySelector(".receber")
let tarefa = document.getElementById("tarefa")
let favoritar = document.getElementById("favoritar")

let removerbtn = document.getElementById("remover")

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

    // tarefar.addEventListener("click",()=>{
    //     tarefar.remove()
    // })



})
removerbtn.addEventListener("click",()=>{

let ultimatarefa  = receberdados.lastElementChild

if (ultimatarefa) {
    ultimatarefa.remove()
}

})

favoritar.addEventListener("click",()=>{
    let favorito = receberdados.lastElementChild

    if (favorito) {
        favorito.classList.toggle("favorita")
    }
})

