const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function register(login, email, password){
    const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        body:JSON.stringify({
            login,
            email,
            password
        })
    })
    return await res.json()
}

async function login(login_or_email, password){
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        body:JSON.stringify({
            login_or_email,
            password
        })
    })
    return await res.json()
}

async function logout(){
    const res = await fetch(`${API_URL}/logout`, {
        method: "POST"
    })
    return await res.json()
}

async function refreshTokens(access_token){
    const res = await fetch(`${API_URL}/refresh-tokens`, {
        method: "POST",
        body: JSON.stringify({
            access_token,
        })
    })
    return await res.json()
}

async function verifyEmail(token){
    const res = await fetch(`${API_URL}/verify-email`, {
        method: "POST",
        body: JSON.stringify({
            token,
        })
    })
    return await res.json()
}

export { register, login, logout, refreshTokens, verifyEmail }



