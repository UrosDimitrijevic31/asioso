import axios from "axios";
import { endpoints } from "./endpoints";

export const getNews = async () => {
    try {
        const response = await axios.get(
            `${endpoints.BASE_URL}=${endpoints.TECH_NEWS}&${endpoints.API_KEY}`
        );
        return await response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};
