import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL


export const register = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/register`, userData)

        const data = response.data
        console.log(data)
        return data
    } catch (error) {
        return error.response.data
    }
}

export const login = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/auth/login`, userData)
        const data = response.data
        console.log(data)
        return data
    } catch (error) {
       return error.response 
    }
}