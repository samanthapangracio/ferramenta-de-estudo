function criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'

   cartao.innerHTML = ` <div class="cartao__conteudo">
    <h3>Ginástica Rítmica</h3>
    <div class="cartao__conteudo__pergunta"> 
    <p>Quantos aparelhos existem na ginastica?</p>
    </div>
    <div class="cartao__conteudo__resposta">
    <p>5 aparelhos.</p>
    </div>
    </div>
    `
    container.appendChild(cartao)

}
