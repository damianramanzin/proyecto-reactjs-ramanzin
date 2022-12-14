const data = [
    {
        id: 1,
        title: "EL Hobbit - J.R.R Tolkien",
        price: 10500,
        detail:
        "Ilustrado por Alan Lee. Editorial: Harper Collins. Tapa blanda. Condición: nuevo.",
        img: "/assets/product-1.jpg",
    },
    {
        id: 2,
        title: "El Señor de los Anillos Trilogía - J.R.R Tolkien",
        price: 16000,
        detail:
        "Trilogía completa en estuche. Editorial: Bucket. Tapa blanda. Condición: nuevo.",
        img: "/assets/product-2.jpg",
    },
    {
        id: 3,
        title: "Harry Potter saga completa - J.K Rowling ",
        price: 16000,
        detail:
        "Saga completa en en estuche. Editorial: Salamandra. Tapa blanda. Condición: nuevo",
        img: "/assets/product-3.jpg",
    },
    {
        id: 4,
        title: "Una Vacante Imprevista - J.K Rowling",
        price: 5500,
        detail:
        "Editorial: Salamandra. Tapa blanda. Condición: nuevo.",
        img: "/assets/product-4.jpg",
    },
    {
        id: 5,
        title: "La Llamada de Cthulhu - H.P Lovecraft",
        price: 2000,
        detail:
        "Editorial: Granica. Tapa blanda. Condición: usado.",
        img: "/assets/product-5.jpg",
    },
    {
        id: 6,
        title: "La Sombra Fuera del Tiempo - H.P lovecraft",
        price: 8000,
        detail:
        "Editorial: Nevsky Prospects S.L. Tapa blanda. Condición: nuevo.",
        img: "/assets/product-6.jpg",
    }
];

export function getItem(){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve (data);
        },1000);
    });
}

export function getSingleItem(id){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve (data.find(item => item.id === id));
        },1000);
    });
}