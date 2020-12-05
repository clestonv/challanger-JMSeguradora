/**
1º Fui pesquisar sobre o gráfico e sobre os tipos de plantas;
2º Determinar um padrão pelo gráfico qual o width e lenght máximo e minimo de cada especie,
a partir disso cheguei nos seguintes dados abaixo:
 - Virginica: widthmax: 4.0, lenghtmax: 8
 - Vesicolor: widthmax: 3.5, lenghtmax: 7
 - Setosa: widthmax: 4.5, lenghtmax: 6
*/
//Setosa
const setWMax = 4.5
const setLMax = 6.0
//Virginica
const virgWMax = 4.0
const virgLMax = 8.0
//Vesicolor
const versWMax = 3.5
const versLMax = 7.0

/**
 
Com os dados em mãos seguiria a lógica com o primeiro IF 

Se o wid for menor que 3.5 e len menor que 7.0 entra no próximo IF que valida se
wid não é menor que 6.0
-----------
Seão se compara se wid é menor que 4.0 e se len é menor ou igual a 8 se for true entra no 
próximo IF que confirma se wid é maior 3.5
-----
Então se de false nas duas primeiras a ultima entra como TRUE
 */
function defineEspecie ( wid, len) {
    if (wid < versWMax && len < versLMax  ) {
        if (len > setLMax) return console.log("Vesicolor")    
    } else if (wid < virgWMax && len <= virgLMax  ) {
        if (wid > versWMax) {
            console.log("Virginica")
        }        
    } 
    else  {
        console.log("Vesicolor")
    }  
}

defineEspecie( 3.7, 7.6)