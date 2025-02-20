
export const mineCraftApi = {
    
    async get<T>(url: string): Promise<T> {
        const response = await fetch("https://minecraftskills.netlify.app/.netlify/functions/proxy?url="+encodeURIComponent(url));
        if (!response.ok) throw new Error("Error fetching data");
        return await response.json() as T;
     
    }

}