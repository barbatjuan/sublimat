const asyncMock = [
    {
        id: 1,
        name: "Taza de Halloween - Calabaza",
        category: "Halloween",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-30-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con diseño de calabaza y detalles de Halloween.",
    },
    {
        id: 2,
        name: "Taza de Halloween - Fantasmas",
        category: "Halloween",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/6-26.jpg",
        stock: 10,
        description: "Taza sublimada con divertidos fantasmas y tonos oscuros.",
    },
    {
        id: 3,
        name: "Taza de Futbol - Peñarol",
        category: "Futbol",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-Penarol.jpg",
        stock: 10,
        description: "Taza sublimada con el logo del equipo favorito.",
    },
    {
        id: 4,
        name: "Taza de Futbol - Chacarita",
        category: "Futbol",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-Barcelona-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con una ilustración del estadio local.",
    },
    {
        id: 5,
        name: "Taza Halloween - Flores",
        category: "Halloween",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/11-1-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con flores y mensaje para el Halloween.",
    },
    {
        id: 6,
        name: "Taza Halloween - Corazón",
        category: "Halloween",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/1-20-600x600.jpg",
        stock: 10,
        description: "Taza sublimada con un corazón y frase especial para mamá.",
    },///////
    {
        id: 7,
        name: "Taza de Navidad - Santa Claus",
        category: "Navidad",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-31-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con un diseño navideño de Santa Claus.",
    },///////////////
    {
        id: 8,
        name: "Taza de Navidad - Renos",
        category: "Navidad",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-31-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con renos y copos de nieve.",
    },/////
    {
        id: 9,
        name: "Taza de Navidad - Mejor Amigo",
        category: "Navidad",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/3-29-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con mensaje para el mejor amigo.",
    },/////
    {
        id: 10,
        name: "Taza de Navidad - Sonrisa",
        category: "Navidad",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-17-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con diseño de sonrisa y frases amigables.",
    },///////////
    {
        id: 11,
        name: "Taza de San Valentin - Globos",
        category: "San Valentin",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/2-19-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con globos y mensajes de San Valentin.",
    },////////////////
    {
        id: 12,
        name: "Taza de San Valentin - Pastel",
        category: "San Valentin",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/Aries-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con diseño de pastel y velas.",
    },/////////////
    {
        id: 13,
        name: "Taza de San Valentin - Corazones",
        category: "San Valentin",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/8-9-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con corazones y mensaje de amor.",
    },////////////
    {
        id: 14,
        name: "Taza de San Valentin - Amor Infinito",
        category: "San Valentin",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/Volkswagen-2-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con símbolo de infinito y frase romántica.",
    },///////////////
    {
        id: 15,
        name: "Taza de Animales - Motivación",
        category: "Animales",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/3-22-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con frase motivacional.",
    },//////////////
    {
        id: 16,
        name: "Taza de Animales - Sueños",
        category: "Animales",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/Odontologo-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con frases sobre alcanzar los sueños.",
    },////////
    {
        id: 17,
        name: "Taza de Animales - Gato",
        category: "Animales",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/Programador-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con diseño de un gato adorable.",
    },///////////////
    {
        id: 18,
        name: "Taza de Animales - Perro",
        category: "Animales",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/4-24-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con diseño de un perro amistoso.",
    },/////////////
    {
        id: 19,
        name: "Taza de Futbol - Mañana",
        category: "Futbol",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/Led-Zeppelin-1-300x300.jpg",
        stock: 10,
        description: "Taza sublimada con diseño perfecto para las mañanas.",
    },
    {
        id: 20,
        name: "Taza de Futbol - Futbol y Libros",
        category: "Futbol",
        price: 300,
        img: "https://www.sublimat.uy/wp-content/uploads/2024/10/12-Primo-980x980.jpg",
        stock: 10,
        description: "Taza sublimada con frase para amantes del Futbol y la lectura.",
    },
];

export const uniqueCategories = [...new Set(asyncMock.map((producto) => producto.category))];


export const fetchProductos = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(asyncMock);
        }, 1000);
    });
};
export default asyncMock;
