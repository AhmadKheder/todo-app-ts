

type Args = { endPoint: string, method: 'GET' | 'POST', body?: any }


export default async function sendRequest<T>(arg: Args) {
    const { method, endPoint, body } = arg


    const request = await fetch(`http://localhost:8080/${endPoint}`, {
        method: method,
        ...(body ? { body: JSON.stringify(body) } : {}),
        headers: {
            "Content-Type": "application/json",
            "user-auth-token": "Test"
        },
        mode: "cors",
    })
    const res = await request.json()
    return res as T
}

