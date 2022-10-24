const carritoDetalles = () => {
    carroContenedorU.innerHTML = "";
    carroContenedorU.style.display = "flex";
    const carroHeader = document.createElement("div");
    carroHeader.className = "carro-header"
    carroHeader.innerHTML = `
<h1 class="carro-header-titulo">Carro</h1>
`;

    carroContenedorU.append(carroHeader);

    const carroButton = document.createElement("h1");
    carroButton.innerText = "Finalizar Compra";
    carroButton.className = "carroHeader-button";

    carroButton.addEventListener("click", () => {

        carroContenedorU.style.display = "none";

    });

    carroHeader.append(carroButton);



    carroDecompras.forEach((alimento) => {

        let carroContent = document.createElement("div");
        carroContent.className = "carro-content";
        carroContent.innerHTML = `
<img src="${alimento.img}">
<h3>${alimento.nombre}</h3>
<p>${alimento.precio} $ </p>
<p>Unidades: ${alimento.cantidad}</p>
<p>Subtotal: ${alimento.cantidad * alimento.precio} </p>

`;

        carroContenedorU.append(carroContent)

        console.log(carroDecompras.length);
        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-producto";
        carroContent.append(eliminar);

        eliminar.addEventListener("click", borrarProducto);
    });


    // "acc" (acumulador), "sui" o la palabra elegida(representa los elementos, en este caso alimentos)
    // y el número final, en este caso "0", es con el monto que empieza el acumulador.

    const total = carroDecompras.reduce((acc, sui) => acc + sui.precio * sui.cantidad, 0);

    const totalVentas = document.createElement("div");
    totalVentas.className = "total-ventas";
    totalVentas.innerHTML = `Total a pagar: ${total} $`;
    carroContenedorU.append(totalVentas);
};



carritoCargado.addEventListener("click", carritoDetalles)


const borrarProducto = () => {
    const foundId = carroDecompras.find((element) => element.id);

    carroDecompras = carroDecompras.filter((carroDecomprasId) => {

        return carroDecomprasId !== foundId;
    });

    carritoDetalles();
    carritoVisibe();
};


const carritoVisibe = () => {
    carritoNumero.style.display = "block";
    carritoNumero.innerText = carroDecompras.length;
}