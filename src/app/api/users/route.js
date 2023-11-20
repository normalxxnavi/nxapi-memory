import { Users } from "@/lib/users";

export function GET() {    
    return Response.json(Users)
}


export async function POST(request) {
    const content = request.headers.get('content-type')

    if (content != 'application/json')
        return Response.json({ message: 'Debes proporcionar datos JSON' })

    let sig = Math.max( ...Users.map( u => u.id ))+1

    const newUser = await request.json()
    Users.push({ id: sig, ...newUser })
    return Response.json(Users)
}

