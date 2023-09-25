function trocaConteudo(conteudo) {
    let texto = document.getElementById(`texto_responsivo`);
    texto.textContent = conteudo;
    texto.style.display = `flex`;
    
    
}

function esconderConteudo() {
    let texto = document.getElementById(`texto_responsivo`);
    texto.style.display = `none`;
}

function escreverTexto(texto, elemento, velocidade) {
    let i = 0;
    const intervalo = setInterval(function() {
      elemento.innerHTML += texto.charAt(i);
      i++;
      if (i > texto.length - 1) {
        clearInterval(intervalo);
      }
    }, velocidade);
  }
  
 
  const elementoHTML = trocaConteudo();
  const textoParaEscrever = elementoHTML.textContent();
  const velocidadeDigitacao = 50;
  
  escreverTexto(textoParaEscrever, elementoHTML, velocidadeDigitacao);