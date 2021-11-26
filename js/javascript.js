

function converter (){
    let select = parseInt(document.getElementById('seleciona-temperatura').value);
    // console.log(select);
    let temperatura = document.getElementById('temperatura').value; 
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // if(select == 0){
    //     resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK}K`);
    // } else if(select == 1){
    //     resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°Fh`);
    // }
    switch(select){
        case 0:
            resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK}K`);
        break;

        case 1:
            resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°Fh`);
        break;

        default:
            resultado.innerHTML = (`erro`);
        break;
        
    }
    //  console.log(temperatura)
    
    // resultado.innerHTML = `Sua temperatura atual é de ${temperatura}°C ou ${formulaF} °Fh</strong>`;
}