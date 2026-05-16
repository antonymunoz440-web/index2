

let boton1 = document.getElementById("btn-colchon");
let boton2 = document.getElementById("btn-comida");
let boton3 = document.getElementById("btn-golf");
let boton4 = document.getElementById("btn-olor");

boton1.addEventListener ("click",function(){
    document.body.style.backgroundImage = "URL('imagenes/probadordecolchones.jpg')";
    
});
boton2.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/catadorcomidaperros.jpg')"
});
boton3.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/buzogolfpelotas.jpg')"
});
boton4.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/evaluadordeolores.jpg')"
    
})
