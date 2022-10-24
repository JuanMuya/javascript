
const contenedordeCompras = document.getElementById("contenedordeCompras");

const carritoCargado = document.getElementById("carrito");

const carroContenedorU = document.getElementById("carroContenedor");

const carritoNumero = document.getElementById("carritoNumero");




const alimentos = [
    {
        nombre: "Pan Tortuga",
        precio: 60,
        id: 1,
        img: "https://f.fcdn.app/imgs/b1465b/www.distribuidoradelacosta.com.uy/dicouy/7110/original/catalogo/1036331036331/1920-1200/pan-tortuga-x4-pangiorno-pan-tortuga-x4-pangiorno.jpg",
        cantidad: 1,
    },
    {
        nombre: "Pan Batta",
        precio: 65,
        id: 2,
        img: "https://images-ti-vm1.tiendainglesa.com.uy/medium/P058817-1.jpg?20170830115456,Panbatta-Kg-en-Tienda-Inglesa",
        cantidad: 1,
    },
    {
        nombre: "Pan Francés",
        precio: 60,
        id: 3,
        img: "https://eosdelivery.com.ar/5327-large_default/PAN-FRANCES-EOS-X100G.jpg",
        cantidad: 1,
    },
    {
        nombre: "Queso Cheddar",
        precio: 25,
        id: 4,
        img: "https://image.shutterstock.com/image-photo/pieces-cheddar-cheese-on-white-260nw-1308958996.jpg",
        cantidad: 1,
    },
    {
        nombre: "Queso de Sanwich",
        precio: 25,
        id: 5,
        img: "https://w7.pngwing.com/pngs/426/598/png-transparent-cheese-sandwich-cuisine-of-the-united-states-cheesecake-american-cheese-swiss-cheese-cheese-food-cheese-beyaz-peynir.png",
        cantidad: 1,
    },
    {
        nombre: "Queso Crema",
        precio: 20,
        id: 6,
        img: "https://cdn.foodandwineespanol.com/2021/08/queso-crema.jpg",
        cantidad: 1,
    },
    {
        nombre: "Queso Mozzarella",
        precio: 20,
        id: 7,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IpoIN_KOkMbhkqPdmSTQDnLjAp6JbAoQzM933VyexqjY6ptOmJ696Fmlvf72p_K78gI&usqp=CAU",
        cantidad: 1,
    },
    {
        nombre: "Lechuga",
        precio: 15,
        id: 8,
        img: "https://okdiario.com/img/recetas/2016/09/18/lechuga-boston.jpg",
        cantidad: 1,
    },
    {
        nombre: "Tomáte",
        precio: 25,
        id: 9,
        img: "https://www.quironsalud.es/idcsalud-client/cm/images?locale=es_ES&idMmedia=2299323",
        cantidad: 1,
    },
    {
        nombre: "Acelga",
        precio: 15,
        id: 10,
        img: "https://www.gastronomiavasca.net/uploads/image/file/3309/w700_acelgas.jpg",
        cantidad: 1,
    },
    {
        nombre: "Hamburguesa de Lenteja",
        precio: 85,
        id: 11,
        img: "https://parrillerovegetariano.com/wp-content/uploads/2021/02/Hamburguesa-de-lentejas.png",
        cantidad: 1,
    },
    {
        nombre: "Hamburguesa de Garbanzo",
        precio: 85,
        id: 12,
        img: "https://cdn.ornelarecetas.com.ar/wp-content/uploads/2020/05/hamburguesa-garbanzo-582x388.jpeg",
        cantidad: 1,
    },
    {
        nombre: "Hamburguesa de Espinaca",
        precio: 85,
        id: 13,
        img: "https://t1.uc.ltmcdn.com/es/posts/0/4/2/como_hacer_hamburguesas_de_espinacas_33240_orig.jpg",
        cantidad: 1,
    },
    {
        nombre: "Morrón",
        precio: 25,
        id: 14,
        img: "https://www.solocarnes.com/wp-content/uploads/2019/02/como-pelar-un-pimiento.jpg",
        cantidad: 1,
    },
    {
        nombre: "Cebolla",
        precio: 20,
        id: 15,
        img: "https://5aldia.cl/wp-content/uploads/2018/03/cebolla.jpg",
        cantidad: 1,
    },
    {
        nombre: "Cebolla Colorada",
        precio: 25,
        id: 16,
        img: "https://www.fructusterrum.com/wp-content/uploads/2020/07/cebolla-roja-1.jpg",
        cantidad: 1,
    },
    {
        nombre: "Cebolla Caramelizada",
        precio: 35,
        id: 17,
        img: "https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/picture/91/IMG_4565_500px.jpg",
        cantidad: 1,
    },
    {
        nombre: "Mayonesa",
        precio: 0,
        id: 18,
        img: "https://www.conmuchagula.com/wp-content/uploads/2021/12/mayonesa.jpg",
        cantidad: 1,
    },
    {
        nombre: "Képchup",
        precio: 0,
        id: 19,
        img: "https://www.pequerecetas.com/wp-content/uploads/2019/02/ketchup-casero.jpg",
        cantidad: 1,
    },
    {
        nombre: "Mostaza",
        precio: 0,
        id: 20,
        img: "https://foodandtravel.mx/wp-content/uploads/2021/12/mostaza-taza.jpg",
        cantidad: 1,
    },
    {
        nombre: "Papas Fritas",
        precio: 120,
        id: 21,
        img: "https://mejorconsalud.as.com/wp-content/uploads/2013/07/patatas-fritas-.jpg",
        cantidad: 1,
    },
    {
        nombre: "Ensalada",
        precio: 100,
        id: 22,
        img: "https://imag.bonviveur.com/ensalada-de-lechuga-y-tomate-foto-cerca.jpg",
        cantidad: 1,
    },
    {
        nombre: "Ensalada Rusa",
        precio: 120,
        id: 23,
        img: "https://recetas123.net/wp-content/uploads/Ensalada-rusa.jpg",
        cantidad: 1,
    },
]



let carroDecompras = [];

alimentos.forEach((alimento) => {
    let content = document.createElement("div");
    content.className = "principal"
    content.innerHTML = `
<img src="${alimento.img}"> 
<h3>${alimento.nombre}</h3>
<p class="precio">${alimento.precio} $</p>
`;
    contenedordeCompras.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);


    comprar.addEventListener("click", () => {

        const repetir = carroDecompras.some((productoRepetido) => productoRepetido.id === alimento.id);
        console.log(repetir)

        // prod = todos los elementos dentro de carroDecompras //


        // Si hay dos elementos iguales dentro del carro (repetir da true), entramos en el carrito, encontramos el id de cada uno de los productos (prod), y si es igual al id de alimento, sumará uno. //
        if (repetir) {
            carroDecompras.map((prod) => {
                if (prod.id === alimento.id) {
                    prod.cantidad++;
                }
            });
        } else {

            carroDecompras.push({
                id: alimento.id,
                img: alimento.img,
                nombre: alimento.nombre,
                precio: alimento.precio,
                cantidad: alimento.cantidad,
            });
        }
        console.log(carroDecompras);
        carritoVisibe();
    });
});




