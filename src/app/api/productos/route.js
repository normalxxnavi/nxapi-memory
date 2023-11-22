import getProductos from "@/lib/productos";

export function GET() {
    let productos = getProductos();
    return Response.json(productos)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let productos = getProductos();
    let sig = Math.max(...productos.map(p => p.id)) + 1

    const newProducto = await request.json()
    productos.push({ id: sig, ...newProducto})
    return Response.json(productos)
}

