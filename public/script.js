const btnBorrar = document.getElementById("btnBorrar")
btnBorrar.addEventListener('click', ()=>{
    function alerta() {
        const borrar = confirm('¿Está seguro que desea eliminar este usuario?');
        
        if (borrar) 
            return true;
        else 
            return false;
    
    }
})