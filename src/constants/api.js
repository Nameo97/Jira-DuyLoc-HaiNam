import axios from 'axios'
import { ACCESS_TOKEN } from '../util/settings/config'

const TokenCyberSoft =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
    

const baseURL = 'https://jiranew.cybersoft.edu.vn/api/'


export const api = axios.create()

api.interceptors.request.use((config) => {
    config = {
        ...config,
        headers: {
            TokenCyberSoft,
            Authorization: 'Bearers ' + localStorage.getItem(ACCESS_TOKEN),
        },
        baseURL,
    }

    return config
})
