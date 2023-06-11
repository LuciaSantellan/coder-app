const products = [
    {
        id:'1',
        name: 'Uñas esculpidas',
        price: 1300,
        category: 'servicios',
        img: 'https://media.glamour.mx/photos/632b2203cfc7c79387f5d898/master/w_1600%2Cc_limit/Tendencias-de-un%25CC%2583as-2023-20.jpeg',
        stock: 1000,
        description: 'Se construye la uña enteramente de acrílico. Se puede modificar el largo. Inlcuye manicura rusa combinada.'
    },
    {id: '2', name: 'Esmaltado semipermanente', price: 800, category: 'servicios', img:'https://media.glamour.mx/photos/632b2bbd8645b8d42bd2a909/master/w_1600%2Cc_limit/Tendencias-de-un%25CC%2583as-2023-21.jpeg', stock: 1000, description: 'Se coloca esmaltado sobre la uña natural, sin agregarle largo. Incluye manicura rusa combinada' },
    {id: '3', name: 'Kapping', price: 800, category: 'servicios', img:'https://media.glamour.mx/photos/632b1434bac8319e3c1d3ea9/1:1/w_1080,h_1080,c_limit/Tendencias-de-un%CC%83as-2023-4.jpeg', stock: 1000, description: 'Se coloca acrílico sobre la uña natural, sin agregarle largo. Incluye manicura rusa combinada.' }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 500);
    });
};