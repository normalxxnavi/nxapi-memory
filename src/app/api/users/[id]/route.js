import getUsers from "@/lib/users";

export function GET(request, { params }) {
    let users = getUsers();
    let usuario = users.find(user => user.id == params.id)

    return Response.json(usuario)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let users = getUsers();
    // Obtenemos posición    
    const pos = users.findIndex(user => user.id == params.id)

    // Modificamos usuario
    const newUser = await request.json()
    users.splice(pos, 1, { id: Number(params.id), ...newUser })

    return Response.json(users)
}


export function DELETE(request, { params }) {
    let users = getUsers();
    // Obtenemos posición    
    const pos = users.findIndex(user => user.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        users.splice(pos, 1)

    return Response.json(users)
}