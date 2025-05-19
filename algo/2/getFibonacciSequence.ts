/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // Ton code ici !

  function getFibonacciSequence(n) {
    if (n <= 0) {
      return []; // Si n est 0 ou négatif, on retourne un tableau vide
    }

    const sequence = [0]; // On commence la suite avec 0

    if (n === 1) {
      return sequence; // Si on veut juste 1 nombre, on renvoie [0]
    }

    sequence.push(1); // On ajoute 1, donc maintenant la suite est [0, 1]

    for (let i = 2; i < n; i++) {
      const next = sequence[i - 1] + sequence[i - 2]; // somme des 2 derniers
      sequence.push(next); // on ajoute ce nombre à la suite
      //On commence à i = 2 car les deux premiers nombres (0, 1) sont déjà là.
      //À chaque tour:
      //On calcule le suivant en faisant la somme des deux derniers nombres.
      //On ajoute ce nouveau nombre à notre tableau.
    }

    return sequence; // On retourne la suite complète
  }
}

export default getFibonacciSequence;
