import getUsers from "@/lib/users";

export function GET() {
    let users = getUsers();
    return Response.json(users)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let users = getUsers();
    let sig = Math.max(...users.map(u => u.id)) + 1

    const newUser = await request.json()
    users.push({ id: sig, ...newUser })
    return Response.json(users)
}

