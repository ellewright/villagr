import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) throw new Error("No API url define in environment variables.");

const instance = axios.create({ baseURL });

export async function fetchVillagers() {
    try {
        const response = await instance.get(`${baseURL}/villagers`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch villagers:", error);
        throw error;
    }
}