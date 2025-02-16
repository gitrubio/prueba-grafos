import { isProduction } from "@/constants/data";

class MinecraftApi {
    private static instance: MinecraftApi;
  
    private constructor() {}
  
    static getInstance(): MinecraftApi {
      if (!MinecraftApi.instance) {
        MinecraftApi.instance = new MinecraftApi();
      }
      return MinecraftApi.instance;
    }
    
    private getApiUrl(url: string) {
      if (isProduction) {
        return  `/.netlify/functions/proxy?url=${encodeURIComponent(url)}`;
      }
  
      return url;
    }

    async get(url: string) {
      try {
        const response = await fetch(this.getApiUrl(url), { method: "GET" });
  
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error("Fetch error:", error);
        return null;
      }
    }
  }

  export const mineCraftApi = MinecraftApi.getInstance();