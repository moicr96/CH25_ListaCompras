// El código va aquí -> 
let txtNombre=document.getElementById("Name");
let txtNumber=document.getElementById("Number");

let btnAgregar=document.getElementById("btnAgregar");
let btnbtnClear=document.getElementById("btnClear");

let alertValidaciones=document.getElementById("alertValidaciones");
let alertValidacionesTexto=document.getElementById("alertValidacionesTexto");
btnbtnClear.addEventListener("click",function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
})
btnAgregar.addEventListener("click",function(event){
    event.preventDefault();
    // console.log("borde: ",txtNombre.style.border);
    //txtNombre.value=txtNombre.value.trim();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista= "los sig campos deben ser llenados correctamente: <ul>";
    if(txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista+="<li> Se debe escribir un nombre valido</li>";
        // alertValidacionesTexto.innerHTML="Se debe escribir un nombre valido";
        alertValidaciones.style.display="block";
    }else {
        txtNombre.style.border="";
    } //if txtNombre
    if(txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista+="<li> Se debe escribir una cantidad valida</li>";
        // alertValidacionesTexto.innerHTML+="Se debe escribir una cantidad valido";
        alertValidaciones.style.display="block";
    }else {
        txtNumber.style.border="";
    }//if txtNumber
    lista+="</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
})

txtNumber.addEventListener("blur",function(event){
    event.preventDefault();
    txtNumber.value=txtNumber.value.trim();
});

txtNombre.addEventListener("blur",function(event){
    event.preventDefault();
    txtNombre.value=txtNombre.value.trim();
});