function virar(){
    alert('Virando as cartas');
    var carta = document.getElementsByClassName('carta');
    for(var i=0; i<carta.length; i++){
        carta[i].classList.add('virada');
    }
}

setTimeout(virar(), 10000);