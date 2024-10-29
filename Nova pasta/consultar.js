
    
   
    function deletarCadastro(id) {
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros = cadastros.filter(cadastro => cadastro.id !== id);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        listarCadastros();
    }


    function listarCadastros() {
        const gridCadastros = document.getElementById('gridCadastros');
        gridCadastros.innerHTML = '';
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.forEach(cadastro => {
            const row = document.createElement('tr');
            row.classList.add('hover:bg-zinc-300')
            row.innerHTML = `
                <td class="border-t-2 border-r font-medium border-black">${cadastro.nome}</td>
                <td class="border-t-2 border-r font-medium border-black">${cadastro.dataNascimento}</td>
                <td class="border-t-2 border-r font-medium border-black">${cadastro.telefone}</td>
                <td class="border-t-2 border-r font-medium border-black">${cadastro.email}</td>
                <td class="border-t-2 font-medium border-black p-1">
                    <button class="bg-red-600 text-white p-1 rounded-md font-medium mr-2" onclick="deletarCadastro(${cadastro.id})">Excluir</button>
                    <button class="bg-blue-700 text-white p-1 rounded-md font-medium mr-2" onclick="editarCadastro(${cadastro.id})">Editar</button>
                </td>
            `;
            gridCadastros.appendChild(row);
        });
    }
    listarCadastros()
