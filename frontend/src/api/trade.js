import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL + "/trades";

if (!baseURL) throw new Error("No API url define in environment variables.");

const instance = axios.create({ baseURL });

export async function FetchTrades() {
    try {
        const response = await instance.get(baseURL);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch trades: ${error}`);
        throw error;
    }
}

export async function fetchTradesByVillagerId(villagerId) {
    try {
        const response = await instance.get(`${baseURL}/villager/${villagerId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch trades for Villager with ID ${villagerId}: ${error}`);
        throw error;
    }
}