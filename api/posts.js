const API_URL = "http://92.255.79.122:9999/api/v1/auth"

async function postPosts(caption, image_url, location){
    const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        body:JSON.stringify({
            caption,
            image_url,
            location
        })
    })
    return await res.json()
}

async function getPosts(page, limit){
    const res = await fetch(`${API_URL}/posts?page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}

async function postsID(id){
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET"
    })
    return await res.json()
}

async function putPosts(id, caption, location){
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            caption,
            location
        })
    })
    return await res.json()
}

async function deletePosts(id){
    const res = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE",
    })
    return await res.json()
}

async function getPostsUser(userId, page, limit){
    const res = await fetch(`${API_URL}/posts/$user/{userId}?page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}

async function getPostsFeed(page, limit){
    const res = await fetch(`${API_URL}/posts/feed??page=${page}&limit=${limit}`, {
        method: "GET",
    })
    return await res.json()
}



export { postPosts, getPosts, postsID, putPosts, deletePosts, getPostsUser, getPostsFeed  }



