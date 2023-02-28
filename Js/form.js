
var btnAbrirPopup=document.getElementById('correo')
var overlay=document.getElementById('overlay');
var btnCerrarPopup=document.getElementById('btn-cerrar-popup');

document.getElementById('llamada').addEventListener('click',llamar);
document.getElementById('posicion').addEventListener('click',posicion);
document.getElementById('correo').addEventListener('click',correo);
document.getElementById('linkedin').addEventListener('click',linkedin);
document.getElementById('user_photo').addEventListener('click',user);



btnAbrirPopup.addEventListener('click',function(){
    overlay.classList.add('active');

} );
btnCerrarPopup.addEventListener('click',function(){
    overlay.classList.remove('active');
} );



function llamar(){
    document.getElementById("user_title").innerHTML="+54 1121812283"; 
    
};
function posicion(){
    document.getElementById("user_title").innerHTML="Ricon de luz 4528";
    
    
};function correo(){
    document.getElementById("user_title").innerHTML="NikolaTesla_369@gmail.com";
    
};function linkedin(){
    document.getElementById("user_title").innerHTML="www.linkedin.com/in/nikola-tesla";

    
};function user(){
    document.getElementById("user_title").innerHTML="Nicolas Crooked";
    
};




