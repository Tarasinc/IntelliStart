let elements = document.getElementsByClassName('myBar');
let width=  1;
let interval = setInterval(loading, 100);

function loading(){
    for(i =0; i<elements.length; i++){
        let element = elements[i];
        let value = element.getAttribute('value');
        console.log(value);
        console.log(element);
        if(width>=value){
            clearInterval(interval);
        }else{
            width++;
            element.style.width = width +'%';
        }
    }
}