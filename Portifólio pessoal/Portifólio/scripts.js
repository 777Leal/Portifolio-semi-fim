// Função para rolar até a seção
function scrollToSection(event) {
    // Previne o comportamento padrão do link (navegação imediata)
    event.preventDefault();

    // Pega o destino do link (ID da seção)
    const targetId = event.target.getAttribute('href').substring(1);

    // Pega o elemento da seção pelo ID
    const targetSection = document.getElementById(targetId);

    // Realiza o scroll suave até a seção
    targetSection.scrollIntoView({
        behavior: 'smooth', // define o comportamento suave
        block: 'start' // começa o scroll no topo da seção
    });
}

// Seleciona todos os links da navbar
const navbarLinks = document.querySelectorAll('.navbar a');

// Adiciona o evento de clique para cada link
navbarLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
