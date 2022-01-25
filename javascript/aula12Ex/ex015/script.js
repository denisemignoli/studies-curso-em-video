function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = window.document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = window.document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "foto-crianca-m.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "foto-jovem-m.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "foto-adulto-m.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else {
        // idoso
        img.setAttribute("src", "foto-idoso-m.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-crianca-f.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "foto-jovem-f.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else if (idade < 50) {
        // adulta
        img.setAttribute("src", "foto-adulto-f.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      } else {
        // idosa
        img.setAttribute("src", "foto-idoso-f.jpg");
        img.style = "border-radius: 50%"
        img.style.width = '400px'
        img.style.height = '400px'
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img)
  }
}
