function registrarUsuario(){
    let myData = {
        id: $("#identificacion").val(),
        identification: $("#identificacion").val(),
        name: $("#nombre").val(),
        address: $("#address").val(),
        cellPhone: $("#cellPhone").val(),
        email: $("#email").val(),
        password: $("#password1").val(),
        zone: $("#zone").val(),
        type: $("#typeUser").val(),
    };

    let confirmarpass = $("#password2").val();
    if (
        myData.email == "" ||
        myData.name == "" ||
        myData.password == "" ||
        confirmarpass == ""
    ) {
        alert("Debe diligenciar todos los campos")
        return
    } else {
        let dataToSend = JSON.stringify(myData);

        if (myData.password == confirmarpass){
            consultarCorreo(dataToSend);
        } else {            
            alert("No coinciden las contraseñas.");             
            return;
        }
    }
}

function consultarCorreo(dataToSend){
    let email = $("#email").val();

    $.ajax({
        url: "http://localhost:81/api/user/emailexist/" + email,
        type: "GET",
        dataType: "json",
        success: function (respuesta){
            if (respuesta){                
                alert("E-mail ya existe.")                
                return;
            }else {
                crearUsuario(dataToSend);
            }
        },
        error: function(e){
            alert("error" + e)
        },
    });
}

function crearUsuario(dataToSend){
    console.log(dataToSend);
    $.ajax({
        url: "http://localhost:81/api/user/new",
        type: "POST",
        data: dataToSend,
        dataType: "json",
        contentType: "application/json",
        complete: function (respuesta){
            alert("Cuenta creada de forma correcta")
            window.location.href = "index.html";
        }
    });
}