import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) throw new Error("No API url define in environment variables.");

const instance = axios.create({ baseURL });

export async function fetchVillagers() {
    try {
        const response = await instance.get(`${baseURL}/villagers`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villagers: ${error}`);
        throw error;
    }
}

export async function fetchVillagerById(villagerId) {
    try {
        const response = await instance.get(`${baseURL}/villagers/${villagerId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villager with the ID ${villagerId}: ${error}`);
        throw error;
    }
}

export async function fetchVillagersByGender(gender) {
    try {
        const response = await instance.get(`${baseURL}/villagers/gender/${gender}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villagers with the gender ${gender}: ${error}`);
        throw error;
    }
}