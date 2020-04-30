let today = new Date(); //data completa

let month = new Array();
month[0] = "ianuarie";
month[1] = "februarie";
month[2] = "martie";
month[3] = "aprilie";
month[4] = "mai";
month[5] = "iunie";
month[6] = "iulie";
month[7] = "august";
month[8] = "septembrie";
month[9] = "octombrie";
month[10] = "noiembrie";
month[11] = "decembrie";

let m = today.getMonth();  //luna cu litere

let date = "Astazi este " + today.getDate() + " " + month[m] + ", " + today.getFullYear();
document.getElementsByClassName('date')[0].textContent = date;



document.getElementById('main-unit').addEventListener('keyup',()=>{

    let m = document.querySelector('.main-unit-options');
    //select pe optiunea initiala
    let s = document.querySelector('.second-unit-options');
    //select pe optiunea convertita
    let mainUnit = m.options[m.selectedIndex].textContent.toLowerCase();
    let secondUnit = s.options[s.selectedIndex].textContent.toLowerCase();
    //return input pe select

    let numberTyped = document.getElementById('main-unit').value;

    console.log(numberTyped);
   

    numberTyped = parseInt(numberTyped);
    console.log(typeof numberTyped);
    if(mainUnit === 'celsius'){
        if(secondUnit === 'kelvin'){
            document.getElementById('second-unit').value = numberTyped + 273.15;
        }
        else if(secondUnit === 'farenheight'){
            document.getElementById('second-unit').value = (numberTyped * 9/5)+32;

        } else {
            document.getElementById('second-unit').value = numberTyped;

        }
    }

    else if(mainUnit=== 'kelvin')
    {
        if(secondUnit === 'celsius'){
            document.getElementById('second-unit').value = numberTyped - 273.15;
        } else if(secondUnit === 'farenheight'){
            document.getElementById('second-unit').value = (numberTyped * 9/5)+32;

        } else {
            document.getElementById('second-unit').value = numberTyped;
    }
    
}

else if(mainUnit=== 'farenheight')
{
    if(secondUnit === 'celsius'){
        document.getElementById('second-unit').value = (numberTyped - 32)*5/9;
    } else if(secondUnit === 'kelvin'){
        document.getElementById('second-unit').value = (numberTyped -32)*5/9+273.15;

    } else {
        document.getElementById('second-unit').value = numberTyped;
}
}

Array.from(document.querySelectorAll('.reset')).forEach(select=>{
    select.addEventListener('change', ()=>{
        document.getElementById('main-unit').value= '';
        document.getElementById('second-unit').value= '';
    })
})
});
