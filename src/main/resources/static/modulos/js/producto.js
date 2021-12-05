$(function(){
    listar();
    crear();
    eliminar();
    mostarEditar();
    editar();
});

function listar(){
    let url = 'http://localhost:81/api/cookware/all';
    $.getJSON(url).done(function(data){
        //console.log(data);
        tbody = $('#tabla-producto tbody');        
        $.each(data,function(index,item){
            let row = `
            <tr data-id=${item.reference}>
                <td>${item.reference}</td>
                <td>${item.brand}</td>
                <td>${item.category}</td>
                <td>${item.materiales}</td>
                <td>${item.dimensiones}</td>
                <td>${item.description}</td>
                <td>${item.availability}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.photography}</td>
                <td> <button type="button" class="login100-form-btn editar" style="height: auto; ">Editar</button></td>
                <td><button type="button" class="login100-form-btn eliminar" style="height: auto; ">Eliminar</button></td>
            </tr>`;

            tbody.append(row);
        });
    });
}

function crear(){
    $("#add-btn").on('click',function(ev){        
        ev.preventDefault();
        let inputreference = $('#reference').val();
        let inputbrand = $('#brand').val();   
        let inputcategory = $('#category').val();
        let inputmateriales = $('#materiales').val(); 
        let inputdimensiones = $('#dimensiones').val();
        let inputdescription = $('#description').val(); 
        let inputavailability = $('#availability').val();
        let inputprice = $('#price').val(); 
        let inputquantity = $('#quantity').val();
        let inputphotography = $('#photography').val();  

        if (
            inputreference == "" ||
            inputbrand == "" ||
            inputcategory == "" ||
            inputmateriales == "" ||
            inputdimensiones == "" ||
            inputdescription == "" ||
            inputavailability == "" ||
            inputprice == "" || 
            inputquantity == "" ||
            inputphotography == "" 
        ){
            alert("Debe diligenciar todos los campos")
            return
        }else{
            let url = 'http://localhost:81/api/cookware/new';
            $.ajaxSetup({
                contentType: "application/json; charset=utf-8"
            });

            $.post( url, JSON.stringify({ reference: inputreference, brand: inputbrand, category: inputcategory, materiales: inputmateriales, dimensiones: inputdimensiones, description: inputdescription, availability: inputavailability, price: inputprice, quantity: inputquantity, photography: inputphotography }) )
            .done(function(item){                        
                alert("Producto creado con exito!!!")
                window.location.reload() 
            })
            .fail(function(){
                alert("ERROR! El producto no se pudo crear correctamente");            
            });
        }
    });    
}

function eliminar(){
    
    $('#tabla-producto tbody').on('click','.eliminar', function(ev){
        ev.preventDefault();
        let tr = $(this).closest('tr');
        let id = tr.data('id');
        console.log(id);        
        let myurl = 'http://localhost:81/api/cookware/'+id;
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
    $('#tabla-producto tbody').on('click','.editar', function(ev){
        ev.preventDefault();
        let tr = $(this).closest('tr');
        let id = tr.data('id');
        let myurl = 'http://localhost:81/api/cookware/'+id;

        $.getJSON(myurl)
        .done(function(data){
            
            $('#einputID').val(data.reference);
            $('#ebrand').val(data.brand);
            $('#ecategory').val(data.category);  
            $('#emateriales').val(data.materiales);
            $('#edimensiones').val(data.dimensiones);
            $('#edescription').val(data.description);  
            $('#eavailability').val(data.availability);
            $('#eprice').val(data.price);
            $('#equantity').val(data.quantity);   
            $('#ephotography').val(data.photography);              
            
            var myModal = new bootstrap.Modal(document.getElementById('ModalEditar'));
            myModal.show()
        });
        
    });
}

function editar(){
    $("#edit-btn").on('click',function(ev){
        let myurl = 'http://localhost:81/api/cookware/update';

        let inputreference = $('#einputID').val();
        let inputbrand = $('#ebrand').val();   
        let inputcategory = $('#ecategory').val();
        let inputmateriales = $('#emateriales').val(); 
        let inputdimensiones = $('#edimensiones').val();
        let inputdescription = $('#edescription').val(); 
        let inputavailability = $('#eavailability').val();
        let inputprice = $('#eprice').val(); 
        let inputquantity = $('#equantity').val();
        let inputphotography = $('#ephotography').val();  

        if (
            inputreference == "" ||
            inputbrand == "" ||
            inputcategory == "" ||
            inputmateriales == "" ||
            inputdimensiones == "" ||
            inputdescription == "" ||
            inputavailability == "" ||
            inputprice == "" || 
            inputquantity == "" ||
            inputphotography == "" 
        ){
            alert("Debe diligenciar todos los campos")
            return
        }else{
            $.ajax({
                url:myurl,
                type:'PUT',
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify({ reference: inputreference, brand: inputbrand, category: inputcategory, materiales: inputmateriales, dimensiones: inputdimensiones, description: inputdescription, availability: inputavailability, price: inputprice, quantity: inputquantity, photography: inputphotography }), 
                success:function(result){
                    alert("Edicion realizada con exito!!!")
                    window.location.reload() 
                }
            });
        }
    });    
    
}
