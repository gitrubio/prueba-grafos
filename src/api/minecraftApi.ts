import { isProduction } from "@/constants/data";

export const mineCraftApi = {

    async get(url: string){
        const endpoint = isProduction
        ? "/.netlify/functions/proxy?url=" + encodeURIComponent(url)
        : url;
    
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Error fetching data");
        return await response.json();
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    }

}