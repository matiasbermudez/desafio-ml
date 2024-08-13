const form = document.querySelector('#form__busqueda');


function main () {

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const producto = e.target.producto.value
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`)
            .then((res) => res.json())
            .then((data)=> console.log(data.results))
    })

}

main();
//https://api.mercadolibre.com/sites/MLA/search?q=