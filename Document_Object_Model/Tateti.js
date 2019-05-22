var cuadro = document.querySelectorAll('td')


for (i=0; i<9; i++) {
    var cuadroE = cuadro[i];
    cuadroE.addEventListener('click', function(){
        this.textContent = 'X';
    })
    cuadroE.addEventListener('dblclick', function(){
        this.textContent = 'O';
    })
    // console.log("hecho " + i);
}

var boton = document.querySelector("#restart")

boton.addEventListener('click', function(){
    for (i=0; i<9; i++) {
        var cuadroEE = cuadro[i];
        cuadroEE.textContent = '';
    }
})




