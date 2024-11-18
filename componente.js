import { consumirParaBuscarUsuario, consumirParaBGuardarUsuario, consumirParaBuscarGasto, consumirParaBGuardarGasto, consumirParaBGuardarCategoria, consumirParaBuscarCategoria, consumirParaBGuardarMetodoPago, consumirParaBuscarMetodoPago } from "./servicio.js"
//Buscando a nemo
consumirParaBuscarUsuario()
consumirParaBuscarGasto()
consumirParaBuscarCategoria()
consumirParaBuscarMetodoPago()
.then(function(respuesta){
    console.log(respuesta)
})
//Guardando
