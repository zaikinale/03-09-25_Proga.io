const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function postComments(postId, content){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${postId}`, {
        method: "POST",
        body: JSON.stringify({
            content
        })
    })
    
    // const res = await fetch(`${API_URL}/comments/${postId}`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         content
    //     })
    // })
    // return await res.json()
}

async function getComments(id){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/comments/${id}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function putComments(id, content){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "PUT", 
        body: JSON.stringify({
            content,
        })
    })

    // const res = await fetch(`${API_URL}/comments/${id}`, {
    //     method: "PUT", 
    //     body: JSON.stringify({
    //         content,
    //     })
    // })
    // return await res.json()
}

async function deleteComments(id){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/${id}`, {
        method: "DELETE",
    })

    // const res = await fetch(`${API_URL}/comments/${id}`, {
    //     method: "DELETE",
    // })
    // return await res.json()
}

async function getCommentsPost(postId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/post/${postId}`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/comments/post/${postId}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function getCommentsUser(userId){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/comments/user/${userID}`, {
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/comments/user/${userID}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

export {postComments, getComments, putComments, deleteComments, getCommentsPost, getCommentsUser}


