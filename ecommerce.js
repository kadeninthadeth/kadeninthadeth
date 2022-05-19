//les prix des items
var tblPrix = [24.99, 19.99, 19.99, 79.99, 4.99];
var prixFinal = 0;
//taxe de ontario
var taxON = 1.13;
//taxe de quebec
var taxQC = 1.15;
//fonction en cliquant Terminer et payer
function achatItem() {
var nombre = document.getElementById("txtPaye").value;
prixFinal = 0;
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
//l'affiche de argent en retour
var afficheF = document.getElementById("divAfficheF");
  afficheF.innerHTML = "Ton totale de items est de " + (prixFinal).toFixed(2) + "$";
//les donnees de taxes avec les taxes de provinces
var afficheT = document.getElementById("divAfficheT");
var radTaxes = document.getElementsByName("Taxes");
  if(radTaxes[0].checked) {
    afficheT.innerHTML = "Le prix incluant les taxes " + (prixFinal*taxON).toFixed(2) + "$ (ON)"
} else if(radTaxes[1].checked) {
    afficheT.innerHTML = "Le prix incluant les taxes " + (prixFinal*taxQC).toFixed(2) + "$ (QC)"
} else {
    afficheT.innerHTML = "<b> Selectionner ton province </b>"
}
//pour affichier combien de item que tu achete
var afficheH = document.getElementById("divAfficheH");
var afficheP = document.getElementById("divAfficheP");
var afficheC = document.getElementById("divAfficheC");
var afficheS = document.getElementById("divAfficheS");
var afficheHat = document.getElementById("divAfficheHat");
//pour montrer combien de hoodies il y a
if (!chkH[0].checked) {
  var qteH = document.getElementById("selHoodie").value;
  afficheH.innerHTML = " "
} else {
  afficheH.innerHTML = "x" + qteH + " Hoodie. " + "(" + qteH*tblPrix[0] + "$)"
}
//pour montrer combien de pantalons il y a
if (!chkP[0].checked) {
  afficheP.innerHTML = " "
} else {
  afficheP.innerHTML = "x" + qteP + " Pantalon. " + "(" + qteP*tblPrix[1] + "$)"
}
//pour montrer combien de chandails il y a
if (!chkC[0].checked) {
  afficheC.innerHTML = " "
} else {
  afficheC.innerHTML = "x" + qteC + " Chandail. " + "(" + qteC*tblPrix[2] + "$)"
}
//pour montrer combien de souliers il y a
if (!chkS[0].checked) {
  afficheS.innerHTML = " "
} else {
  afficheS.innerHTML = "x" + qteS + " Soulier. " + "(" + qteS*tblPrix[3] + "$)"
}
//pour montrer combien de chapeau il y a
if (!chkHat[0].checked) {
  afficheHat.innerHTML = " "
} else {
  afficheHat.innerHTML = "x" + qteHat + " Chapeau. " + "(" + qteHat*tblPrix[4] + "$)"
}
//les livraisons des achats de ontario et quebec
var afficheLivraison = document.getElementById("divAfficheLivraison");
var radLivraison = document.getElementsByName("Livraison");
  if (radLivraison[0].checked) {
    var pTaxON = (prixFinal*taxON)
    afficheLivraison.innerHTML = "Tes items viennent dans deux semaines, le prix est maintenent " + (pTaxON + 30).toFixed(2) + "$";
}
  if (radLivraison[1].checked) {
    var pTaxQC = (prixFinal*taxQC)
    afficheLivraison.innerHTML = "Tes items viennent dans 3 jours, ton prix est maintenent " + (pTaxQC + 10).toFixed(2) + "$";
}
  if (!radLivraison[0].checked && !radLivraison[1].checked) {
    afficheLivraison.innerHTML = "<b> Choisir le livraison de ton preference... </b>"
  }
//code pour chercher l'argent pour retourner
var chk100$ = 0;
var chk50$ = 0;
var chk20$ = 0;
var chk10$ = 0;
var chk5$ = 0;
var chk2$ = 0;
var chk1$ = 0;
var chkdot25$ = 0;
var chkdot10$ = 0;
var chkdot5$ = 0;
var pTaxON = (prixFinal*taxON);
var pTaxQC = (prixFinal*taxQC);
var nombreRecu = document.getElementById("txtPaye").value;
//pour montrer le montant de redonner l'argent
  if (nombreRecu >= prixFinal && radTaxes[0].checked && radLivraison[1].checked) {
    nombre = nombreRecu - (pTaxON + 10).toFixed(2);
  }
  if (nombreRecu >= prixFinal && radTaxes[1].checked && radLivraison[0].checked) {
    nombre = nombreRecu - (pTaxQC + 30).toFixed(2);
  }
  if (nombreRecu >= prixFinal && radTaxes[0].checked && radLivraison[0].checked) {
    nombre = nombreRecu - (pTaxON + 30).toFixed(2);
  }
  if (nombreRecu >= prixFinal && radTaxes[1].checked && radLivraison[1].checked) {
    nombre = nombreRecu - (pTaxQC + 10).toFixed(2);
  }
//vérifier s'il faut redonner un billet de 100$
  if (nombre/100 != 0) {
var chk100$ = 100;
   chk100$ = Math.floor(nombre/100);
   nombre = nombre - Math.floor(nombre/100)*100;
}
//vérifier s'il faut redonner un billet de 50$
  if (nombre/50 != 0) {
var chk50$ = 50;
   chk50$ = Math.floor(nombre/50);
   nombre = nombre - Math.floor(nombre/50)*50;
}
//vérifier s'il faut redonner un billet de 20$
  if (nombre/20 != 0) {
var chk20$ = 20;
   chk20$ = Math.floor(nombre/20);
   nombre = nombre - Math.floor(nombre/20)*20;
}
//vérifier s'il faut redonner un billet de 10$
  if (nombre/10 != 0) {
var chk10$ = 10;
   chk10$ = Math.floor(nombre/10);
   nombre = nombre - Math.floor(nombre/10)*10;
}
//vérifier s'il faut redonner un billet de 5$
  if (nombre/5 != 0) {
var chk5$ = 5;
   chk5$ = Math.floor(nombre/5);
   nombre = nombre - Math.floor(nombre/5)*5;
}
//vérifier s'il faut redonner un 2 dollars
  if (nombre/2 != 0) {
var chk2$ = 2;
   chk2$ = Math.floor(nombre/2);
   nombre = nombre - Math.floor(nombre/2)*2;
}
//vérifier s'il faut redonner un 1 dollars
  if (nombre/1 != 0) {
var chk1$ = 1;
   chk1$ = Math.floor(nombre/1);
   nombre = nombre - Math.floor(nombre/1)*1;
}
//vérifier s'il faut redonner un 25 cout
  if (nombre/.25 != 0) {
var chkdot25$ = .25;
   chkdot25$ = Math.floor(nombre/.25);
   nombre = nombre - Math.floor(nombre/.25)*.25;
}
//vérifier s'il faut redonner un 10 cout
  if (nombre/.10 != 0) {
var chkdot10$ = .10;
   chkdot10$ = Math.floor(nombre/.10);
   nombre = nombre - Math.floor(nombre/.10)*.10;
}
//vérifier s'il faut redonner un 5 cout
  if (nombre/.5 != 0) {
var chkdot5$ = .5;
   chkdot5$ = Math.floor(nombre/.5);
   nombre = nombre - Math.floor(nombre/.5)*.5;
}
//vérifier s'il faut redonner un 5 cout
  if (nombre > 0) {
   chkdot5$ = chkdot5$ + 1
}
var afficheMontant = document.getElementById("divAfficheMontant");
    afficheMontant.innerHTML = "Retour d'argent " + "<br>" + "Billets de 5$ : " + chk5$ + "<br>" + "Billets de 10$ : " + chk10$ + "<br>" + "Billets de 20$ : " + chk20$ + "<br>" + "Billets de 50$ : " + chk50$ + "<br>" + "Billets de 100$ : " + chk100$ + "<br>" + "2 Dollars : " + chk2$ + "<br>" + "1 Dollars : " + chk1$ + "<br>" + ".25 cent : " + chkdot25$ + "<br>" + ".10 cent : " + chkdot10$ + "<br>" + ".5 cent : " + chkdot5$;
}
