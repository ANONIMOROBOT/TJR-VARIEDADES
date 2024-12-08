// Obtendo os elementos
var modal = document.getElementById("myModal");
var img = document.getElementById("img1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// Quando a imagem é clicada
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Quando o botão de fechar é clicado
span.onclick = function() { 
  modal.style.display = "none";
}
