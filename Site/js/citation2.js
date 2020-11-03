
/* Etape 2 : des citations configurables

Vous souhaitez maintenant aller plus loin et proposer les options suivantes :

Choisir le nombre de citations générées (de 1 à 5)

Choisir entre 2 types de générateurs de citations (vous devrez donc avoir 2 ensembles 
de phrases)

Une fois les citations générées, proposer de générer de nouvelles citations ou d'arrêter 
là le programme

Adaptez le programme pour qu'il puisse offrir ces fonctionnalités. A vous de jouer !

*/

// Déclaration des variables pour les deux générateurs de citation
let citationPhiloDebut = ["La vie sans musique,", "On ne peut comprendre la vie", "Etre libre,", "Il y a deux façons de se tromper,", "Faire le bien sans chercher de récompense,"];
let citationPhiloMilieu = ["est tout simplement","qu'en regardant en arrière,","ce n'est pas faire ce que l'on veut,","l'une est de croire ce qui n'est pas","fuir le mal sans craindre le châtiment"];
let citationPhiloFin = ["une erreur, une fatique, un exil.","on ne peut la vivre qu'en regardant en avant.","mais c'est vouloir ce que l'on peut.","l'autre est de refuser de croire ce qui est.","homme rare sous le ciel."];


let citationFilmDebut = ["L'ennemi est dangereux Maverick", "Les vieux rêves étaient des bons rêves", "Allez, bande de macaques" , "C'est coquet chez toi", "Toute action entraine une réaction"];
let citationFilmMilieu = ["mais toi, t'es pire que l'ennemi", "ils ne se sont pas réalisés", "si vous avez envie de vivre", "j'ai un goût de chiottes", "et une réaction de manouches"];
let citationFilmFin = ["tu es dangereux!", "mais je suis content de les avoir eus!", "battez-vous!", "c'est pour ca que tu me plais!", "ça fait mal!"];


//Création de la classe citation
class Citation{
    constructor(citationPhiloDebut, citationPhiloMilieu, citationPhiloFin, citationFilmDebut, citationFilmMilieu, citationFilmFin) {
        this.citationPhiloDebut = citationPhiloDebut;
        this.citationPhiloMilieu = citationPhiloMilieu;
        this.citationPhiloFin = citationPhiloFin;
        this.citationFilmDebut = citationFilmDebut;
        this.citationFilmMilieu = citationFilmMilieu;
        this.citationFilmFin = citationFilmFin;
    }
    //Méthode pour le recherche aléatoire dans les tableaux
    alea(tableau){
        let aleatoire = Math.floor(Math.random() * tableau.length);
        return aleatoire;
    }
    //Méthode pour la création de la citation
    creaCitation(choix){
        if (choix === "1") {
            let phrase = this.citationPhiloDebut[this.alea(this.citationPhiloDebut)] + " " + this.citationPhiloMilieu[this.alea(this.citationPhiloMilieu)] + " " + this.citationPhiloFin[this.alea(this.citationPhiloFin)];
            return phrase
            
        } 
        
        else {
            let phrase = this.citationFilmDebut[this.alea(this.citationFilmDebut)] + " " + this.citationFilmMilieu[this.alea(this.citationFilmMilieu)] + " " + this.citationFilmFin[this.alea(this.citationFilmFin)];
            return phrase
        
        }
        
    }    

}


// Aller chercher les id's pour pouvoir récuperer les valeurs et faire la boucle pour le nombre de citations
document.getElementById("execution").onclick = () => {
    let choix = document.getElementById("selectType").value;
    let nbreCitation = document.getElementById("selectNbre").value;
    let generateur = document.getElementById("generateur");
    let main = document.getElementById("divPrincipale");
    let citationFinale = new Citation(citationPhiloDebut, citationPhiloMilieu, citationPhiloFin, citationFilmDebut, citationFilmMilieu, citationFilmFin);
    
    generateur.innerHTML = " ";

    for (let i = 0; i < nbreCitation; i++) {
        let p = document.createElement("p");
        p.innerHTML = citationFinale.creaCitation(choix);
        generateur.appendChild(p);  
             
    }
    let dialogue = prompt("Voulez-vous continuer? 1 - Pour continuer 2 - Pour quitter"); 

    if (dialogue === "1"){
        generateur.innerHTML = " ";
    } else if (dialogue === "2") {
        main.style.display = "none";
        generateur.innerHTML = "Merci d'avoir joué! A bientôt!";
    }
}











