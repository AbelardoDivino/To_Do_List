let botao = document.getElementById("add")
let receberdados = document.querySelector(".receber")
let tarefa = document.getElementById("tarefa")

let todasBtn = document.getElementById("todas")
let favoritasBtn = document.getElementById("favoritas")
let feitasBtn = document.getElementById("feitas")

let removerbtn = document.getElementById("remover")

function atualizarContador(){

    let tarefas = receberdados.querySelectorAll("div")
    let concluidas = receberdados.querySelectorAll(".concluida")

    let total = tarefas.length
    let feitas = concluidas.length

    feitasBtn.textContent = `Feitas (${feitas}/${total})`
}

botao.addEventListener("click",()=>{

    let texto = tarefa.value
    

    if (texto === "") {
        alert("digite uma tarefa")
        return
    }

    
    let tarefar = document.createElement("div")

    tarefar.innerHTML = `<span class="texto">${texto}</span>
            <button class="fav">⭐</button>
            <button class="feito">✔</button>
            <button class="del">❌</button>`


    
    receberdados.appendChild(tarefar)
    atualizarContador()
    tarefa.value = ''
    

    // tarefar.addEventListener("click",()=>{
    //     tarefar.remove()
    // })



})

receberdados.addEventListener("click",(e)=>{

    let tarefa = e.target.parentElement

    if(e.target.classList.contains("del")){
        tarefa.remove()
            atualizarContador()

    }

    if(e.target.classList.contains("fav")){
        tarefa.classList.toggle("favorita")
    }

    if(e.target.classList.contains("feito")){
        tarefa.classList.toggle("concluida")
            atualizarContador()

    }

})


removerbtn.addEventListener("click",()=>{

let ultimatarefa  = receberdados.lastElementChild

if (ultimatarefa) {
    ultimatarefa.remove()
        atualizarContador()

}

})


favoritasBtn.addEventListener("click", ()=>{

    let tarefas = document.querySelectorAll(".receber div")

    tarefas.forEach(t=>{

        if(t.classList.contains("favorita")){
            t.style.display = "block"
        }else{
            t.style.display = "none"
        }

    })

})

feitasBtn.addEventListener("click", ()=>{

    let tarefas = document.querySelectorAll(".receber div")

    tarefas.forEach(t=>{

        if(t.classList.contains("concluida")){
            t.style.display = "block"
        }else{
            t.style.display = "none"
        }

    })

})

todasBtn.addEventListener("click", ()=>{

    let tarefas = document.querySelectorAll(".receber div")

    tarefas.forEach(t=>{
        t.style.display = "block"
    })

})

// favoritar.addEventListener("click",()=>{
//     let favorito = receberdados.lastElementChild

//     if (favorito) {
//         favorito.classList.toggle("favorita")
//     }
// })

