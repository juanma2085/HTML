function validainputs(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let ingreso=document.getElementById("login");
    let emailval=email.value.trim();
    let passwordval=password.value.trim();
    let passwordok="a12345";
    var errorf=0;

//validacion mail
if(emailval===""){
    ocErrorform(email,"Por favor ingrese su email");
    errorf=1; 
}
else if(!valEmail(emailval)){
    ocErrorform(email,"Email no valido...");
    errorf=1;
}
else{
    exitosform(email);
}
if(passwordval===""){
    ocErrorform(password,"Por favor ingrese su contraseña");
    errorf=1;
}
else if(passwordval != passwordok){
    ocErrorform(password,"Contraseña incorrecta...");
    errorf=1;
}
else {
    exitosform(password);
}
if(errorf==0){
    ingreso.addEventListener('click',function(){
        swal("ACCESO PERMITIDO..A PLATAFORMA","CLICK OK para continuar","success");
    })
}
return false;
function ocErrorform(input,message){
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    formControl.className="form-control error";
}
function exitosform(input){
    let formControl=input.parentElement;
    formControl.className="form=control success";
}
function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
}
function mostrarSeña(){
    var tipo=document.getElementById("password");
    if(tipo.type=="password"){
        tipo.type="text";
    }else{
        tipo.type="password"; 
    }
}
