import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

if (!baseURL) throw new Error("No API url define in environment variables.");

const instance = axios.create({ baseURL });

export async function fetchJobs() {
    try {
        const response = await instance.get(`${baseURL}/jobs`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch jobs: ${error}`);
        throw error;
    }
}

export async function fetchJobById(jobId) {
    try {
        const response = await instance.get(`${baseURL}/jobs/${jobId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch job with ID ${jobId}: ${error}`);
        throw error;
    }
}