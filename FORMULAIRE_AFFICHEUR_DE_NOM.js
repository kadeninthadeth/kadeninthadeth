function afficheInitiales() {
  var prenom = document.getElementById("txtPrenom").value
  var milieu = document.getElementById("txtMilieu").value
  var nom = document.getElementById("txtNom").value
  var afficheI = document.getElementById("divAfficheI")
  afficheI.innerHTML = "<br>" + prenom.charAt(0) + "." + milieu.charAt(0) + "." + nom.charAt(0) + "."
}
function afficheNom() {
  var prenom = document.getElementById("txtPrenom").value
  var milieu = document.getElementById("txtMilieu").value
  var nom = document.getElementById("txtNom").value
  var afficheN = document.getElementById("divAfficheN")
  afficheN.innerHTML = "<br>" + prenom + " " + milieu + " " + nom
}
function afficheUser() {
  var prenom = document.getElementById("txtPrenom").value
  var milieu = document.getElementById("txtMilieu").value
  var nom = document.getElementById("txtNom").value
  var afficheU = document.getElementById("divAfficheU")
  afficheU.innerHTML = "<br>" + prenom.toLowerCase().charAt(0) + milieu.toLowerCase().charAt(0) + nom.toLowerCase()
}
