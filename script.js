function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imgagem
  if (html.classList.contains("light")) {
  //se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
  //se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    //se tiver o light mode, adicionar a imagem light
    img.setAttribute("alt", "Foto Marcelo com camisa vermelha sorrindo de oculos escuro")
  } else {
    //se tiver sem o light mode, manter a imagem normal
    img.setAttribute("alt", ".Foto do Marcelo com caminha rosa sorindo")
  }
}