  
  //fonction pou rla rable de multplication
  function afficherTable() {
  // Récupérer le nombre entré par l'utilisateur
  var nombre = document.getElementById("nombre").value;
  var resultat = "";
  
  // Vérifier si l'utilisateur a saisi un nombre
  if (nombre !== "") {
      // Générer la table de multiplication
      for (var i = 0; i <= 12; i++) {
          resultat += nombre + " x " + i + " = " + (nombre * i) + "<br>";
      }
  } else {
      resultat = "Veuillez entrer un nombre.";
  }

  // Afficher le résultat dans la page web
  document.getElementById("resultat").innerHTML = resultat;
}
 