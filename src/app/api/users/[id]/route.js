import { Users } from "@/lib/users";

export function GET(request, { params }) {
    let usuario = Users.find(user => user.id == params.id)

    return Response.json(usuario)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    // Obtenemos posición    
    const pos = Users.findIndex(user => user.id == params.id)

    // Modificamos usuario
    const newUser = await request.json()
    Users.splice(pos, 1, { id: Number(params.id), ...newUser })

    return Response.json(Users)
}


export function DELETE(request, { params }) {
    // Obtenemos posición    
    const pos = Users.findIndex(user => user.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        Users.splice(pos, 1)

    return Response.json(Users)
}