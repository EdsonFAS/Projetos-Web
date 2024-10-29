export function Validador (nome, email, telefone, dataNascimento ) {
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        const dataNascimentoRegex = /^\d{4}-\d{2}-\d{2}$/; 
   
    
  
   function validarNome(nome) {
        return nome && nome.trim().length >= 3;
    }

    function validarEmail(email) {
        return emailRegex.test(email);
    }

    function validarTelefone(telefone) {
        return telefoneRegex.test(telefone);
    }

    function validarDataNascimento(dataNascimento) {
        return dataNascimentoRegex.test(dataNascimento);
    }

    function mostrarErroInput(inputId, mensagemId, mensagem) {
        const input = document.getElementById(inputId);
        const mensagemErro = document.getElementById(mensagemId);
        input.classList.add("erro-input");
        input.setAttribute('style','border-color:red')
        mensagemErro.innerText = mensagem;
        mensagemErro.setAttribute('style','color:red; display:block');
    }

  
    function removerErroInput(inputId, mensagemId) {
        const input = document.getElementById(inputId);
        input.setAttribute('style','border-color:black')
        const mensagemErro = document.getElementById(mensagemId);
        input.classList.remove("erro-input");
        mensagemErro.style.display = "none";
    }


    function validarCadastro( nome, email, telefone, dataNascimento ) {
        let erroEncontrado = false;
         
        

        if (!validarNome(nome)) {
           mostrarErroInput("nome", "erroNome", "O nome deve ter pelo menos 3 caracteres.");
            erroEncontrado = true;
        } else {
           removerErroInput("nome", "erroNome");
            
        }

        if (!validarEmail(email)) {
            mostrarErroInput("email", "erroEmail", "O email não é válido.");
            erroEncontrado = true;
        } else {
            removerErroInput("email", "erroEmail");
        }

        if (!validarTelefone(telefone)) {
         
            mostrarErroInput("telefone", "erroTelefone", "O telefone deve estar no formato (XX) XXXXX-XXXX.");
            erroEncontrado = true;
            console.log(telefone)
        } else {
            removerErroInput("telefone", "erroTelefone");
        }

        if (!validarDataNascimento(dataNascimento)) {
            mostrarErroInput("dataNascimento", "erroDataNascimento", "Data de nascimento inválida.");
            erroEncontrado = true;
        } else {
           removerErroInput("dataNascimento", "erroDataNascimento");
        }

        return !erroEncontrado;
        
    } 
    return validarCadastro(nome, email, telefone, dataNascimento )
}