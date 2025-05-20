const form = document.querySelector("#form");
if (form) {
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const motivoInput = document.querySelector("#motivo");
const telInput = document.querySelector("#celular");
const mensagemTextArea = document.querySelector("#mensagem");


// nome
nameInput.addEventListener("input", () => {
    if (nameInput.value !== "") {
        clearError(nameInput);
    }
});
// email
emailInput.addEventListener("input", () => {
    if (emailInput.value !== "" && isEmailValid(emailInput.value)) {
        clearError(emailInput);
    } else if (emailInput.value === "") {
        clearError(emailInput);
    }
});

//telefone
telInput.addEventListener("input", () => {
    if (telInput.value !== "") {
        clearError(telInput);
    }
});
telInput.addEventListener("input", () => {
    telInput.value = telInput.value.replace(/[^0-9]/g, '')
});

//motivo

    motivoInput.addEventListener("change", () => {
        if (motivoInput.value !== "") {
            clearError(motivoInput);
        }
});

//caixa de texto
    mensagemTextArea.addEventListener("input", () => {
        if (mensagemTextArea.value !== "") {
            clearError(mensagemTextArea);
        }
});



form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o comportamento padrão de recarregar a página

  let formValido = true; // Flag para verificar se o formulário está ok
  let primeiroErro = null; 

  // Validação do nome
  if (nameInput.value === "") {
    errorInput(nameInput, "Preencha seu nome!"); // Mostra mensagem de erro
    if (!primeiroErro) primeiroErro = nameInput; 
    formValido = false;
  } else {
    clearError(nameInput); // Limpa a mensagem se estiver válido
  }

  // Validação do email
  if (emailInput.value === "") {
    errorInput(emailInput, "Por favor, preencha seu email.");
    if (!primeiroErro) primeiroErro = emailInput;
    formValido = false;
  } else if (!isEmailValid(emailInput.value)) {
    errorInput(emailInput, "Por favor, digite um email válido.");
    if (!primeiroErro) primeiroErro = emailInput;
    formValido = false;
  } else {
    clearError(emailInput);
  }

  // Validação do celular
  if (telInput.value === "") {
    errorInput(telInput, "Por favor digite seu número!");
    if (!primeiroErro) primeiroErro = telInput;
    formValido = false;
  } else {
    clearError(telInput);
  }

  // Validação do motivo
  if (motivoInput.value === "") {
    errorInput(motivoInput, "Por favor coloque um motivo na lista!");
    if (!primeiroErro) primeiroErro = motivoInput;
    formValido = false;
  } else {
    clearError(motivoInput);
  }

  // Validação da mensagem
  if (mensagemTextArea.value === "") {
    errorInput(mensagemTextArea, "Por favor digite sua mensagem!");
    if (!primeiroErro) primeiroErro = mensagemTextArea;
    formValido = false;
  } else {
    clearError(mensagemTextArea);
  }

  // Se houver erro, foca no primeiro campo inválido
  if (!formValido) {
    primeiroErro.focus(); 
    return; // Interrompe envio
  }

  // Se tudo estiver certo, exibe mensagem e limpa o formulário
const mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.innerText = "Formulário enviado com sucesso!";
    mensagemSucesso.style.display = "block";
  limparTudo(); 


   setTimeout(() => { // limpar mensagem sucesso
        mensagemSucesso.style.display = "none";
    }, 5000);
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
}

//botão do faq

const botoes = document.querySelectorAll('.faq-botao');
if (botoes.length > 0) {
botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        const botaoAtivo = document.querySelector('.faq-botao.ativo');
        if(botaoAtivo && botaoAtivo !== btn) {
            botaoAtivo.classList.remove('ativo');
            botaoAtivo.nextElementSibling.classList.remove('show');
        }
    btn.classList.toggle('ativo');
    btn.nextElementSibling.classList.toggle('show')
    });

});
}