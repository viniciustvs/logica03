

function converter (){
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    // console.log(select);
    let temperatura = parseInt(document.getElementById('temperatura').value); 
    let formulaF = (parseInt(temperatura) * 1.8) + 32;
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // if(select1 === 0 || select2 === 0){
    //     let nome = 'Kelvin';
    // } else if(select1 === 1 || select2 === 1){
    //     let nome = '°Fahrenheit';
    // } else if(select1 === 2 || select2 ===2){
    //     let nome = '°Celsius';
    // }
    
    
    if(select1 === 0 && select2 === 0 || select1 === 1 && select2 === 1 || select1 === 2 && select2 === 2){
        switch(select1 || select2){
            case 0:
                resultado.innerHTML = (`A temperatura em Kelvin é ${temperatura}K`)
            break;

            case 1:
                resultado.innerHTML = (`A temperatura em °Farenheit é ${temperatura}`)
            break;

            case 2:
                resultado.innerHTML = (`A temperatura em °Celsius é ${temperatura}`)
            break;
        }
        

        
    } else if(select1 === 0 && select2 === 1){
        let formulaF = temperatura - 459.67;
        resultado.innerHTML = (`${temperatura}K em Fahrenheit é ${formulaF}°Fahrenheit`);
    } else if(select1 === 0 && select2 === 2){
        let formulaC = temperatura - 273;
        resultado.innerHTML = (`${temperatura}K em Celsius é ${formulaC}°Celsius`);
    } else if(select1 === 1 && select2 === 0){
        let formulaFK = (temperatura + 459.67)* 5/9;
        resultado.innerHTML = (`${temperatura}°F em Kelvin é ${formulaFK}Kelvin`);
    } else if(select1 === 1 && select2 === 2){
        let formulaFC = (parseInt(temperatura) - 32) / 1.8;
        resultado.innerHTML = (`${temperatura}°F em Celsius é ${formulaFC}°Celsius`);
    } else if(select1 === 2 && select2 === 0){
        let formulaCK = parseInt(temperatura) + 273;
        resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaCK}K`);
    }else if(select1 === 2 && select2 === 1){
        let formulaCF = (parseInt(temperatura) * 1.8) + 32;
        resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaCF}F°`);
    }
    // // switch(select1){
    // //     case 0:
    // //         resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK}K`);
    // //     break;

    // //     case 1:
    // //         resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°Fh`);
    // //     break;

    // //     default:
    // //         resultado.innerHTML = (`erro`);
    // //     break;
    //     }
}
