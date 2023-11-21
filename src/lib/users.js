let seed = [
    { id: 1, nombre: "Jose", edad: 20 },
    { id: 2, nombre: "Juan", edad: 21 },
    { id: 3, nombre: "Eva", edad: 22 }
]

let users = null;

export default function getUsers() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!users) 
        users = seed;
    
    return users;
}

