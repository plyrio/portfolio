// Seleciona os botões e elementos de texto
const emailElement = document.querySelector('.contatoemail');
const telElement = document.querySelector('.contatotel');

const copyEmailBtn = document.querySelector('#copyemail');
const copyTelBtn = document.querySelector('#copytel');

// Função para copiar texto para a área de transferência
function copyTextToClipboard(text, button) {
    navigator.clipboard.writeText(text.trim()).then(() => {
        showTemporaryMessage(button, 'Copiado!');
    }).catch(() => {
        showTemporaryMessage(button, 'Falha ao Copiar!');
    });
}

// Função para mostrar uma mensagem temporária no botão
function showTemporaryMessage(button, message) {
    const originalText = button.innerHTML;
    button.innerHTML = `<span>${message}</span>`;
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 1500);
}

// Eventos de clique para os botões
copyEmailBtn.addEventListener('click', () => {
    const emailText = emailElement.textContent.trim();
    copyTextToClipboard(emailText, copyEmailBtn);
});

copyTelBtn.addEventListener('click', () => {
    const telText = telElement.textContent.trim().replace(/\s+/g, ' ');
    copyTextToClipboard(telText, copyTelBtn);
});
