fetch("../js/produit.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(tabArticles){
        console.log(tabArticles)
    })

class plomb {
    constructor(modele,image, poids, couleur, sols, msg, prix) {
        this._modele = modele;
        this._image=image;
        this._poids = poids;
        this._couleur = couleur;
        this._sols = sols
        this._msg = msg;
        this._prix = prix;
    }

    set msg(msg) {
        if (msg.lenght > 20) throw "limite de caratère dépassée";
        else this._msg = msg;
    }

    set prix(prix) {
        prix = (poids * 2)/100
        this._prix = prix;
    }

    //fromJson(json){     //a modifier
    //    this.studentId = json.studentId;
    //    this.birthday = json.birthday;
    //    this.firstname = json.firstname;
    //    this.lastname = json.lastname;
    //}
}

class panier {
    constructor(nombre, prix){
        this._nombre = nombre;
        this._prix = prix;
    }   
}

function remplirTemplate(Articles) {
    
    let template = document.getElementById('articles');
 
    
  
      for (const V of Articles) { // itère sur le tableau
        
        let clone = document.importNode(template.content, true);      // clone le template
        newContent2 = clone.firstElementChild.innerHTML // remplace {{modèle}}
        .replace(/{{modele}}/g, V.modele) // et {{couleur}} par
        .replace(/{{sols}}/g,  V.sols) 

       
    clone.firstElementChild.innerHTML = newContent2
     template.parentNode.appendChild(clone)} 
    console.log(template)
    };


async function affichage_prod() {
    const response = await fetch("../js/produit.json");
    const produits_json = await response.json();
    console.log(produits_json["produits"])
    remplirTemplate(produits_json["produits"]);
}

$(document).ready(function () {
    affichage_prod();   
    });



function getdistance() {
    let contenu_json = {};
    
    let url = "https://docs.mapbox.com/api/navigation/directions/"
    
    fetch(url)		
    .then(function(response) {	 
        return response.json(); 
    })
    .then(function(json) {
      document.getElementById("monParagraphe").textContent += json["main"]["temp"];
    });
    
}


