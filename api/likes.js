const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function postLikes(postId){
    const res = await fetch(`${API_URL}/likes/${postId}/toggle`, {
        method: "POST",
    })
    return await res.json()
}

async function getLikes(postId){
    const res = await fetch(`${API_URL}/likes/${postId}`, {
        method: "GET",
    })
    return await res.json()
}

async function getLikesUser(userId){
    const res = await fetch(`${API_URL}/likes/user/${userId}`, {
        method: "GET"
    })
    return await res.json()
}

async function getLikesCount(postId){
    const res = await fetch(`${API_URL}/likes/${postId}/count`, {
        method: "GET",
    })
    return await res.json()
}

async function getLikesCheck(postId){
    const res = await fetch(`${API_URL}/likes/${postId}/check`, {
        method: "GET",
    })
    return await res.json()
}

export {postLikes, getLikes, getLikesUser, getLikesCount, getLikesCheck}


