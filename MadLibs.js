function afficheMadLibs() {
  var nom1 = document.getElementById("txtNom1").value
  
  var det = document.getElementById("txtDeterminant").value
  
  var ver1 = document.getElementById("txtVerbe1").value
  
  var per = document.getElementById("txtPerson").value

  var nou1 = document.getElementById("txtNourriture1").value
  
  var adj1 = document.getElementById("txtAdjectif1").value
  
  var ver2 = document.getElementById("txtVerbe2").value
  
  var adv = document.getElementById("txtAdverbe").value
  
  var nou2 = document.getElementById("txtNourriture2").value
  
  var nom2 = document.getElementById("txtNom2").value
  
  var adj2 = document.getElementById("txtAdjectif2").value
  
  var afficheM = document.getElementById("divAfficheM");

  var MadLibs = "J’adore l’été!  Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + nom1 + "," + " je me rend à la cuisine et je mange " + det + " pour déjeuner.  Ensuite, mon activité préféré est de " + ver1 + " avec mon ami " + per + "." + " À 14h, je dîne.  Je mange des " + nou1 + " " + adj1 + ". Durant l’après-midi, j’aime me rendre au parc et de " + ver2 + " " + adv + ".  En soirée, je mange toujours du " + nou2 + " pour le souper.  Finalement, je me couche et je rêve de " + nom2 + ".  Quel été " + adj2 + "!";
  
  afficheM.innerHTML = MadLibs
}
