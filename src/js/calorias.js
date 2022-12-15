// Calculadora Calorias e IMC

let sexo,
    peso,
    altura,
    edad,
    consulta,
    imc;

const calculadoraCaloriasImc = (sexo, peso, altura, edad, consulta) => {

    sexo = prompt('Cuál es tu genero (masculino o femenino)?').toLowerCase();
    peso = prompt('Cuál es tu peso (en KG)?');
    altura = prompt('Cuál es tu altura (en CM)?');
    edad = prompt('Cuál es tu edad?');

    switch (sexo){
        case 'femenino':
            alert('Tus calorias basales son: ' + (665 + (9.5 * peso) + (1.8 * altura) - (4.6 * edad)).toFixed(0));
            break;

        case 'masculino':
            alert('Tus calorias basales son: ' + (66.4 + (13.75 * peso) + (5 * altura) - (6.7 * edad)).toFixed(0));
            break;

        default:
            alert('Intentar de nuevo, valores incorrectos');
            break;
    }

    consulta = prompt('Deseas saber tu IMC? (si o no)'.toLowerCase());
    
    switch (consulta) {
    
        case 'si':

            imc = () =>{

                resultadoImc = ((peso / ((altura/100)*(altura/100))).toFixed(0));
                
                if(resultadoImc < 18.5){
                    alert(`Tu IMC es ${resultadoImc}, corresponde a rango de peso insuficiente` )
                } else if (resultadoImc <= 24.9){
                    alert(`Tu IMC es ${resultadoImc}, corresponde a rango de peso normal` )
                } else if (resultadoImc <= 29.9){
                    alert(`Tu IMC es ${resultadoImc}, corresponde a rango de sobrepeso` )
                } else {
                    alert(`Tu IMC es ${resultadoImc}, corresponde a rango de peso de obesidad` )
                };
                
            }
            imc();
            break;
    
        case 'no':
            alert('Gracias por usar la aplicacion')
            break;
    }

};

calculadoraCaloriasImc();


// Contador de calorias en base a dieta 2000 calorias

let sumaCalorias = 0,
    totalComidas = 0,
    maxCalorias = 2000,
    comida = prompt('Ingrese la comida:'),
    calorias = parseFloat(prompt('Ingrese la cantidad de calorias:'));



while ((comida != 'ESC') && (comida != null)){
    sumaCalorias = sumaCalorias + calorias;
    console.log('Suma calorias: ' + sumaCalorias);

    if(sumaCalorias >= maxCalorias ){

        alert('Llegaste al limite de calorias diarias y con una diferencia de: ' + (sumaCalorias - maxCalorias) + ' calorias en base al maximo establecido')
        break;  
    }

    totalComidas++;
    console.log('Total comidas: ' + totalComidas);
    comida = prompt('Ingrese la comida:'),
    calorias = parseFloat(prompt('Ingrese la cantidad de calorias:'));

}

