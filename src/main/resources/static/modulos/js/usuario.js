$(function(){
    listar();    
    eliminar();
    mostarEditar();
    editar();
    
});

function listar(){
    let url = 'http://localhost:81/api/user/all';
    $.getJSON(url).done(function(data){
        //console.log(data);
        tbody = $('#tabla-usuario tbody');        
        $.each(data,function(index,item){
            let row = `
            <tr data-id=${item.id}>
                <td>${item.identification}</td>
                <td>${item.name}</td>
                <td>${item.address}</td>
                <td>${item.cellPhone}</td>
                <td>${item.email}</td>
                <td>${item.zone}</td>
                <td>${item.type}</td>                
                <td> <button type="button" class="login100-form-btn editar" style="height: auto; ">Editar</button></td>
                <td><button type="button" class="login100-form-btn eliminar" style="height: auto; ">Eliminar</button></td>
            </tr>`;

            tbody.append(row);
        });
    });
}

function eliminar(){
    
    $('#tabla-usuario tbody').on('click','.eliminar', function(ev){
        ev.preventDefault();
        let tr = $(this).closest('tr');
        let id = tr.data('id');
        //console.log(id);        
        let myurl = 'http://localhost:81/api/user/'+id;
        $.ajax({
            url:myurl,
            type:'DELETE',
            success:function(result){
                tr.remove();
            }
        });    
    });
}

function mostarEditar(){
    $('#tabla-usuario tbody').on('click','.editar', function(ev){
        ev.preventDefault();
        let tr = $(this).closest('tr');
        let id = tr.data('id');
        let myurl = 'http://localhost:81/api/user/'+id;

        $.getJSON(myurl)
        .done(function(data){
            
            $('#einputID').val(data.id);
            $('#einputIdentificacion').val(data.identification);
            $('#ename').val(data.name);
            $('#eaddress').val(data.address);  
            $('#ecellPhone').val(data.cellPhone);
            $('#eemail').val(data.email);
            $('#ezone').val(data.zone);  
            
            var myModal = new bootstrap.Modal(document.getElementById('ModalEditar'));
            myModal.show()
        });
        
    });
}

function editar(){
    $("#edit-btn").on('click',function(ev){
        let myurl = 'http://localhost:81/api/user/update';

        let inputId = $('#einputID').val();
        let inputIdentificacion = $('#einputIdentificacion').val();   
        let inputname = $('#ename').val();
        let inputaddress = $('#eaddress').val(); 
        let inputcellPhone = $('#ecellPhone').val();
        let inputemail = $('#eemail').val(); 
        let inputzone = $('#ezone').val(); 

        if (
            inputId == "" ||
            inputIdentificacion == "" ||
            inputname == "" ||
            inputaddress == "" ||
            inputcellPhone == "" ||
            inputemail == "" ||
            inputzone == "" 
        ){
            alert("Debe diligenciar todos los campos")
            return
        }else{
            $.ajax({
                url:myurl,
                type:'PUT',
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify({ id: inputId, identification: inputIdentificacion, name: inputname, address: inputaddress, cellPhone: inputcellPhone, email: inputemail, zone: inputzone }), 
                success:function(result){
                    alert("Edicion realizada con exito!!!")
                    window.location.reload() 
                }
            });
        }
    });    
    
}
