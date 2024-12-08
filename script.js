// Acessar o modal e os elementos de imagem
var modal = document.getElementById("modal");
var img = document.getElementById("imagemClick");
var modalImg = document.getElementById("imagemModal");
var span = document.getElementById("fecharModal");

// Quando a imagem é clicada, abre o modal e exibe a imagem ampliada
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Quando o usuário clica no botão de fechar, fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
