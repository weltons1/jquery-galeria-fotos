$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();/* "slideDown" tem o efeito de "esticar/abrir" o form, como o mesmo esta em estado "none" 
        o "slideDown" foi colocado no "header button" (nova imagem+), para que ao "clickar" o mesmo possa aparecer*/
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();/* o "slideUP" tem o efeito de "recolher" o form, foi colocado no id "botao-cancelar"
        para que o "form" seja recolhido ao "clickar" no botão "cancelar" */
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <did class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})
