let code=location.search
console.log(code);
let codigoProducto= new URLSearchParams(code)
console.log(codigoProducto);
let codigoSeleccionado= codigoProducto.get('code')
console.log(codigoSeleccionado);
let seleccionUsuario=codigoSeleccionado-1;


fetch('../productos/teles.json')
.then((producto)=>{
    return producto.json()
})
.then((productos)=>{
    localStorage.setItem("code", productos[seleccionUsuario].code)
    const pcode = localStorage.getItem("code");
    const showCode = document.getElementById("code");
    showCode.innerHTML = `Código del Producto: ${seleccionUsuario}`;

    localStorage.setItem("nombre", productos[seleccionUsuario].nombre)
    const pnombre=localStorage.getItem("nombre")
    const showNombre=document.getElementById("detalles")
    showNombre.innerHTML=`<h2>Nombre del producto: ${pnombre}</h2>`

    localStorage.setItem("descripcion", productos[seleccionUsuario].descripcion)
    const pdescripcion=localStorage.getItem("descripcion")
    const showDescripcion=document.getElementById("detalles")
    showDescripcion.innerHTML=`
    <p>${pdescripcion}</p>`
    
    localStorage.setItem("precio", productos[seleccionUsuario].precio)
    const pPrecio=localStorage.getItem("precio")
    const showPrecio=document.getElementById("precio")
    showPrecio.innerHTML=`<h2>Precio ${pPrecio}</h2>`

    localStorage.setItem("imagen",productos[seleccionUsuario].imagen)
    const pimagen=localStorage.getItem("imagen")
    const showImagen=document.getElementById("imagenes1")
    showImagen.innerHTML=`<img class="" src="${pimagen}">
    `

    localStorage.setItem("imagen2",productos[seleccionUsuario].imagen2)
    const pimagen2=localStorage.getItem("imagen2")
    const showImagen2=document.getElementById("imagenes")
    showImagen2.innerHTML=`<img class="" src="${pimagen2}">`

    localStorage.setItem("imagen3",productos[seleccionUsuario].imagen3)
    const pimagen3=localStorage.getItem("imagen3")
    const showImagen3=document.getElementById("imagenes2")
    showImagen3.innerHTML=`<img class="" src="${pimagen3}">`
})