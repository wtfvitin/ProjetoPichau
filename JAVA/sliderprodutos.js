const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    // Captura a largura de um único cartão (incluindo margem)
    const productCard = item.querySelector('.product-card');
    const productCardStyle = productCard ? getComputedStyle(productCard) : null;
    const productCardWidth = productCard
        ? productCard.offsetWidth + parseInt(productCardStyle.marginRight, 10)
        : 0;

    // Função para atualizar a visibilidade dos botões
    const updateButtonVisibility = () => {
        preBtn[i].style.display = item.scrollLeft <= 0 ? 'none' : 'flex';
        nxtBtn[i].style.display = 
            item.scrollLeft + item.offsetWidth >= item.scrollWidth ? 'none' : 'flex';
    };

    // Inicializa a visibilidade dos botões
    updateButtonVisibility();

    nxtBtn[i].addEventListener('click', (event) => {
        event.preventDefault();
        item.scrollLeft += productCardWidth; // Rola exatamente a largura de um cartão
        setTimeout(updateButtonVisibility, 300); // Aguarda a rolagem suave para atualizar os botões
    });

    preBtn[i].addEventListener('click', (event) => {
        event.preventDefault();
        item.scrollLeft -= productCardWidth; // Rola exatamente a largura de um cartão
        setTimeout(updateButtonVisibility, 300); // Aguarda a rolagem suave para atualizar os botões
    });

    // Atualiza os botões ao redimensionar a tela
    window.addEventListener('resize', updateButtonVisibility);
});
