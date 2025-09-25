import apiRequest from "."

const API_URL = "http://92.255.79.122:9999/api/v1/posts"

async function createPost(caption, image_url, location){
    let token = window.sessionStorage.getItem("accessToken")
    return await apiRequest(token, API_URL, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            caption,
            image_url,
            location
        })
    })
}   

async function createPost(caption, image_url, location){
    let resp = await fetch(API_URL, {
        method: "GET",
        credentials: "include",
        headers:{
            "Authorization": `Bearer ${JSON.parse(window.sessionStorage.getItem("tokes").accessToken)}`
        },
        
    })
}





