//capturo elemento del html
let teles=document.querySelector('.teles');

//console.log(teles);

//Lista de teles en formato JSON
fetch('../productos/teles.json')
.then((producto)=>{
    return producto.json()
})
.then((productos)=>{
   // console.log(productos);
   productos.forEach(element => {
    teles.innerHTML += `
    <article class="producto col-12 col-md-6 col-lg-4">
            <img class="w-100 " src="${element.imagen} " alt="${element.nombre}">
            <h2>Nombre: ${element.nombre}</h2>
            <h2>Modelo: ${element.modelo}</h2>
            <a href="detalles.html?code=${element.code}" class="btn btn-outline-primary d-block">Más detalles</a>
    </article>
    `
   });
})
.catch((error)=>{
    console.log('Hubo un error '+error);
})