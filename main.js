// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

class Personnage {
    constructor(age, nom, ville) {
        this.age = age,
        this.nom = nom,
        this.ville = ville
        this.sePresenter = () => {
            console.log(`Bonjour, je m'appelle ${this.nom}`);
        }
    }
}

let cactus = new Personnage (24, "Cactus", "Anderlecht");
let mihai = new Personnage (23, "Mihai", "Chez sa copine");

cactus.sePresenter();
mihai.sePresenter();