function ingresarUsuario() {
    
    let email= $("#email").val();
    let password=$("#password").val();
    
        $.ajax({
            url: "http://localhost:81/api/user/"+ email+ "/" + password,
            type: "GET",
            dataType: "json",
            success: function(respuesta){
                if(respuesta.id != null){
                    alert(`Bienvenido ${respuesta.name}`);
                    window.location.href = "menu.html";
                } else {
                    alert("No existe un usuario")
                }
            }
        });
    
}