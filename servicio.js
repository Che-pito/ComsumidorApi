//Pasos para consumir datos de un api

//1. Se establece para donde voy
//2. Se configura la peticion de envio
//3. Llamo al servicio

export async function consumirParaBuscarUsuario(){

    const URL="http://localhost:8000/usuarios"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let usuarios=await respuestaInicial.json()

    console.log(usuarios)
}

export async function consumirParaBGuardarUsuario(datosEnvio){
    const URL="http://localhost:8000/usuarios"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let usuarios=await respuestaInicial.json()
}

export async function consumirParaBuscarGasto(){

    const URL="http://localhost:8000/gastos"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let gastos=await respuestaInicial.json()

    console.log(gastos)
}

export async function consumirParaBGuardarGasto(datosEnvio){
    const URL="http://localhost:8000/gastos"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let gastos=await respuestaInicial.json()
}

export async function consumirParaBuscarCategoria(){

    const URL="http://localhost:8000/categorias"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let categorias=await respuestaInicial.json()

    console.log(categorias)
}

export async function consumirParaBGuardarCategoria(datosEnvio){
    const URL="http://localhost:8000/categorias"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let categorias=await respuestaInicial.json()
}

export async function consumirParaBuscarMetodoPago(){

    const URL="http://localhost:8000/metodosPagos"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let metodosPagos=await respuestaInicial.json()

    console.log(metodosPagos)
}

export async function consumirParaBGuardarMetodoPago(datosEnvio){
    const URL="http://localhost:8000/metodosPagos"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let metodosPagos=await respuestaInicial.json()
}