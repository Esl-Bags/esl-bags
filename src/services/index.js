import axios from "axios"
import CarouselService from "./carousel"

const API_URL = import.meta.env.VITE_API_URL

const httpCliente = axios.create({
    baseURL: API_URL
})

export default {
    carousel: CarouselService(httpCliente)
}