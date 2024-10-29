
export function CadastroFactory(nome, dataNascimento, telefone, email) {
    return {
        nome,
        dataNascimento,
        telefone,
        email,
        id: Date.now() 
    };
}

