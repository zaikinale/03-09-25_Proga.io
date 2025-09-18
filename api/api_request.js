import { refreshTokens } from "./auth.js"

const API_URL = "http://92.255.79.122:9999/api/v1/auth"


async function apiRequest(token, API_URL, options = {}) {
    const resp = await fetch(API_URL, {
        headers: {
            'Authorization': `Bearer ${token}`,
            ...options.headers,
        },
        ...options.body
    })
    return resp.json()
    // let json;
    // try {
    //     json = await resp.json()
    // } catch (e) {
    //     json = {}
    // }

    // return {
    //     json,
    //     status: resp.status,
    //     ok: resp.ok
    // }
}

async function createPost(caption, image_url, location){
    let token = sessionStorage.getItem('accessToken')
    let resp = await apiRequest(token, API_URL, {
        method: "POST",
        body:JSON.stringify({
            caption,
            image_url,
            location
        })
    })
    if(resp.status == 401) {
        await refreshTokens(token)

        return await apiRequest(token, API_URL, {
            method: "POST",
            body:JSON.stringify({
                caption,
                image_url,
                location
            })
        })
    }
}

// async function createPost(caption, image_url, location) {
//     let token = sessionStorage.getItem('accessToken')
//     let resp = await fetch(API_URL, {
//         method: 'GET',
//         credentials: true, 
//         headers: {
//             'Authorization': `Bearer ${JSON.parse(window.sessionStorage.getItem('tokens').accessToken)}`
//         },
//     })
//     if(resp.status == 401) {
//         apiRequest(token, API_URL, obj)
//     }
// }