import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL + "/villagers";

if (!baseURL) throw new Error("No API url define in environment variables.");

const instance = axios.create({ baseURL });

export async function fetchVillagers() {
    try {
        const response = await instance.get(baseURL);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villagers: ${error}`);
        throw error;
    }
}

export async function fetchVillagerByName(name) {
    try {
        const response = await instance.get(`${baseURL}/${name}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villager with the name ${name}: ${error}`);
        throw error;
    }
}

export async function fetchVillagersByGender(gender) {
    try {
        const response = await instance.get(`${baseURL}/gender/${gender}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villagers with the gender ${gender}: ${error}`);
        throw error;
    }
}

export async function fetchVillagersByJobId(jobId) {
    try {
        const response = await instance.get(`${baseURL}/job/${jobId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch villagers with the Job ID: ${jobId}: ${error}`);
        throw error;
    }
}