const toggleButton = document.getElementById('toggleButton');
const formContainer = document.getElementById('formContainer');

toggleButton.addEventListener('click', () => {
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
        formContainer.style.maxHeight = '900px'; // Ajuste o valor conforme necessário
        toggleButton.textContent = 'Fechar Formulário';
    } else {
        formContainer.style.maxHeight = '0';
        formContainer.addEventListener('transitionend', () => {
            formContainer.classList.add('hidden');
        }, { once: true });
        toggleButton.textContent = 'Abrir Formulário';
    }
});