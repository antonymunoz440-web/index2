

let boton1 = document.getElementById("btn-colchon");
let boton2 = document.getElementById("btn-comida");
let boton3 = document.getElementById("btn-golf");
let boton4 = document.getElementById("btn-olor");

boton1.addEventListener ("click",function(){
    document.body.style.backgroundImage = "URL('imagenes/probadordecolchones.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});
boton2.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/catadorcomidaperros.jpg')"
});
boton3.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/buzogolfpelotas.webp')"
});
boton4.addEventListener ("click", function(){
    document.body.style.backgroundImage = "URL('imagenes/evaluadordeolores.jpg')"
})
