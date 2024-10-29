
import  { Validador }  from './validarCadastro.js';
import { CadastroFactory } from './factory.js'
import { salvarCadastro } from './localStorage.js'





document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

 
   

    const cadastroValido = Validador(nome,email,telefone,dataNascimento);
  
    if (cadastroValido) {
        console.log("Cadastro válido! Pronto para ser salvo.");
        const cadastroNovo = CadastroFactory(nome, dataNascimento, telefone, email);
        
        salvarCadastro(cadastroNovo)
        this.reset();
    } else {
        console.log("Erro no cadastro. Verifique os campos.");
    }
   
  
});

