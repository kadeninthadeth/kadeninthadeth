//les prix des items
var tblPrix = [24.99, 19.99, 19.99, 79.99, 4.99];
var prixFinal = 0;
//fonction en cliquant Terminer et payer
function achatItem() {
prixFinal = 0;
var afficheF = document.getElementById("divAfficheF");
//les donnees de hoodie
var chkH = document.getElementsByName("itemHoodie");
  if(chkH[0].checked) {
    var qteH = document.getElementById("selHoodie").value;
    prixFinal = prixFinal + qteH*tblPrix[0]
    var hoodie = "Tu as " + qteH + " de Hoodie"
}
//les donnees de pantalon
var chkP= document.getElementsByName("itemPants");
  if(chkP[0].checked) {
    var qteP = document.getElementById("selPants").value;
    prixFinal = prixFinal + qteP*tblPrix[1]

}
//les donnees de chandail
var chkC= document.getElementsByName("itemChandail");
  if(chkC[0].checked) {
    var qteC = document.getElementById("selChand").value;
    prixFinal = prixFinal + qteC*tblPrix[2]

}
//les donnees de soulier
var chkS= document.getElementsByName("itemSoulier");
  if(chkS[0].checked) {
    var qteS = document.getElementById("selSoulier1").value;
    prixFinal = prixFinal + qteS*tblPrix[3]
}
//les donnees de chapeau
var chkHat= document.getElementsByName("itemHat");
  if(chkHat[0].checked) {
    var qteHat = document.getElementById("selHat").value;
    prixFinal = prixFinal + qteHat*tblPrix[4]
}
//les donnees de taxes avec les taxes de provinces
var afficheT = document.getElementById("divAfficheT");
var radTaxes = document.getElementsByName("Taxes");
  if(radTaxes[0].checked) {
    var taxON = 1.13;
    afficheT.innerHTML = "Le prix incluant les taxes " + (prixFinal*taxON).toFixed(2) + "$"
} else if(radTaxes[1].checked) {
    var taxQC = 1.15;
    afficheT.innerHTML = "Le prix incluant les taxes " + (prixFinal*taxQC).toFixed(2) + "$"
} else {
    afficheT.innerHTML = "<b> Selectionner ton province </b>"
}
//pour affichier combien de item que tu achete
var afficheH = document.getElementById("divAfficheH");
var afficheP = document.getElementById("divAfficheP");
var afficheC = document.getElementById("divAfficheC");
var afficheS = document.getElementById("divAfficheS");
var afficheHat = document.getElementById("divAfficheHat");
if (!chkH[0].checked) {
  var qteH = document.getElementById("selHoodie").value;
  afficheH.innerHTML = " "
} else {
  afficheH.innerHTML = "x" + qteH + " Hoodie." + "(" + qteH*tblPrix[0] + ")"
}
if (!chkP[0].checked) {
  afficheP.innerHTML = " "
} else {
  afficheP.innerHTML = "x" + qteP + " Pantalon." + "(" + qteP*tblPrix[1] + ")"
}
if (!chkC[0].checked) {
  afficheC.innerHTML = " "
} else {
  afficheC.innerHTML = "x" + qteC + " Chandail." + "(" + qteC*tblPrix[2] + ")"
}
if (!chkS[0].checked) {
  afficheS.innerHTML = " "
} else {
  afficheS.innerHTML = "x" + qteS + " Soulier." + "(" + qteS*tblPrix[3] + ")"
}
if (!chkHat[0].checked) {
  afficheHat.innerHTML = " "
} else {
  afficheHat.innerHTML = "x" + qteHat + " Chapeau." + "(" + qteHat*tblPrix[4] + ")"
}
//les livraisons des achats
var afficheLivraison = document.getElementById("divAfficheLivraison");
var radLivraison = document.getElementsByName("Livraison");
  if (radLivraison[0].checked) {
    afficheLivraison.innerHTML = "Tes items viennent dans deux semaines " + (prixFinal).toFixed(2) + 30;
}
  if (radLivraison[1].checked) {
    afficheLivraison.innerHTML = "Tes items viennent dans 3 jours, ton totale est " + (prixFinal).toFixed(2) + 10;
}
//l'affiche de argent en retour
var chkdot5$ = .5;
var chkdot10$ = .10;
var chkdot25$ = .25;
var chk1$ = 1;
var chk2$ = 2;
var chk5$ = 5;
var chk10$ = 10;
var chk20$ = 20;
var chk50$ = 50;
var chk100$ = 100;
var nombre = document.getElementById("txtPaye").value;
  if (nombre/100 != 0) {
   chk100$ = Math.floor(nombre/100);
   nombre = nombre - Math.floor(nombre/100)*100;
}
  if (nombre/50 != 0) {
   chk50$ = Math.floor(nombre/50);
   nombre = nombre - Math.floor(nombre/50)*50;
}
  if (nombre/20 != 0) {
   chk20$ = Math.floor(nombre/20);
   nombre = nombre - Math.floor(nombre/20)*20;
}
  if (nombre/10 != 0) {
   chk10$ = Math.floor(nombre/10);
   nombre = nombre - Math.floor(nombre/10)*10;
}
  if (nombre/5 != 0) {
   chk5$ = Math.floor(nombre/5);
   nombre = nombre - Math.floor(nombre/5)*5;
}
  if (nombre/2 != 0) {
   chk2$ = Math.floor(nombre/2);
   nombre = nombre - Math.floor(nombre/2)*2;
}
  if (nombre/1 != 0) {
   chk1$ = Math.floor(nombre/1);
   nombre = nombre - Math.floor(nombre/1)*1;
}
  if (nombre/.25 != 0) {
   chkdot25$ = Math.floor(nombre/.25);
   nombre = nombre - Math.floor(nombre/.25)*.25;
}
  if (nombre/.10 != 0) {
   chkdot10$ = Math.floor(nombre/.10);
   nombre = nombre - Math.floor(nombre/.10)*.10;
}
  if (nombre/.5 != 0) {
   chkdot5$ = Math.floor(nombre/.5);
   nombre = nombre - Math.floor(nombre/.5)*.5;
}
  if (nombre > 0) {
   chkdot5$ = chkdot5$ + 1
}
  afficheF.innerHTML = "Ton totale de items est de " + (prixFinal).toFixed(2) + "$"
var afficheMontant = document.getElementById("divAfficheMontant");
  afficheMontant.innerHTML = "Retour d'argent " + "<br>" + "Billets de 5$ : " + chk5$ + "<br>" + "Billets de 10$ : " + chk10$ + "<br>" + "Billets de 20$ : " + chk20$ + "<br>" + "Billets de 50$ : " + chk50$ + "<br>" + "Billets de 100$ : " + chk100$ + "<br>" + "2 Dollars : " + chk2$ + "<br>" + "1 Dollars : " + chk1$ + "<br>" + ".25 cent : " + chkdot25$ + "<br>" + ".10 cent : " + chkdot10$ + "<br>" + ".5 cent : " + chkdot5$;
}
