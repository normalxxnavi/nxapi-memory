import getProductos from "@/lib/productos";

export function GET(request, { params }) {
    let productos = getProductos();
    let producto = users.find(producto => producto.id == params.id)

    return Response.json(producto)
}

export async function PUT(request, { params }) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let productos = getProductos();
    // Obtenemos posición    
    const pos = productos.findIndex(producto => producto.id == params.id)

    // Modificamos usuario
    const newUser = await request.json()
    productos.splice(pos, 1, { id: Number(params.id), ...newUser })

    return Response.json(productos)
}


export function DELETE(request, { params }) {
    let productos = getProductos();
    // Obtenemos posición    
    const pos = productos.findIndex(producto => producto.id == Number(params.id))

    // Eliminamos usuario
    if (pos != -1)  // Si es encontrado
        productos.splice(pos, 1)

    return Response.json(productos)
}