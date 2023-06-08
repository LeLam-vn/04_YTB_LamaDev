import axios from "axios";

const BASE_URL = "http://localhost:5009/api";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFjNGUxYjkyMDY5NGYzZjNiODEyNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjI1NzYzNCwiZXhwIjoxNjg2NTE2ODM0fQ.CUVEdjKm_J5oCpLG5W7CiqxDN3FSPYKegOOQU5oI08g'


export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})