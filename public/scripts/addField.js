// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)


// Executar uma ação
function cloneField() {
    // Duplicar os campos, Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)  // boolean: ture ou false

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')


    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página,  Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    

    
    