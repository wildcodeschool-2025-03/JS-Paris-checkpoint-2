/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  // Ton code ici !

  function countLetters(str, letter) {
    let count = 0; // on commence le compteur à 0
    for (const char of str) {
      // on regarde chaque caractère de la string
      if (char === letter) {
        // si c’est la lettre qu’on cherche
        count++; // on ajoute 1 au compteur
      }
    }
    return count; // on renvoie le total trouvé
  }
}

export default countLetters;
