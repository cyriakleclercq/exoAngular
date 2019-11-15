
export class PersonneModel {
    sexe: string;
    nom: string;
    prenom: string;
    surnom: string;
    dateDeNaissance: Date;
    taille: number;

    constructor(sexe: string, nom: string, prenom: string, surnom: string, dateDeNaissance: Date, taille: number) {
        this.sexe = sexe;
        this.nom = nom;
        this.prenom = prenom;
        this.surnom = surnom;
        this.dateDeNaissance = dateDeNaissance;
        this.taille = taille;
    }

}