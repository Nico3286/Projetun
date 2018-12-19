/**
 * @name hello.node
 * @desk Juste pour les algorithmes
 * @autor Aélion - Déc. 2018
 * @version 1.0.0
 */


/**
* Retourne la valeur du minimum entre deux valeurs
* @param {*} currentValue Valeur minimum 
* @param {*} value Valeur lue dans le tableau
* @return number La valeur la plus basse entre currentValue et value 
*/
function Min(currentValue, value) {
    //console.log('Compare : ' + currentValue + ' à ' + value);
    if (value < currentValue) {
        return value
    }
    else {
        return currentValue
    }
}

/**
 * Retourne la valeur du maximum  entre deux valeurs
 * @param {*} currentValue Valeur maximum
 * @param {*} value Valeur lue dans le tableau
 * @return number La valeur la plus élevée entre currentValue et value 
 */
function Max(currentValue, value) {
    //console.log('Compare : ' + currentValue + ' à ' + value);
    if (value > currentValue) {
        return value
    }
    else {
        return currentValue
    }
}


/**
 * Retourne la valeur du maximum et du minimum de deux valeurs
 * @param {*} currentValue Valeur maximum
 * @param {*} value Valeur lue dans le tableau
 * @param {*} wantmax
 * @return number La valeur la plus élevée et la plus basse entre currentValue et value 
 */
function MaxorMin(currentValue, value, wantMax = true) {
    //console.log('Compare : ' + currentValue + ' à ' + value);
    if (wantMax) {
        return Max(currentValue, value)
    }

    return Min(currentValue, value)

}

/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];

/**
 * @var number
 * Min du Tableau
 */
let min = tablo[0];

/**
 * @var number
 * Min du Tableau
 */
let minbis = tablo[0];

/**
 * @var number
 * Min du Tableau
 */
let x = 0;

sdfdf

// Boucle de parcours du tableau
for (let i = 0; i < tablo.length; j++) {
   
min = tablo[i];
    
    // Boucle de parcours du tableau
    for (let j = i; j < tablo.length; i++) {
        
        minbis = MaxorMin(min, tablo[j], false);
    }
    
        for (let k = i < tablo.length; k++) {
            if (tablo [k] = minbis){
                x = tablo[k] ;
                tablo[k] = tablo[i]
                tablo[i] = x; 
            }
                
        }    
        
    
    

        
            }


    



// Boucle de parcours du tableau
//for (let i = 0; i < tablo.length; i++) {
    
   // console.log(tablo[i]);

//}
