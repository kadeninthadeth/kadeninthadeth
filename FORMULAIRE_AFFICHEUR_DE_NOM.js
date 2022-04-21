function confirmeQuiz() {
  //affichage pour le nom
var nom = document.getElementById("txtNom").value
var afficheN = document.getElementById("divAfficheN");
  if (nom == "") {
    afficheN.innerHTML = "Erreur tu as oublie de mettre ton nom!"
  } else {
    afficheN.innerHTML = "Salut, " + nom
}
  //affichage pour le select
var selectVar = document.getElementById("selVar").value
var afficheV = document.getElementById("divAfficheV");
  if(selectVar == "3"){
    afficheV.innerHTML = "1. " + selectVar + " est correct!"
  } else {
    afficheV.innerHTML = "1. Erreur dans la question."
  }
  //affichage pour le radiobox
var radiosPrompt = document.getElementsByName("prompt");
var afficheC = document.getElementById("divAfficheC");
  if(radiosPrompt[2].checked) {
    afficheC.innerHTML = "2. " + radiosPrompt[2].value + " est correct!"
  } else {
    afficheC.innerHTML = "2. Erreur dans la question."
}
  //affichage pour le checkbox
var checkBox = document.getElementsByName("chkQuiz");
var afficheQ = document.getElementById("divAfficheQ");
  if(checkBox[1].checked && checkBox[3].checked && !checkBox[0].checked && !checkBox[2].checked) {
    afficheQ.innerHTML = "3. " + checkBox[1].value + " et " + checkBox[3].value + " est correct!"
  } else {
    afficheQ.innerHTML = "3. Erreur dans la question."
  }
}
