const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const motivoInput = document.querySelector("#motivo");
const telInput = document.querySelector("#celular");
const mensagemTextArea = document.querySelector("#mensagem");


// retirar o erro após preenchido

nameInput.addEventListener("input", () => {
    if (nameInput.value !== "") {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", () => {
    if (emailInput.value !== "" && isEmailValid(emailInput.value)) {
        clearError(emailInput);
    } else if (emailInput.value === "") {
        clearError(emailInput);
    }
});

telInput.addEventListener("input", () => {
    if (telInput.value !== "") {
        clearError(telInput);
    }
});
telInput.addEventListener("input", () => {
    telInput.value = telInput.value.replace(/[^0-9]/g, '')
});

    motivoInput.addEventListener("change", () => {
        if (motivoInput.value !== "") {
            clearError(motivoInput);
        }
});
    mensagemTextArea.addEventListener("input", () => {
        if (mensagemTextArea.value !== "") {
            clearError(mensagemTextArea);
        }
});



    //previne de recarregar a pagina
form.addEventListener("submit", (event) => {
    event.preventDefault();


    checarNome();

    let formValido = true;

    // Verifica se o nome está vazio

    if (nameInput.value === "") {
        errorInput(nameInput, "Preencha seu nome!");
        formValido = false;
    }

    // se já encontrou erro, não aparece outros caso tenha
    if(!formValido) return;

    // Verifica se o email está vazio ou não é válido

    if (emailInput.value === "") {
        errorInput(emailInput, "Por favor, preencha seu email.");
        formValido = false;
    } else if (!isEmailValid(emailInput.value)) {
        errorInput(emailInput, "Por favor, digite um email válido.");
        formValido = false;
    }

    if(!formValido) return;

    // caso celular não seja um numero valido

    if (telInput.value === "") {
        errorInput(telInput, "Por favor digite seu número!");
        formValido = false;
    }

    if(!formValido) return;

    // caso motivo não seja escolhido

    if (motivoInput.value === "") {
    errorInput(motivoInput, "Por favor coloque um motivo na lista!");
    formValido = false;
    }

    if(!formValido) return;

    // Verifica se a mensagem está vazia

    if (mensagemTextArea.value === "") {
        errorInput(mensagemTextArea, "Por favor digite sua mensagem!");
        formValido = false;
    } else {
        clearError(mensagemTextArea);
    }

// com formulário preenchido, vai enviar um alerta e vai limpar-lo

    if (formValido) {
        alert("Formulário enviado com sucesso!");
        limparTudo();
    }
});


function isEmailValid(email) {
    const EmailRejeito = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    return EmailRejeito.test(email);
}

function checarNome() {
    const nomeDigitado = nameInput.value;
    if (nomeDigitado === "") {
        errorInput(nameInput, "Preencha seu nome!"); 
    } else {
        clearError(nameInput); // Limpa o erro se o nome estiver preenchido
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    formItem.className = "form-group error"; 
    textMessage.innerText = message;
}

function clearError(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    formItem.className = "form-group"; // Remove a classe de erro
    textMessage.innerText = ""; // Limpa a mensagem de erro
}

function limparTudo () {
    nameInput.value = "";
    emailInput.value = "";
    telInput.value = "";
    motivoInput.value = "";
    mensagemTextArea.value = "";
} //limpa tudo quando o form for preenchido