let seed = [
    { id: 1, nombre: "Limpiacristales", precio: 20.99 , categoria: "Limpieza"},
    { id: 2, nombre: "Pollo al Curri", precio: 14.50 , categoria: "Carne"},
    { id: 3, nombre: "Milka Chocolate", precio: 5.99 , categoria: "Dulces"}
]

let productos = null;

export default function getProductos() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!productos) 
        productos = seed;
    
    return productos;
}

