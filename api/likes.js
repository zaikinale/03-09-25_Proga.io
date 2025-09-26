const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function postLikes(postId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/likes/${postId}/toggle`, {
        method: "POST",
    })

    // const res = await fetch(`${API_URL}/likes/${postId}/toggle`, {
    //     method: "POST",
    // })
    // return await res.json()
}

async function getLikes(postId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/likes/${postId}`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/likes/${postId}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function getLikesUser(userId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/likes/user/${userId}`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/likes/user/${userId}`, {
    //     method: "GET"
    // })
    // return await res.json()
}

async function getLikesCount(postId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/likes/${postId}/count`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/likes/${postId}/count`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function getLikesCheck(postId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/likes/${postId}/check`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/likes/${postId}/check`, {
    //     method: "GET",
    // })
    // return await res.json()
}

export {postLikes, getLikes, getLikesUser, getLikesCount, getLikesCheck}


