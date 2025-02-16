import { isProduction } from "@/constants/data";

export const mineCraftApi = {
    
    async get<T>(url: string): Promise<T> {
        const endpoint = isProduction
        ? "/.netlify/functions/proxy?url=" + encodeURIComponent(url)
        : url;
    
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Error fetching data");
        return await response.json() as T;
     
    }

}