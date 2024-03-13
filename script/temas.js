
// Mudar tema da pagina
function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

function toggleLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}


// fazer a navbar ficar transparente
window.onscroll = scroll;
const element = document.querySelector('#antes' || '#depois');

function scroll() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 30) {
        try {
            document.getElementById('antes').id = 'depois'
            element.classList.remove('border-bottom');
        } catch (e) {
            false
        }
    } else {
        try {
            document.getElementById('depois').id = 'antes'
            element.classList.add('border-bottom');
        } catch (e) {
            false
        }
    }
}


// A propriedade classList pode ser acessada em objetos que implementam Element.

// Primeiro você obtém o elemento:

// const element = document.querySelector('#my-element');
// E depois pode...

// Adicionar uma nova classe à lista:

// element.classList.add('new-class');
// Remover uma classe da lista:

// element.classList.remove('new-class');
// Trocar uma classe por outra:

// element.classList.replace('old-class', 'new-class');
// Fazer o toggle de uma classe.Isto é, adicionar a classe se não existir e, caso contrário, remover:

// element.classList.toggle('is-active');
// Como a propriedade classList nada mais é que um DOMTokenList, existem diversos outros métodos que podem ajudar em outras situações.

// A vantagem da API classList é que você não precisa modificar toda a string de classes diretamente(o que é necessário com a API className).Ela também possui vários métodos que tornam o trabalho mais simples.Alguns deles foram demonstrados acima.

// Sobre o suporte dessa API, consulte a tabela.Embora é mais recente que a API className, o suporte para navegadores modernos já é relativamente bom.