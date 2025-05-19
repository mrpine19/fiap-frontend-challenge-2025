const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const motivoInput = document.querySelector("#motivo")
const telInput = document.querySelector("#celular")
const mensagemTextArea = document.querySelector("#mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Preencha seu nome!");
        return;
    }
});