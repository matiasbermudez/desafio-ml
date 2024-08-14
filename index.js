function main() {
    const form = document.querySelector('#form__busqueda');
    const contenedorDeProductos = document.querySelector('.contenedor__productos')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const producto = e.target.producto.value
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                for (let i = 0; i < 5; i++) {
                    //CREO CONTENEDOR PRINCIPAL Y LE DOY SU CLASE PARA RELLENARLO AL FINAL
                    const nuevoDivEl = document.createElement('div')
                    nuevoDivEl.classList.add('contenedor__productos-div')

                    //CREO LA IMAGEN, LE CONFIGURO SU SRC Y LA AGREGO COMO ULTIMO HIJO
                    const imgEl = document.createElement('img')
                    imgEl.src = `${data.results[i].thumbnail}`
                    nuevoDivEl.append(imgEl)

                    //CREO CONTENEDOR PARA LA INFORMACION Y LE DOY SU CLASE
                    const divInfoEl = document.createElement('div')
                    divInfoEl.classList.add('contenedor__informacion')

                    //CREO EL CONTENEDOR PARA EL H3 Y EL ESTADO DEL PRODUCTO
                    const divInfoContEl = document.createElement('div')

                    //CREO EL H3 PARA EL NOMBRE DEL PRODUCTO Y LE CARGO SU TITLE CON TEXTCONTENT 
                    const tituloEl = document.createElement('h3')
                    tituloEl.textContent = `${data.results[i].title}`
                    //CREO EL P PARA EL ESTADO DEL PRODUCTO Y LE CARGO SU CONDITION CON TEXTCONTENT 
                    const condicionEl = document.createElement('p')
                    condicionEl.textContent = `${data.results[i].condition}`
                    //CREADO Y CARGADOS LOS H3 Y P LO AGREGO COMO APPENDCHILD AL CONTENEDOR DE INFORMACION
                    divInfoContEl.appendChild(tituloEl)
                    divInfoContEl.appendChild(condicionEl)
                    //AGREGO EL CONTENEDOR AL DIVINFO
                    divInfoEl.appendChild(divInfoContEl)
                    //CREO Y CARGO LA CANTIDAD DE VENDIDOS Y LOS AGREGO COMO APPENDCHILD AL DIVINFO
                    const vendidosEl = document.createElement('p')
                    vendidosEl.textContent = `Vendidos : ${data.results[i].installments.amount}`
                    divInfoEl.appendChild(vendidosEl)
                    //CARGADA Y CREADA TODA LA INFO LA AGREGO AL NUEVODIV QUE ES EL CONTENEDOR PRINCIPAL DEL PRODUCTO UNITARIO
                    nuevoDivEl.appendChild(divInfoEl)
                    //CREO EL SPAN DE PRECIO Y LO AGREGO A CONTENEDOR PRINCIPAL DEL PRODUCTO UNITARIO
                    const precioEl = document.createElement('span')
                    precioEl.textContent = `$ ${data.results[i].price}`
                    nuevoDivEl.appendChild(precioEl)
                    //CARGO EL CONTENEDOR UNITARIO AL CONTENEDOR GENERAL DE LA WEB
                    contenedorDeProductos.appendChild(nuevoDivEl)
                }
            })
    })

}

main();

//https://api.mercadolibre.com/sites/MLA/search?q=
//ESTRUCTURA QUE DEBO SEGUIR EN LA CREACION DE LOS ELEMENTOS SEGUN MI PRUEBA JAJA
//  <div class="contenedor__productos-div">
//                 <img src="./prueba.png" alt="imagen Producto">
//                 <div class="contenedor__informacion">
//                     <div>
//                         <h3>Nombre del producto</h3>
//                         <p>Nuevo</p>
//                     </div>
//                     <p>Vendidos: 34</p>
//                 </div>
//                 <span >$1111</span>
//  </div> 