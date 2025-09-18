import apiRequest from "."

const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function postPosts(caption, image_url, location){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, API_URL, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({
            caption,
            image_url,
            location
        })
    })
}

async function getPosts(page, limit){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts?page=${page}&limit=${limit}`, {
        credentials: "include",
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/posts?page=${page}&limit=${limit}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function postsID(id){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        credentials: "include",
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/posts/${id}`, {
    //     method: "GET"
    // })
    // return await res.json()
}

async function putPosts(id, caption, location){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({
            caption,
            location
        })
    })

    // const res = await fetch(`${API_URL}/posts/${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify({
    //         caption,
    //         location
    //     })
    // })
    // return await res.json()
}

async function deletePosts(id){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/${id}`, {
        credentials: "include",
        method: "DELETE",
    })

    // const res = await fetch(`${API_URL}/posts/${id}`, {
    //     method: "DELETE",
    // })
    // return await res.json()
}

async function getPostsUser(userId, page, limit){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/$user/{userId}?page=${page}&limit=${limit}`, {
        credentials: "include",
        method: "GET",
    })

    // const res = await fetch(`${API_URL}/posts/$user/{userId}?page=${page}&limit=${limit}`, {
    //     method: "GET",
    // })
    // return await res.json()
}

async function getPostsFeed(page, limit){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, `${API_URL}/posts/feed??page=${page}&limit=${limit}`, {
        credentials: "include",
        method: "GET",
    })
    
    // const res = await fetch(`${API_URL}/posts/feed??page=${page}&limit=${limit}`, {
    //     method: "GET",
    // })
    // return await res.json()
}



export { postPosts, getPosts, postsID, putPosts, deletePosts, getPostsUser, getPostsFeed  }



