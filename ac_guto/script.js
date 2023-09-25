function alterarTexto(conteudo) {
    var spanElement = document.querySelector('span');
    
    spanElement.innerHTML = conteudo;
  }
  
  function restaurarTexto() {
    var spanElement = document.querySelector('span');
    spanElement.innerHTML = "?";
  }